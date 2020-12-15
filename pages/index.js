import React from "react";
import SideMenu from "../components/Home/SideMenu";
import Carousel from "../components/Home/Carousel";
import MovieList from "../components/Home/MovieList";
import { movieList } from "../actions/index";

const Home = (props) => {
	return (
		<div>
			<div>
				<div className="row">
					<div className="col-lg-3">
						<SideMenu />
					</div>
					<div className="col-lg-9">
						<Carousel />
						<MovieList movies={props.movies} />
					</div>
				</div>
			</div>
		</div>
	);
};

Home.getInitialProps = async () => {
	const movies = await movieList();

	return {
		movies,
	};
};

export default Home;
