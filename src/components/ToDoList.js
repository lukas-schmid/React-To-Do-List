import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = ({ toDoItems, toggleDone, removeItem }) => {
  return (
    <section className="itemList">
      {toDoItems
        .sort((a, b) => a.done - b.done || b.id - a.id)
        .map((item) => (
          <ToDoCard
            key={item.id}
            details={item}
            toggleDone={toggleDone}
            removeItem={removeItem}
          />
        ))}
    </section>
  );
};

export default ToDoList;
