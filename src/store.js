import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const STATE = "toDos";

export const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE,
    id
  };
};

// localStorage Or sessionStorage 에는 반드시 JSON 형태로 저장한다. localStorage.setItem("toDos", JSON.stringify([]));
// 고로 아이템을 가져올떄는 반환과정을 거쳐야한다. JSON.parse(localStorage.getItem("toDos")) 

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

const store = createStore(reducer);

export default store;