import { useState } from "react";

function TodoItem({ item, index, toggleTask, deleteTask, updateTask }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const save = () => {
    if (!text.trim()) return;
    updateTask(index, text);
    setEditing(false);
  };

  return (
    <div className="todo-item">
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
            if (e.key === "Escape") {
              setEditing(false);
              setText(item.text);
            }
          }}
          autoFocus
        />
      ) : (
        <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
          {item.text}
        </span>
      )}

      <div>
        {editing ? (
          <button onClick={save}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
        <button onClick={() => toggleTask(index)}>
          {item.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;