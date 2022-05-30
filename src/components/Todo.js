import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

const Todo = ({text, id}) => {
    const dispatch = useDispatch();

    const removeText = () => {
        dispatch(deleteToDo(id))
    }

    return (
        <li>
            <Link to={`/${id}`}> {text}</Link> 
            <button onClick={removeText}>❌</button>            
        </li>
    )
}

export default Todo;


