import React, { useEffect, useState } from "react";

//include images into your bundle
import { Todoform } from "./Todoform.jsx"

//create your first component
const Home = () => {

	

	// Simple PUT request with a JSON body using fetch

	// useEffect(() => {
	// 	// PUT request using fetch inside useEffect React hook
	// 	// const requestOptions = {
	// 	// 	method: 'PUT',
	// 	// 	headers: { 'Content-Type': 'application/json' },
	// 	// 	body: JSON.stringify(ListaTodo)
	// 	// };
	// 	// fetch("https://assets.breatheco.de/apis/fake/todos/user/dSadovnik", requestOptions)
	// 	// 	.then(response => response.json())
	// 	// 	.then(data => setPostId(data.id));

	// 	// empty dependency array means this effect will only run once (like componentDidMount in classes)
	// }, []);

	return (
		<div className="Home">
			<Todoform
			/>

		</div>
	);
};

export default Home;
