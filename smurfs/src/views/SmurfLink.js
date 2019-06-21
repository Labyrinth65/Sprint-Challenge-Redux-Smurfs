import React from "react";
import SmurfCard from "../components/SmurfCard";

const SmurfLink = props => {
	return (
		<div className="Smurf">
			{props.smurfs
				.filter(smurf => smurf.id === parseInt(props.match.params.id, 10))
				.map(smurf => (
					<SmurfCard {...smurf} {...props} key={smurf.id} />
				))}
		</div>
	);
};

export default SmurfLink;
