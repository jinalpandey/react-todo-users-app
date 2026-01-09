import { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";

function TodoPage() {
  const [task, setTask] = useState("");

  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const total = todoList.length;
  const completed = todoList.filter(t => t.completed).length;
  const pending = total - completed;

  const addTask = () => {
    if (!task.trim()) return;
    setTodoList([...todoList, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    setTodoList(
      todoList.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const updateTask = (index, newText) => {
    setTodoList(
      todoList.map((t, i) =>
        i === index ? { ...t, text: newText } : t
      )
    );
  };

  const clearCompleted = () => {
    setTodoList(todoList.filter(t => !t.completed));
  };

  return (
    <>
      <h2>Todo App 📝</h2>

      <div className="task-count">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>
      </div>

      {completed > 0 && (
        <button onClick={clearCompleted} style={{ marginBottom: "10px" }}>
          Clear Completed
        </button>
      )}

      <div className="input-group">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {todoList.length === 0 ? (
        <p>No tasks yet 🙂</p>
      ) : (
        todoList.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}
    </>
  );
}

export default TodoPage;