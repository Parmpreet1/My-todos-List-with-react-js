import React, { useState } from "react";

export const Addtodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!title || !desc) {
      alert("Title or desc can't be blank");
    } else {
      props.addtodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h2>Add todo</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            className="form-control"
            id="Desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          ADD
        </button>
      </form>
    </div>
  );
};
