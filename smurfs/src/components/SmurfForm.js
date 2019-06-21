import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: "",
			height: ""
		};
	}

	addSmurf = event => {
		event.preventDefault();
		const newSmurf = {
			...this.state,
			age: parseInt(this.state.age)
		};
		this.props.addSmurf("http://localhost:3333/smurfs", newSmurf);
		this.setState({
			name: "",
			age: "",
			height: ""
		});
		this.props.history.push("/");
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.addSmurf} className="smurfForm">
					<label htmlFor="name">Name</label>
					<input
						onChange={this.handleInputChange}
						placeholder="Enter Name"
						value={this.state.name}
						name="name"
						className="addElement"
						required
					/>
					<label htmlFor="age">Age</label>
					<input
						onChange={this.handleInputChange}
						placeholder="Enter Age"
						value={this.state.age}
						name="age"
						type="number"
						className="addElement"
						required
					/>
					<label htmlFor="height">Height</label>
					<input
						onChange={this.handleInputChange}
						placeholder="Enter Height"
						value={this.state.height}
						name="height"
						className="addElement"
						required
					/>
					<button type="submit">Add to the village</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		addingSmurfs: state.addingSmurfs,
		error: state.error
	};
};

export default connect(
	mapStateToProps,
	{ addSmurf }
)(SmurfForm);
