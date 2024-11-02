import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import HogForm from "./HogForm"; // Import the HogForm
import hogs from "../porkers_data";

function App() {
	const [hogsData, setHogsData] = useState(hogs);
	const [filteredHogs, setFilteredHogs] = useState(hogs);
	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState('');
	const [hiddenHogs, setHiddenHogs] = useState([]);

	useEffect(() => {
		let updatedHogs = [...hogsData];

		if (showGreased) {
			updatedHogs = updatedHogs.filter(hog => hog.greased);
		}

		if (sortBy === 'name') {
			updatedHogs.sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === 'weight') {
			updatedHogs.sort((a, b) => a.weight - b.weight);
		}

		setFilteredHogs(updatedHogs.filter(hog => !hiddenHogs.includes(hog.name)));
	}, [showGreased, sortBy, hiddenHogs, hogsData]);

	const hideHog = (hogName) => {
		setHiddenHogs([...hiddenHogs, hogName]);
	};

	return (
		<div className="App">
			<Nav setShowGreased={setShowGreased} setSortBy={setSortBy} />
			<HogForm setHogsData={setHogsData} /> {/* Include the HogForm */}
			<HogContainer hogs={filteredHogs} hideHog={hideHog} />
		</div>
	);
}

export default App;
