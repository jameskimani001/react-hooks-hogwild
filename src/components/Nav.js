import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ setShowGreased, setSortBy }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<button onClick={() => setShowGreased((prev) => !prev)}>
					{setShowGreased ? "Show All" : "Show Greased"}
				</button>
				<button onClick={() => setSortBy('name')}>Sort by Name</button>
				<button onClick={() => setSortBy('weight')}>Sort by Weight</button>
			</div>
		</div>
	);
};

export default Nav;
