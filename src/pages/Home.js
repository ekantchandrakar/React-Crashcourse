import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
	const { username } = useContext(AppContext);
	return <h1>This Is The Home Page and user is {username}</h1>;
};

export default Home;
