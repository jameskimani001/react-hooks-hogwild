import React, { useState } from "react";
import HogDetail from "./HogDetail";

const HogTile = ({ hog, hideHog }) => {
	const [showDetail, setShowDetail] = useState(false);

	const toggleDetail = () => {
		setShowDetail(!showDetail);
	};

	return (
		<div className="ui eight wide column hog-tile">
			<h3 onClick={toggleDetail} style={{ cursor: 'pointer' }}>{hog.name}</h3>
			<img src={hog.image} alt={hog.name} onClick={toggleDetail} style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }} />
			{showDetail && <HogDetail hog={hog} />}
			<button onClick={() => hideHog(hog.name)}>Hide</button>
		</div>
	);
};

export default HogTile;
