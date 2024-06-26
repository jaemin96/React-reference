# ⭐️ useMemo

<aside>
❓ React 자체에서 제공하는 Hook 중 하나로 이미 처리된 결과를 저장하여 필요로 할때마다 저장된 값을 불러와서 처리할 수 있게 도와준다.

</aside>

## 기본 개념

`useMemo` 훅 함수는 처리된 결과를 저장해두고 다시 사용할 수 있게 해주는 함수이다.

실생활에서도 메모에 정보를 적고 필요할 때마다 적어둔 메모를 참고하는 것처럼 컴퓨터에서도 처리된 데이터를 메모리에 저장해두고 참조되는 어떠한 것들도 변하지 않은 상태로 다시 데이터를 요청하면 미리 저장해 둔 데이터를 불러온다. 이를 `메모이제이션` 기법이라고 한다.

보통 큰 비용을 요구하는 값의 처리나 자주 사용되는 값의 처리에 있어서 `useMemo`를 활용하는 것이 좋다.

## useMemo를 활용하여 메모이제이션 구현하기

```tsx
import { useMemo, useState } from "react";

interface CalcProps {
  num: number;
  printNum: () => number;
}

const Calc = ({ num, printNum }: CalcProps) => {
  const callbackCalc = (num: number) => {
    for (let i = 0; i < 100000000; i++) {}
    console.log(num);

    return num * 100;
  };

  const calcValue = useMemo(() => callbackCalc(num), [num]);

  const printCalcValue = () => {
    console.log({ calcValue });
  };

  return (
    <>
      <div onClick={printCalcValue}>{`calc value : ${calcValue}`}</div>
      <button onClick={printNum}>printNum</button>
    </>
  );
};

export const Memoization = () => {
  const [num, setNum] = useState<number>(1);

  const handleNum = () => {
    setNum((prev) => prev + 1);
  };

  const printNum = () => {
    console.log({ num });
    return num;
  };

  return (
    <>
      <button onClick={handleNum}>add 1</button>
      <Calc num={num} printNum={printNum} />
    </>
  );
};

```

### 과정

1. 최초의 num state인 1이 props로 전달되고 넘겨진 1이라는 num으로 callbackCalc 함수를 최초 호출한다.
2. callbackCalc 함수 내부에서 for문은 일련의 데이터 처리 시간을 부여하기 위해 추가한 로직이다.
3. 모든 데이터 처리가 완료되고 num * 100 값을 calcValue에 할당한다.
4. add 1 이라는 버튼을 통해 num을 갱신하지 않는 경우에는 메모이제이션을 통해 저장된 100이라는 값을 사용한다.
5. add 1 이라는 버튼을 통해 num을 1씩 증가할 때마다 callbackCalc 함수를 통해 다시 calcValue 값을 갱신한다. 

## 주의사항

`useMemo`를 사용하는 경우 주의해야할 점으로는 `useMemo`는 동기적으로 값을 처리하기 때문에 `setTimeout`과 같은 비동기적으로 처리된 데이터는 `useMemo` 값에 영향을 주지 않는다.

비동기적으로 값을 처리하기 위해서는 `useEffect`와 같은 훅을 활용하는 것으로 대체해야 한다.