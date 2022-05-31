import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../store";
import Todo from "../components/Todo";

const Home = () => {
    const [text, setText] = useState("");

    const toDoList = useSelector(state => state);
    const dispatch = useDispatch()

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addToDo(text));
        setText("");
    }

    return (
        <>
        <h3>TO DO</h3>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>Add</button>
        </form>
        <ul>{toDoList?.map((toDo)=> <Todo {...toDo} key={toDo.id}> </Todo>)}</ul>
        </>
    )  
}

export default Home;