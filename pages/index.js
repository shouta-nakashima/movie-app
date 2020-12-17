import React, { useState } from "react";
import SideMenu from "../components/Home/SideMenu";
import Carousel from "../components/Home/Carousel";
import MovieList from "../components/Home/MovieList";
import { movieList, categoryList } from "../actions/index";

const Home = (props) => {
	const [filter, setFilter] = useState("all");
	const { images, categories } = props;

	const changeCategory = (category) => {
		setFilter(category);
	};

	const filterMovies = (movies) => {
		if (filter === "all") {
			return movies;
		}
		return movies.filter((m) => {
			return m.genre && m.genre.includes(filter);
		});
	};

	return (
		<div>
			<div>
				<div className="row">
					<div className="col-lg-3">
						<SideMenu
							categories={categories}
							changeCategory={changeCategory}
							activeCategory={filter}
						/>
					</div>
					<div className="col-lg-9">
						<Carousel images={images} />
						<h3>Display {filter} Movies</h3>
						<MovieList movies={filterMovies(props.movies || [])} />
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
