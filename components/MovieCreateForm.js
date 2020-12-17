import React, { useEffect, useState } from "react";

const MovieCreateForm = (props) => {
	const [form, setForm] = useState({
		name: "",
		description: "",
		rating: "",
		image: "",
		cover: "",
	});

	useEffect(() => {
		if (props.initialData) {
			setForm(props.initialData);
		}
	}, [props.initialData]);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;

		setForm({
			...form,
			[name]: target.value,
		});
	};

	const handleGenreChande = (e) => {
		const { options } = e.target;
		const optionsLength = options.length;
		const value = [];
		for (let i = 0; i < optionsLength; i++) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
		setForm({
			...form,
			genre: value.toString(),
		});
	};

	const submitForm = () => {
		props.handleFormSubmit({ ...form });
	};
	return (
		<div>
			<form>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						onChange={handleChange}
						name="name"
						value={form.name}
						type="text"
						className="form-control"
						id="name"
						aria-describedby="emailHelp"
						placeholder="Lord of the Rings"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						onChange={handleChange}
						name="description"
						value={form.description}
						type="text"
						className="form-control"
						id="description"
						placeholder="Somewhere in Middle-earth..."
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Rating</label>
					<input
						onChange={handleChange}
						value={form.rating}
						type="number"
						max="5"
						min="0"
						className="form-control"
						id="rating"
						placeholder="3"
						name="rating"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Max: 5, Min: 0{" "}
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="image">Image</label>
					<input
						onChange={handleChange}
						value={form.image}
						type="text"
						className="form-control"
						id="image"
						placeholder="http://....."
						name="image"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cover">Cover</label>
					<input
						onChange={handleChange}
						value={form.cover}
						type="text"
						className="form-control"
						id="cover"
						placeholder="http://......"
						name="cover"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<select
						multiple
						className="form-control"
						id="genre"
						onChange={handleGenreChande}>
						<option>drama</option>
						<option>music</option>
						<option>adventure</option>
						<option>historical</option>
						<option>action</option>
					</select>
				</div>
				<button onClick={submitForm} type="button" className="btn btn-primary">
					{props.submitText || "Create"}
				</button>
			</form>
		</div>
	);
};

export default MovieCreateForm;
