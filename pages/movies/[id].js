import React from "react";
import { useRouter } from "next/router";
import { getMovieById } from "../../actions";

const Movie = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const { movie } = props;
	return (
		<div className="pt-5 text-center">
			<img
				style={{ margin: "auto" }}
				className="d-block img-fluid "
				src={movie.image}
			/>
			<br />
			<div className="jumbotron">
				<h1 className="display-4">{movie.name}</h1>
				<br />
				<p className="lead">{movie.description}</p>
				<hr className="my-4" />
				<p>{movie.genre}</p>
			</div>
		</div>
	);
};

Movie.getInitialProps = async ({ query }) => {
	const movie = await getMovieById(query.id);

	return { movie };
};

export default Movie;
