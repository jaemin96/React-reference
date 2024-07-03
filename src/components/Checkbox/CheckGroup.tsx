import React, { ReactNode, useEffect, useState } from 'react';
import { CheckBoxProps } from './CheckBox';

interface CheckGroupProps {
  className?: string;
  label?: string;
  id: string;
  children: ReactNode;
}

export const CheckGroup = ({ id, label, children }: CheckGroupProps) => {
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [childChecked, setChildChecked] = useState<{ [key: string]: boolean }>({}); // {"child-check" : true | false}

  /**
   * @param event
   * 부모 체크요소가 업데이트 되면 checked 값에 따라 isCheckedAll 값 상태를 업데이트하는 핸들러 함수
   * plus) 부모 체크요소의 값에 따라 자식 체크요소들의 값 또한 업데이트 되도록 setChildChecked를 통해 자식 체크요소들 업데이트하는 로직 추가
   * ? {} as {[key:string] : boolean} - reduce를 통해 각 child의 checked 값을 객체에 누적 저장하고 객체의 타입은 {key: true|false} 로 정의
   */
  const handleGroupCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsCheckedAll(checked);

    // update child checked - true
    const updatedChildChecked = React.Children.toArray(children).reduce(
      (obj, child) => {
        if (React.isValidElement<CheckBoxProps>(child)) {
          obj[child.props.id] = checked;
        }
        return obj;
      },
      {} as { [key: string]: boolean }
    );
    setChildChecked(updatedChildChecked);
  };

  /**
   * @param id
   * @param checked
   * 체크 상태가 업데이트 된 자식 요소를 기존의 자식 요소들의 상태에서 업데이트하는 핸들러 함수
   */
  const handleChildCheck = (id: string, checked: boolean) => {
    setChildChecked((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  /**
   * allChecked type boolean - true | false
   * allChecked - 객체 검사 후 모든 값이 true인 경우 true 그렇지 않은 경우 false
   * 자식 체크요소가 변경될 때마다 allChecked 상태 검사
   */
  useEffect(() => {
    const allChecked = Object.keys(childChecked).length > 0 && Object.values(childChecked).every((checked) => checked);
    setIsCheckedAll(allChecked);
  }, [childChecked]);

  return (
    <div className={['check-group'].join(' ')}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} name={label} checked={isCheckedAll} onChange={handleGroupCheck} />
        {label}
      </label>
      <div className="check-group-children">
        {React.Children.map(children, (child) => {
          if (React.isValidElement<CheckBoxProps>(child)) {
            return React.cloneElement(child, {
              checked: childChecked[child.props.id] || false,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                handleChildCheck(child.props.id, event.target.checked);
              },
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};
