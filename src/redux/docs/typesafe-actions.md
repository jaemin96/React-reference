# typesafe-actions

---

<aside>
❓ Redux와 같이 사용하면 기존의 Redux의 코드를 전보다 간략하게 해주며 의미를 명확하게 할 수 있다.

</aside>

## 라이브러리 설치하기

```bash
# npm
$ npm install typesafe-actions

# yarn
$ yarn add typesafe-actions
```

## createAction 활용하기

유저 인증 관련 `redux`를 구성하고자 할 때, `LOGIN` 과 `LOGOUT` 이라는 액션타입을 정의하고 이를 통해 새로운 액션 `login` 과 `logout`을 정의한다.

```tsx
// actions/signActions

import { createAction } from 'typesafe-actions';

// action type
export const LOGIN = 'sign/LOGIN';
export const LOGOUT = 'sign/LOGOUT';

// actions
export const login = createAction(LOGIN)<{ id: string }>();
export const logout = createAction(LOGOUT)();
```

## ActionType 활용하기

유저 인증 관련 정의해 둔 액션들을 가져와 이를 `ActionType`으로 `SignAction` 타입 정의하기

```tsx
import { ActionType } from "typesafe-actions";
import * as actions from "actions/signActions";

const { LOGIN, LOGOUT } = actions;
type SignAction = ActionType<typeof actions>;
```

## createReducer 활용하기

실제로 리듀서를 정의하는 부분으로 `state`, `action` 그리고 `초기 상태`를 기반으로 `액션함수 동작`을 정의한다.

```tsx
import { createReducer } from "typesafe-actions";

const reducer = createReducer<state, action>(initState, {
	[ACTION] : (state, action) => {...};
})
```

- `state` - 관리되는 상태의 정보를 정의해서 Reducer 생성 시 전달한다. 유저 인증 정보에 필요한 정보로 유저 정보, 유저 인증 여부 등을 포함시킨 정보의 상태를 정의한다.
- `action` - 위에서 ActionType으로 정의한 action을 사용한다. 여기서는 SignAction을 의미한다.
- `initState` - Reducer 생성 시점에 전달한 state 정보의 초기상태를 의미한다.
- `[ACTION]` - createReducer를 사용하면 기존 reducer의 구조에서 switch-case 구문을 사용하던 것을 위처럼 배열인자로 관리가 가능해진다.

## 실제 사용 예시

```tsx
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions/signActions';

// type & interface
export interface SignState {
  user: {
    id: string;
    isLoggedIn: boolean;
  };
}

// set initial state
const initialState: SignState = {
  user: {
    id: '',
    isLoggedIn: false,
  },
};

// action 호출
const { LOGIN, LOGOUT } = actions;
type SignAction = ActionType<typeof actions>;

// reducer
const sign = createReducer<SignState, SignAction>(initialState, {
  [LOGIN]: (state, action) => ({
    ...state,
    user: {
      id: action.payload.id,
      isLoggedIn: true,
    },
  }),
  [LOGOUT]: (state) => ({
    ...state,
    user: {
      id: '',
      isLoggedIn: false,
    },
  }),
});

export default sign;
```