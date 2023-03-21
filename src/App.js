import { useState } from "react";

let id = 1;

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = () => {
    setTodos((prev) => [...prev, { id: id++, todo: newTodo }]);
  };

  const deleteTodo = (deleteId) => {
    setTodos((prev) => prev.filter(({ id }) => id !== deleteId));
  };

  return (
    <section>
      <h1>Todo List</h1>
      <input
        placeholder="type new todo"
        value={newTodo}
        onChange={({ target }) => setNewTodo(target.value)}
      />
      <button onClick={addNewTodo}>add</button>
      <ul>
        {todos.map(({ id, todo }) => (
          <div>
            <li key={id}>{todo}</li>
            <button onClick={() => deleteTodo(id)}>delete</button>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default App;
