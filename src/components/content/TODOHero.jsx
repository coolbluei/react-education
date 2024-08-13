import React from "react";

const TODOHero = (props) => {
    return (
        <section className="todohero_section">
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {props.todos_completed}/{props.total_todos}
            </div>
        </section>
    );
}

export default TODOHero;