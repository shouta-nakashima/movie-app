import React from "react";
import Link from "next/link";

const MovieList = ({ movies }) => {
	const shortDescription = (text) => {
		return text.substr(0, 50) + "...";
	};
	return (
		<>
			<div className="row">
				{movies.map((movie) => (
					<div key={movie.id} className="col-lg-4 col-md-6 mb-4">
						<div className="card h-100">
							<Link href="/movies/[id]" as={`/movies/${movie.id}`}>
								<a>
									<img className="card-img-top" src={movie.image} alt="" />
								</a>
							</Link>

							<div className="card-body">
								<Link href="/movies/[id]" as={`/movies/${movie.id}`}>
									<h4 className="card-title">
										<a>{movie.name}</a>
									</h4>
								</Link>

								<p className="card-text">
									{shortDescription(movie.description)}
								</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">{movie.rating}</small>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default MovieList;
MovieList;
