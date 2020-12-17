import React from "react";
import { useRouter } from "next/router";
import Modal from "../Modal";
import MovieCreateForm from "../MovieCreateForm";
import { createMovie } from "../../actions/index";

const SideMenu = (props) => {
	const router = useRouter();
	let modal = null;

	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			console.log(JSON.stringify(movies));
			modal.closeModal();
			router.push("/");
		});
	};

	return (
		<div className="pt-5">
			<Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
				<MovieCreateForm handleFormSubmit={handleCreateMovie} />
			</Modal>
			<h1 className="my-4">Shop Name</h1>
			<div className="list-group">
				{props.categories.map((c) => (
					<a
						onClick={() => props.changeCategory(c.name)}
						key={c.id}
						href="#"
						className={`list-group-item ${
							props.activeCategory === c.name ? "active" : ""
						}`}>
						{c.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default SideMenu;
