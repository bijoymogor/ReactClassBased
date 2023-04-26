import { useState } from "react";
import { Component } from "react";

import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {

	// Declare state alwas inside constructor like this
	// And always named as state which is an object containing state variables
	constructor() {
		// Neccesary to call super()
		super();
		this.state = {
			showUsers: true,
			moreState: "Test",
		};
	}

	//Functions to be executed in render to be declared inside the class
	toggleUsersHandler() {
		// this.state.showUsers = false;    //Not Allowed
		// this.setState({showUsers:false});	//Allowed
		// State will not be overwritted but will be merged with the existing state
		this.setState((curState) => {
			return { showUsers: !curState.showUsers };
		});
	}

	render() {
		const usersList = (
			<ul>
				{this.props.users.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);

		return (
			<div className={classes.users}>
			{/* Functions need to be called like this */}
				<button onClick={this.toggleUsersHandler.bind(this)}>
				{/* Access state with this.state */}
					{this.state.showUsers ? "Hide" : "Show"} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
