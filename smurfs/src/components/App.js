import React, { Component } from "react";
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
				<Route
					path="/smurf-form"
					component={SmurfForm}
					// render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
				/>
				<Route
					exact
					path="/"
					component={Smurfs}
					// render={props => (
					// 	<Smurfs
					// 		{...props}
					// 		smurfs={this.state.smurfs}
					// 		deleteSmurf={this.deleteSmurf}
					// 		updateSmurf={this.updateSmurf}
					// 	/>
					// )}
				/>
				<Route
					exact
					path="/smurf/:id"
					component={SmurfCard}
					// render={props => (
					// 	<SmurfCard
					// 		{...props}
					// 		smurfs={this.state.smurfs}
					// 		deleteSmurf={this.deleteSmurf}
					// 		updateSmurf={this.updateSmurf}
					// 	/>
					// )}
				/>
			</div>
		);
	}
}

export default withRouter(App);
