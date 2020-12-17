import React from "react";
import Link from "next/link";

const Navber = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand">Movie App</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<Link href="/">
								<li className="nav-item active" style={{ cursor: "pointer" }}>
									<a className="nav-link">
										Home
										<span className="sr-only">(current)</span>
									</a>
								</li>
							</Link>

							<Link href="/About">
								<li className="nav-item" style={{ cursor: "pointer" }}>
									<a className="nav-link">About</a>
								</li>
							</Link>

							<Link href="/Servises">
								<li className="nav-item" style={{ cursor: "pointer" }}>
									<a className="nav-link">Services</a>
								</li>
							</Link>
							<Link href="/Contact">
								<li className="nav-item" style={{ cursor: "pointer" }}>
									<a className="nav-link">Contact</a>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navber;
