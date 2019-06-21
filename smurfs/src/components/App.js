import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import "./App.scss";
import { Route, NavLink, withRouter } from "react-router-dom";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import SmurfCard from "./SmurfCard";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	componentDidMount() {
		this.props.getSmurfs("http://localhost:3333/smurfs");
	}

	render() {
		return (
			<div className="App">
				<div className="navBar">
					<NavLink exact to="/" className="navLink">
						Smurf List
					</NavLink>
					<NavLink exact to="/smurf-form" className="navLink">
						Add Smurf
					</NavLink>
				</div>
				<Route path="/smurf-form" component={SmurfForm} />
				<Route
					exact
					path="/"
					render={() => <Smurfs smurfs={this.props.smurfs} />}
				/>
				<Route
					exact
					path="/smurf/:id"
					// render={props => (
					// 	<div className="Smurf">
					// 		<SmurfCard
					// 			{...props}
					// 			linkedSmurf={this.props.smurfs.find(smurf => {
					// 				return smurf.id === this.props.match.params.id;
					// 			})}
					// 		/>
					// 	</div>
					// )}
					render={props => (
						<div className="Smurf">
							<SmurfCard smurfs={this.props.smurfs} {...props} />
						</div>
					)}
				/>
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

export default withRouter(
	connect(
		mapStateToProps,
		{ getSmurfs }
	)(App)
);
