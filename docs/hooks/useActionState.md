# 🧪 [canary] useActionState

---

> canary version - 다음 React 버전의 릴리즈 후보, React 메인 브랜치를 따른다.
자세한 내용은  https://react.dev/community/versioning-policy#all-release-channels 에서 참고
> 

<aside>
❓ canary 버전 이전 실험적 버전에서는 `useFormState`이었으며 현재는 `useActionState`로 변경되었다.

</aside>

## useActionState 기본 개념

`useActionState` 훅은 폼 액션 결과에 따라 state를 관리할 수 있는 훅 함수이다.

state는 폼을 마지막으로 제출했을 때 액션에서 반환되는 값이다.

```jsx
const [state, formAction] = useActionState(fn, initialState, permalink?);
```

```jsx
// fn 기본 형식
function action(currentState, formData) {
  const { ... } = formData;
  
  return currentState;
}
```

## 간단한 사용 예시

```jsx
export async increase = (prevState, formData) => {
	return prevState + 1;
};

export app = () => {
	const [state, formAction] = useActionState(increase, 0);
	
	return (
		<form action={formAction}>
			{state}
			<button>increase</button>
		</form>
	)
};
```
