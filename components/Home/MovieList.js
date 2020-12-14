import React from "react";

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
							<a href="#">
								<img className="card-img-top" src={movie.image} alt="" />
							</a>
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">{movie.name}</a>
								</h4>
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
