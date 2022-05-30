import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
    const clickedToDo = useParams().id;
    const toDoList = useSelector((state) => state);
    const toDoDetail = toDoList.find((obj)=>obj.id === parseInt(clickedToDo));

    return (
        <>
        <h3> {toDoDetail?.text}</h3>
        <h4> Created at {toDoDetail?.id}</h4>
        </>
    )
}

export default Detail;