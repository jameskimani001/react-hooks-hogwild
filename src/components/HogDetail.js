import React from "react";

const HogDetail = ({ hog }) => {
	return (
		<div>
			<p>Specialty: {hog.specialty}</p>
			<p>Weight: {hog.weight}</p>
			<p>Greased: {hog.greased ? "Yes" : "No"}</p>
			<p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
		</div>
	);
};

export default HogDetail;
