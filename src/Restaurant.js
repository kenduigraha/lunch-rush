import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, votes, _handleSelect, _handleDeselect } = this.props

    return (
      <article className="Restaurant">
        { name }
        <ul>
          {
            votes &&
            map(votes, (vote, key) =>
              <li key={ key } >
                { vote }
              </li>
            )
          }
        </ul>
        
        <button onClick={ _handleSelect }>
          I like it !
        </button>

        <button className="destructive" onClick={ _handleDeselect }>
          I don't like it !
        </button>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
