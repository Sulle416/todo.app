import { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodoHandler = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, { text: newTodo, completed: false }]);
      setNewTodo("");
    }

    console.log(todoList);
  };

  const removeTodoTask = (index) => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };

  const removeCompletedTask = (index) => {
    setCompletedTodos(completedTodos.filter((_, idx) => idx !== index));
  };

  const toggleCompleteTask = (index) => {
    const updateTodoList = todoList.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );

    setTodoList(updateTodoList);

    const completed = updateTodoList.filter((todo) => todo.completed);
    setCompletedTodos(completed);
  };

  return (
    <div className="container">


      <div className="sub-container-one">
        <input
          placeholder="please set your todo "
          className="todo-input"
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button className="input-button" onClick={addTodoHandler}>
          Add Todo
        </button>
      </div>


      <div className="sub-container-two">
        <div className="container-left">
          <h1>Todos</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Is Completed</th>
                <th>Action</th>
              </tr>
              
            </thead>
            
            <tbody>
              {todoList.map((todo, index) => (
                <tr key={index}>
                  <td>
                    <span
                      style={{
                        textDecoration: todo.completed ? "line-through" : "",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleCompleteTask(index)}
                    >
                      {todo.text}
                    </span>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleCompleteTask(index)}
                    />
                  </td>
                  <td>
                    <button onClick={() => removeTodoTask(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container-right">
          <h1>Completed Todos</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>IsCompleted</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {completedTodos.map((todo, index) => (
                <tr>
                  <td>{todo.text}</td>
                  <td>
                    <input
                      type="checkbox"
                      value={todo.completed}
                      onClick={() => toggleCompleteTask(index)}
                    />
                  </td>
                  <td>
                    <button onClick={() => removeCompletedTask(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;