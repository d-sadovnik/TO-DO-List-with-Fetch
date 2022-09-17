import { useState } from "react";
import React from "react";

const Todoform = () => {
  const [InputTodo, setInputTodo] = useState("");
  const [ListaTodo, setListaTodo] = useState([]);

  const llenarFormulario = (event) => {
    setInputTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    NewTodo(InputTodo);
    setInputTodo("")
  };

  const NewTodo = (ToDo) => {
    setListaTodo([ToDo, ...ListaTodo]);
  };

  const borrar = (id) => {
    const FilteredList = ListaTodo.filter((element, index) => index !== id);
    setListaTodo(FilteredList);
  }

  return (
    <div>
      <div className="text-center p-2">
        <form className="form" onSubmit={onSubmit}>
          <span>Add To-Do</span>
          <input value={InputTodo} onChange={llenarFormulario} />
          <button type="submit" className="btn-sm btn-outline-secondary">Add</button>
        </form>
      </div>
      <div className="flex-column">
        <div>
            {ListaTodo.map((element, index) => {
              return <div className="col-4 mx-auto d-flex justify-content-between p-1 mb-2 bg-light text-dark border border-secondary rounded-3">
                <p className="m-2">{element}</p>
                <button className="btn btn-secondary" onClick={()=> borrar(index)}>Delete</button>
              </div>;
            })}
        </div>
      </div>
      <h5 className="text-center">Tareas pendientes {ListaTodo.length}</h5>
    </div>
  );
};

export { Todoform };
