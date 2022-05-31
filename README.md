# Redux with React

# 0. Setup

yarn add redux
yarn add react-redux

# 1. Conneting the Store

- Provider
  React Redux에는 Provider 컴포넌트를 통해 앱의 다른 컴포넌트에서 Redux store를 사용할 수 있습니다.
  Provider는 index.js상에서 선언하며, store 인자를 지니고 있습니다. 이때 store는 index와 같은 위치에 지정합니다.

```
import { Provider } from 'react-redux'
import store from './store'

// React 18 ver~
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Provider store={store}>
<App />
</Provider>
)
```

https://react-redux.js.org/introduction/getting-started#provider

# 2. useSelector && mapStateToProps

- connect()
  connect는 여전히 작동하며 React-Redux 8.x에서 지원됩니다. 그러나 기본적으로 hooks API를 사용하는 것이 좋습니다. 해당 코드에서는 mapStateProps함수를 connect한 후, store의 값을 return해 온 다음 해당 컴포넌트의 props로 넘겨줍니다.

```
const mapStateToProps = (state, ownProps) => {
    return {state}
}

export default connect(mapStateToProps)(Home);
```

https://react-redux.js.org/api/connect

- useSelector() [추천]
  selector 훅을 사용하여 Redux store state의 데이터를 쉽게 가져올 수 있습니다. (mapStateToProps대신 사용 가능)
  ex) useSelector(selector: Function, equalityFn?: Function)

```
// useSelector를 통해 store의 state를 바로 가져옴
const todo = useSelector((state) => state);
```

https://react-redux.js.org/api/hooks#useselector

# 3. useDispatch && mapDispatchToProps

- useDispatch() [추천]
  Redux store에서 dispatch 함수에 대한 참조를 반환합니다.
  (mapDispatchToProps대신 사용 가능)

```
import { useDispatch } from 'react-redux'
import { addTodo } from './store'

const dispatch = useDispatch()
dispatch(addTodo(text));
```

```
const mapDispatchToProps = (dispatch, ownProps) => {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

https://react-redux.js.org/api/hooks#usedispatch

# 4. localStorage와 sessionStorage, 그리고 redux-persist

- localstorage와 sessionstorage
  이 두개의 저장소는 브라우저(window)에서 기본적으로 제공하는 저장소(storage)이다. 이 저장소들은 application 전역에서 접근이 가능하다. 하나의 특징은 storage에 저장된 data는 JSON형태여야 하고 (JSON.stringify 사용하여 데이터 변환) 저장소에서 막 꺼낸 데이터는 JSON형태라는 것이다.(JSON.parse 사용하여 데이터 변환)
  localstorage는 우리가 직접 지우기 전까지 저장되는 반면 sessionstorage는 session이 유지되는 한에서만 데이터가 유지된다.
  session이란 브라우저의 탭 이라고 생각하면 편하다. 탭을 닫지않는 이상 essiongstorage에 저장된 데이터는 얼마든지 접근이 가능하다(새로고침 포함). 하지만 브라우저 탭을 닫게되면 sessionstorage에 저장된 데이터는 사라진다.

```
const reducer = (state = JSON.parse(localStorage.getItem(STATE)), action) => {
  switch (action.type) {
    case ADD:
      const addState = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem(STATE, JSON.stringify(addState));
      return addState;
    case DELETE:
      const deleteState = state.filter(toDo => toDo.id !== action.id);
      localStorage.setItem(STATE, JSON.stringify(deleteState));
      return deleteState;
    default:
      return state;
  }
};
```

https://velog.io/@_jouz_ryul/LocalStorage-SessiongStorage-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Redux-Persist
