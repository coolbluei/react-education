import "./styles.scss";
import React, {useState} from 'react';
import Header from "./components/layout/Header";
import TODOHero from "./components/content/TODOHero";
import TODOForm from "./components/content/TODOForm";
import TODOList from "./components/content/TODOList";

const App = () => {

    const obj = {
        david: "is awesome"
    };
    const [todos, setTodos] = useState([
        {
            title: "Some task",
            id: self.crypto.randomUUID(),
            is_completed: false
        },
        {
            title: "Some other task",
            id: self.crypto.randomUUID(),
            is_completed: true,
        },
    ]);

    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true).length;

    const total_todos = todos.length;

    return (
        <div className="wrapper">
            <Header />
            <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
            <TODOForm setTodos={setTodos} />
            <TODOList todos={todos} setTodos={setTodos}/>
        </div>
    )
};

export default App;