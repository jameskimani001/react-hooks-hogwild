import React, { useState } from "react";

const HogForm = ({ setHogsData }) => {
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		specialty: "",
		weight: "",
		greased: false,
		highestMedalAchieved: ""
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setHogsData((prevHogs) => [
			...prevHogs,
			{ ...formData, weight: parseFloat(formData.weight) }
		]);
		setFormData({
			name: "",
			image: "",
			specialty: "",
			weight: "",
			greased: false,
			highestMedalAchieved: ""
		});
	};

	return (
		<form onSubmit={handleSubmit} className="ui form" style={{ marginBottom: '20px' }}>
			<div className="field">
				<label>Name</label>
				<input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
			</div>
			<div className="field">
				<label>Image URL</label>
				<input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
			</div>
			<div className="field">
				<label>Specialty</label>
				<input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" required />
			</div>
			<div className="field">
				<label>Weight</label>
				<input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
			</div>
			<div className="field">
				<label>
					Greased:
					<input name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
				</label>
			</div>
			<div className="field">
				<label>Highest Medal Achieved</label>
				<input name="highestMedalAchieved" value={formData.highestMedalAchieved} onChange={handleChange} placeholder="Highest Medal Achieved" />
			</div>
			<button type="submit">Add Hog</button>
		</form>
	);
};

export default HogForm;
