import React, { Component } from 'react';
import './app.css';
import ScriptContainer from './containers/ScriptContainer';
import ReactImage from './react.png';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

export default class App extends Component {
	state = { username: null };

	// componentDidMount() {
	// 	fetch('/api/files')
	// 		.then(res => res.json())
	// 		.then(user => this.setState({ username: user.username }));
	// }

	render() {
		const { username } = this.state;
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/">
							<ScriptContainer />
						</Route>
						
						<Route path="/:script">
							script123
          				</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
