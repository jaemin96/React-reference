import React, { useRef } from 'react';

interface GroupProps {
  defaultText: string;
  className?: string | '';
  type?: 'button' | 'label';
  items: string[];
}

const Group = ({ defaultText, className = '', type = 'button', items }: GroupProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>(defaultText);
  const groupRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  // [핸들러](그룹 리스트가 열려 있을 경우) 외부 영역 클릭 시 리스트 선택창 닫기
  const handleOutsideClick = (event: MouseEvent) => {
    const { target } = event;
    if (isOpen && groupRef?.current && !groupRef.current.contains(target as Node)) setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <div ref={groupRef} className={['group', `group-${type}`, `${className}`].join(' ')} onClick={handleOpen}>
      <label className="group-label">{selected}</label>
      {isOpen && (
        <ul className="group-items">
          {items?.map((item, index) => {
            return (
              <li key={item} className="group-items-item" onClick={() => handleSelect(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Group;
