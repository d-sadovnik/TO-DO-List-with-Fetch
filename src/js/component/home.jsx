import React, { useEffect, useState } from "react";

//include images into your bundle
import {Todoform} from "./Todoform.jsx"

//create your first component
const Home = () => {
	
	const getTareas = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/dSadovnik")
		.then((res) => res.json())
		.then((data)=>console.log(data)); 
	}
	
	useEffect(()=>{ 
		getTareas();
	}, [])
	
	return (
		<div className="Home">
			<Todoform
			/>
			
		</div>
	);
};

export default Home;
