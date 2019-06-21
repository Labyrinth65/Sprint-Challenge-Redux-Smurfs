import React from "react";
import Smurf from "./Smurf";

class Smurfs extends React.Component {
	render() {
		return (
			<div className="Smurfs">
				<h1>Smurf Village</h1>
				<ul>
					{this.props.smurfs.map(smurf => {
						return <Smurf {...smurf} key={smurf.id} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Smurfs;
