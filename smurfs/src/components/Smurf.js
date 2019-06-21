import React from "react";
import { Link } from "react-router-dom";
import SmurfCard from "./SmurfCard";

class Smurf extends React.Component {
	render() {
		return (
			<div className="Smurf">
				<Link to={`/smurf/${this.props.id}`} className="viewDiv">
					View Smurf
				</Link>
				<SmurfCard {...this.props} />
			</div>
		);
	}
}

export default Smurf;
