# useRef

<aside>
❓ `useState`와 유사하게 동작하지만 가장 큰 차이는 렌더링 발생 유무이다.
`useRef`는 값이 변해도 렌더링이 되지 않는 특징이 있다.

</aside>

## useRef 기본 개념

`useRef` 훅 함수는 값이 바뀌더라도 리렌더링을 유발하지 않는다. 그렇기에 렌더링이 되는 도중에 ref의 값을 읽거나 수정하지 않도록 해야 한다. 만약 작업이 필요한 경우에는 useEffect나 핸들 함수 내부에서 사용하는 방법을 통해야 한다.

```tsx
const demoRef = useRef(0);
```

- `0` - default 값을 0으로 초기화한다. (초기 렌더링 시 demoRef.current 값이 0으로 설정)

## 간단한 사용 예시

아래는 num을 1씩 증가시키는 버튼 컴포넌트이다.

```tsx
import { useRef } from "react";

const IncreaseBtn = () => {
  const numRef = useRef(0);
  
  useEffect(() => {
	  console.log({numRef});
  } , [numRef]);

  const handleNum = () => {
    demoRef.current += 1;
    console.log({ demoRef });
  };

  return (
    <>
      <button onClick={handleRef}>add 1</button>
    </>
  );
};

export default RefHook;
```

- handleNum -  Ref의 current 값을 1씩 증가시키는 함수

위 코드에서 useEffect 내부의 console.log 함수는 실행되지 않는다. ref 값의 변화가 렌더링을 유발하지 않기 때문에 사용자가 값을 변경해도 React는 값의 변화를 파악하지 못한다.