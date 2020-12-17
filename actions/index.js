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
	movie.id = Math.random().toString(36).substr(2, 5);
	return axios
		.post("http://localhost:3000/api/v1/movies", movie)
		.then((res) => res.data);
};

export const getMovieById = (id) => {
	return axios
		.get(`http://localhost:3000/api/v1/movie/${id}`)
		.then((res) => res.data);
};

export const updateMovie = (movie) => {
	return axios
		.patch(`http://localhost:3000/api/v1/movie/${movie.id}`, movie)
		.then((res) => res.data);
};

export const deleteMovie = (id) => {
	return axios
		.delete(`http://localhost:3000/api/v1/movie/${id}`)
		.then((res) => res.data);
};
