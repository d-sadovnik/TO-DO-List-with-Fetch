import React, { useEffect, useState } from "react";

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
    putTareas([{label: ToDo, done: false}, ...ListaTodo]);
  };

  const borrar = (id) => {
    const FilteredList = ListaTodo.filter((element, index) => index !== id);
    putTareas(FilteredList);
  }

  const getTareas = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/dSadovnik")
			.then((res) => res.json())
			.then((data) => setListaTodo(data))
			.catch(error => console.log(true));
	}

  const putTareas = (todos) => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/dSadovnik", {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        getTareas()
    })
    .catch(error => {
        console.log(error);
    });

  }

	useEffect(() => {
		getTareas();
	}, [])

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
                <p className="m-2">{element.label}</p>
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
