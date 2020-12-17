const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require("fs");
const path = require("path");
const filePath = "./data.json";

const movieData = require(filePath);

app.prepare().then(() => {
	const server = express();
	server.use(bodyParser.json());

	server.get("/api/v1/movies", (req, res) => {
		return res.json(movieData);
	});

	server.get("/api/v1/movie/:id", (req, res) => {
		const { id } = req.params;
		const movie = movieData.find((m) => m.id === id);
		return res.json(movie);
	});

	server.post("/api/v1/movies", (req, res) => {
		const movie = req.body;
		movieData.push(movie);

		const fileToPath = path.join(__dirname, filePath);

		const stringifiedData = JSON.stringify(movieData, null, 2);

		fs.writeFile(fileToPath, stringifiedData, (err) => {
			if (err) {
				return res.status(422).send(err);
			}
			res.json("movieを追加しました。");
		});
	});

	server.delete("/api/v1/movie/:id", (req, res) => {
		return res.json({ message: "deleted next" });
	});
	// we are handling all of the request comming to our server
	server.get("*", (req, res) => {
		// next.js is handling requests and providing pages where we are navigating to
		return handle(req, res);
	});

	const PORT = process.env.PORT || 3000;

	server.listen(PORT, (err) => {
		if (err) throw err;
		console.log("> Ready on port " + PORT);
	});
});
