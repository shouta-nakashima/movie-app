import React from "react";
import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions";
import Link from "next/link";

const Movie = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const { movie } = props;

	const handleDelete = (id) => {
		if (window.confirm("削除しますか？")) {
			deleteMovie(id).then(() => {
				alert("削除しました。");
				router.push("/");
			});
		} else {
			return;
		}
	};

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
				<button
					onClick={() => handleDelete(id)}
					className="btn btn-danger btn-lg mr-1"
					role="button">
					Delete
				</button>
				<Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
					<button className="btn btn-primary btn-lg" role="button">
						Edit
					</button>
				</Link>
			</div>
		</div>
	);
};

Movie.getInitialProps = async ({ query }) => {
	const movie = await getMovieById(query.id);

	return { movie };
};

export default Movie;
