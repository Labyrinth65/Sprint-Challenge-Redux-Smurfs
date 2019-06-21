import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

class Smurfs extends React.Component {
	componentDidMount() {
		this.props.getSmurfs("http://localhost:3333/smurfs");
	}

	render() {
		return (
			<div className="Smurfs">
				<h1>Smurf Village</h1>
				<ul>
					{this.props.smurfs.map(smurf => {
						return (
							<Smurf
								{...smurf}
								key={smurf.id}
								// deleteSmurf={this.props.deleteSmurf}
								// updateSmurf={this.props.updateSmurf}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		error: state.error
	};
};

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(Smurfs);
