import React from "react";

const Carousel = ({ images }) => {
	return (
		<div>
			<div
				id="carouselExampleIndicators"
				className="carousel slide my-4"
				data-ride="carousel">
				<ol className="carousel-indicators">
					{images.map((image, i) => (
						<li
							key={i}
							data-target="#carouselExampleIndicators"
							data-slide-to={i}
							className={i === 0 ? "active" : ""}></li>
					))}
				</ol>
				<div className="carousel-inner" role="listbox">
					{images.map((image, i) => (
						<div
							key={image.id}
							className={`carousel-item ${i === 0 ? "active" : ""}`}
							style={{ maxHeight: "350px" }}>
							<img
								className="d-block img-fluid"
								src={image.url}
								alt={image.name}
							/>
						</div>
					))}
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};

export default Carousel;
