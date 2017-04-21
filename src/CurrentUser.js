import React, { PropTypes } from 'react';
import { auth } from './firebase';
import './CurrentUser.css';

const _handleSignOut = () => {
    return auth.signOut()
  }

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      {/*{ user.displayName }*/}
      <img
        src={ user.photoURL }
        alt={ user.displayName }
        className="CurrentUser--photo"
      />

      <div className="CurrentUser--identification">
        <h3>
          { user.displayName }
        </h3>

        <h5>
          { user.email }
        </h5>
        <button onClick={ _handleSignOut }>
          Sign Out
        </button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
