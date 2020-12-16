import React from "react";
import Modal from "../Modal";
import MovieCreateForm from "../MovieCreateForm";

const SideMenu = ({ categories }) => {
	return (
		<div className="pt-5">
			<Modal>
				<MovieCreateForm />
			</Modal>
			<h1 className="my-4">Shop Name</h1>
			<div className="list-group">
				{categories.map((c) => (
					<a key={c.id} href="#" className="list-group-item">
						{c.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default SideMenu;
