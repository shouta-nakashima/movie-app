const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const movieData = require("./data.json");

app.prepare().then(() => {
	const server = express();
	server.use(bodyParser.json());

	server.get("/api/v1/movies", (req, res) => {
		return res.json(movieData);
	});

	server.post("/api/v1/movies", (req, res) => {
		const movie = req.body;
		return res.json({ message: "hello next" });
	});

	server.patch("/api/v1/movie/:id", (req, res) => {
		return res.json({ message: "edit next" });
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
