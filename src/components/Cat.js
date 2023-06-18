import React from "react";
import { useGetCat } from "../useGetCat";

const Cat = () => {
	const { data, refetchData, isCatLoading } = useGetCat();

	if (isCatLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>{data?.fact}</h1>
			<button onClick={refetchData}>Refetch</button>
		</div>
	);
};

export default Cat;
