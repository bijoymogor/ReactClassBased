import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";

import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
	{ id: "u1", name: "Max" },
	{ id: "u2", name: "Manuel" },
	{ id: "u3", name: "Julie" },
];

class UserFinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: "",
		};
	}

	componentDidMount() {
		//http request
		this.setState({ filteredUsers : DUMMY_USERS});
	}

	componentDidUpdate(prevProps, prevState) {
		// Gets two arguements prevProps and prevState 
		// It will create a infinte loop if there is no if statment because component did
		// update will be called whenever there is a state change and we are setting state
		// so that's why set state to ensure that if the prevState is not same to new state then only to set state
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) =>
					user.name.includes(this.state.searchTerm)
				),
			});
		}

	}

	searchChangeHandler(event) {
		// setSearchTerm(event.target.value);
		this.setState((currState) => {
			return ({ searchTerm: event.target.value });
		})
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
					<Users users={this.state.filteredUsers} />
				</div>
			</Fragment>
		);
	}
}

// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState("");

// 	useEffect(() => {
// 		setFilteredUsers(
// 			DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 		);
// 	}, [searchTerm]);

// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	return (
// 		<Fragment>
// 			<div className={classes.finder}>
// 				<input type="search" onChange={searchChangeHandler} />
// 				<Users users={filteredUsers} />
// 			</div>
// 		</Fragment>
// 	);
// };

export default UserFinder;
