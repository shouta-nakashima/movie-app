import React from "react";
import SideMenu from "../components/Home/SideMenu";
import Carousel from "../components/Home/Carousel";
import MovieList from "../components/Home/MovieList";
import { movieList } from "../actions/index";

const Home = (props) => {
	const { images } = props;
	return (
		<div>
			<div>
				<div className="row">
					<div className="col-lg-3">
						<SideMenu />
					</div>
					<div className="col-lg-9">
						<Carousel images={images} />
						<MovieList movies={props.movies} />
					</div>
				</div>
			</div>
		</div>
	);
};

Home.getInitialProps = async () => {
	const movies = await movieList();
	const images = movies.map((movie) => ({
		id: `image-${movie.id}`,
		url: movie.cover,
		name: movie.name,
	}));

	return {
		movies,
		images,
	};
};

export default Home;
