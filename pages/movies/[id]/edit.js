import React, { useState, useEffect } from "react";
import MovieCreateForm from "../../../components/MovieCreateForm";
import { getMovieById, updateMovie } from "../../../actions";
import { useRouter } from "next/router";

const EditMovie = (props) => {
	const router = useRouter();
	const [movie, setMovie] = useState({
		name: "",
		description: "",
		rating: "",
		image: "",
		cover: "",
	});

	const handleUpdateMovie = (movie) => {
		updateMovie(movie).then((updateMovies) => {
			//console.log(JSON.stringify(movies));
			router.push(`/movies/${movie.id}`);
		});
	};

	useEffect(() => {
		const { id } = props.query;
		getMovieById(id).then((m) => {
			setMovie(m);
		});
	}, []);
	return (
		<div className="container mt-3">
			<h2>Edit Movie</h2>
			<MovieCreateForm
				submitText="Update"
				initialData={movie}
				handleFormSubmit={handleUpdateMovie}
			/>
		</div>
	);
};

EditMovie.getInitialProps = ({ query }) => {
	return { query };
};

export default EditMovie;
