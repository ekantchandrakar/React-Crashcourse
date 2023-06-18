import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
	const {
		data: catData,
		isLoading,
		isError,
		refetch,
	} = useQuery(["cat"], () => {
		return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
	});

	console.log(catData);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>Sorry, there was an Error.</h1>;
	}

	return (
		<h1>
			This Is The Home Page
			<p>{catData?.fact}</p>
			<button onClick={refetch}>Update Data</button>
		</h1>
	);
};

export default Home;
