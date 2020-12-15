import React from "react";
import { useRouter } from "next/router";

const Movie = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			<p>movie id: {id}</p>
		</div>
	);
};

export default Movie;
