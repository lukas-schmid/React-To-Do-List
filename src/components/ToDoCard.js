import React from "react";
import parse from "html-react-parser";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ToDoCard = ({ details, toggleDone, removeItem }) => (
  <article
    className={`toDoCard toDoCard--done-${details.done}`}
    id={details.id}
    onClick={() => toggleDone(details)}
  >
    <section className="toDoCard__check-icon">
      <CheckCircleIcon
        className={`toDoCard__check-icon--done-${details.done}`}
      />
    </section>
    <section className="toDoCard__text">
      <h1 className="toDoCard__text--header">{details.title}</h1>
      <p className="toDoCard__text--description">
        {parse(details.description)}
      </p>
    </section>
    <section className="toDoCard__button">
      <button
        type="button"
        className={`toDoCard__button--remove--done-${details.done}`}
        onClick={(e) => {
          e.stopPropagation();
          removeItem(details);
        }}
      >
        Remove
      </button>
    </section>
  </article>
);

export default ToDoCard;
