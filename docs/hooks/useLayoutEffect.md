# useLayoutEffect

<aside>
💡 `useEffect`가 데이터 처리라면 `useLayoutEffect`는 화면의 DOM 요소를 처리하는 특징이 있다.

</aside>

## useLayoutEffect 기본 개념

`useEffect`와 사용에 있어 차이는 없지만 동작하는 원리에 차이가 있다. `useEffect`는 렌더링이 된 후 비동기적으로 처리가 되는 반면, `useLayoutEffect`는 화면이 그려지기 전에 동기적으로 처리된다는 특징이 있다.

### 주요 특징

화면이 그려지기 이전에 처리가 필요한 즉, 화면 DOM 요소를 직접적으로 조작해야 하는 경우에 사용하며 동기적으로 처리하기 때문에 자칫 잘못 사용하게 되면 성능적인 측면에서 저하되는 상황이 발생할 수 있다.

## 기본적인 사용

```tsx
const LayoutComponent = () => {
	const [title, setTitle] = useState("Hello!");
	
	useLayoutEffect(() => {
		// DOM 요소 조작
		document.title = `${title}`;
		
		return () => {
			// clean-up
		}
	}, [title]);
	
	return (
		<>
			<header>{`current title : ${title}`}</header>
			<main>
				...
			</main>
		</>
	)
}

export default LayoutComponent;
```