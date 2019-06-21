import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import RenderSmurf from "./RenderSmurf";

class SmurfCard extends Component {
	render() {
		return (
			<div className="smurfCard">
				<div className="cardTop">
					<div className="buttonDiv">
						<div onClick={this.updateState} className="updateButton">
							<i className="far fa-edit" />
						</div>
						<div
							onClick={e => this.props.deleteSmurf(e, this.props.id)}
							className="deleteButton"
						>
							<i className="far fa-trash-alt" />
						</div>
					</div>
				</div>
				{/* Check if observing smurf on Smurf List or on its own URL */}
				{this.props.match === undefined ? (
					<RenderSmurf {...this.props} />
				) : (
					this.props.smurfs
						.filter(
							smurf => smurf.id === parseInt(this.props.match.params.id, 10)
						)
						.map(smurf => <RenderSmurf {...smurf} key={smurf.id} />)
				)}
				;
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		updatingSmurf: state.updatingSmurf,
		deletingSmurf: state.deletingSmurf,
		updateToggle: state.updateToggle,
		error: state.error
	};
};

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(SmurfCard);
