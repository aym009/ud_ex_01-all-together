import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: ''
    },
    userExists: false
  }
  
  usernameExists = inputUsername => {
    const users = this.props.users;
    
    for(let user of users) {
      if (user.username === inputUsername) {
        return true;
      }
    }
    return false;
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const userExists = this.usernameExists(this.state.user.username);
    
    if (!userExists) {
      this.props.onAddNewUser(this.state.user)
    }
    
    this.setState(() => ({
      userExists
    }))
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    
    this.setState(currentState => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value
      }
    }))
  }
  
  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    
    return firstName === '' || lastName === '' || username === '';
  }

  render() {
    const { firstName, lastName, username } = this.state.user;
    
    return(
      <div>
      	<h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
      		name="firstName"
            placeholder="First Name"
      		value={firstName}
  			onChange={this.handleInputChange}
          />
          <input
            type="text"
      		name="lastName"
            placeholder="Last Name"
			value={lastName}
  			onChange={this.handleInputChange}
          />
          <input
            type="text"
      		name="username"
            placeholder="Username"
			value={username}
  			onChange={this.handleInputChange}
          />
          <button disabled={this.isDisabled()}>Add</button>
        </form>
  		{this.state.userExists ? (
           <p className="error">username already exists</p>
         ) : (
           ''
         )}
      </div>
    )
  }
}

AddUser.PropTypes = {
  users: PropTypes.array.isRequired,
  onAddNewUser: PropTypes.func.isRequired
}

export default AddUser;
