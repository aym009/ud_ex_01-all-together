import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return(
    <li>
      <p>Username: {props.user.username}</p>
	  <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
	</li>
  )
}

User.PropTypes = {
  user: PropTypes.object.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired
}

export default User;
