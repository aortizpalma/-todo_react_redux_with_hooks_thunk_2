import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../store/actions";

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? "strike todo" : "todo"}
          >
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
