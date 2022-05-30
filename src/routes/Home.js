import React from "react";
import { useState } from "react";
const Home = () => {
    const [text, setText] = useState("");

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setText("");
    }

    return (
        <>
        <h3> TO DO </h3>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>Add</button>
        </form>
        <ul></ul>
        </>
    )
}

export default Home;