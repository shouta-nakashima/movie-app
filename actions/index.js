import axios from "axios";

const CATEGORY_DATA = [
	{ id: "c-1", name: "drama" },
	{ id: "c-2", name: "fantasy" },
	{ id: "c-3", name: "adventure" },
	{ id: "c-4", name: "action" },
];

export const categoryList = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(CATEGORY_DATA);
			//reject("データの取得に失敗しました。");
		}, 50);
	});
};

export const movieList = () => {
	return axios.get("http://localhost:3000/api/v1/movies").then((res) => {
		return res.data;
		//console.log(res);
	});
};

export const createMovie = (movie) => {
	return new Promise((resolve, reject) => {
		movie.id = Math.random().toString(36).substr(2, 7);
		MOVIE_DATA.push(movie);
		setTimeout(() => {
			resolve(MOVIE_DATA);
			//reject("データの取得に失敗しました。");
		}, 50);
	});
};

export const getMovieById = (id) => {
	return new Promise((resolve, reject) => {
		const movieIndex = MOVIE_DATA.findIndex((movie) => {
			return movie.id === id;
		});
		const movie = MOVIE_DATA[movieIndex];
		setTimeout(() => resolve(movie), 50);
	});
};
