const MOVIE_DATA = [
	{
		id: "1",
		name: "The Shawshank Redemption",
		releaseYear: 1994,
		description:
			"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		rating: 4.8,
		genre: "drama",
		image:
			"https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg",
		cover:
			"https://images.unsplash.com/photo-1584391889471-9603788c366c?ixid=https://images.unsplash.com/photo-1584391889471-9603788c366c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
	},
	{
		id: "2",
		name: "The Dark Knight",
		releaseYear: 2008,
		description:
			"When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		rating: 4.7,
		genre: "action, crime, drama",
		image:
			"https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600",
		cover:
			"https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2846&q=80",
	},
	{
		id: "3",
		name: "Lord of the Rings",
		releaseYear: 2004,
		description:
			"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		rating: 4.9,
		genre: "adventure, drama, fantasy",
		image:
			"https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600",
		cover:
			"https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2089&q=80",
	},
];

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
	return new Promise((resolve, reject) => {
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
