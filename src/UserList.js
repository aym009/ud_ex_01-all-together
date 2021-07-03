import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  state = {
    showGamesPlayed: true
  }
  
  toggleGamePlayedNum = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed
    }))
  }
  
  render() {
    const { showGamesPlayed } = this.state.showGamesPlayed;
    const { users } = this.props;
    
    const gamesPlayedButton = (
      <button onClick={this.toggleGamePlayedNum}>
		{showGamesPlayed ? 'Hide' : 'Show'}
	  </button>
    );
    
    return(
      <div>
      	<h2>Users</h2>
      	{users && users.length > 0 ? gamesPlayedButton : ''}
      	<ul>
		  {users.map(user => (
            <User key={user.username} user={user} showGamesPlayed={showGamesPlayed} />
          ))}
      	</ul>
      </div>
    )
  }
}

UserList.PropTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;
