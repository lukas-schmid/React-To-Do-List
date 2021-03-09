import React from "react";

const InputForm = ({ addToDo, currentList }) => {
  const createID = (state) => {
    if (state.length === 0) {
      return 0;
    }
    const idArr = state.map((obj) => obj.id);
    return Math.max(...idArr) + 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toDoData = {
      id: createID(currentList),
      title: e.target.title.value || "",
      description:
        e.target?.description.value.replace(/(\r\n|\n|\r)/gm, "<br>") || "",
      done: false,
    };
    addToDo(toDoData);
    e.target.reset();
  };

  return (
    <section className="inputForm">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="title">
          Title
        </label>
        <input
          className="form__input"
          name="title"
          type="text"
          id="title"
          autoComplete="off"
          required
        />
        <label className="form__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="form__input"
          name="description"
          id="description"
          cols="30"
          rows="10"
        />
        <button className="form__button" type="submit">
          Add to the list
        </button>
      </form>
    </section>
  );
};

export default InputForm;
