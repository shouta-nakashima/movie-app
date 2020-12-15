import React from "react";
import SideMenu from "../components/Home/SideMenu";
import Carousel from "../components/Home/Carousel";
import MovieList from "../components/Home/MovieList";
import { movieList, categoryList } from "../actions/index";

const Home = (props) => {
	const { images, categories } = props;
	return (
		<div>
			<div>
				<div className="row">
					<div className="col-lg-3">
						<SideMenu categories={categories} />
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
	const categories = await categoryList();
	const images = movies.map((movie) => ({
		id: `image-${movie.id}`,
		url: movie.cover,
		name: movie.name,
	}));

	return {
		movies,
		images,
		categories,
	};
};

export default Home;
