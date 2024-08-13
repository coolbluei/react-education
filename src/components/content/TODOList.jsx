import React from "react";
import TODOItem from "./TODOItem";

const TODOList = (props) => {
    return (
        <ol className="todo_list">
            {props.todos && props.todos.length > 0 ? (
                props.todos?.map((item, index) => (
                    <TODOItem key={index} item={item} setTodos={props.setTodos} />
                ))
            ) : (
                <p>Seems lonely in here, what are you up to?</p>
            )}
        </ol>
    );
}

export default TODOList;