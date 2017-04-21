import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import { database } from './firebase';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.restaurantRef = database.ref('/restaurants')

    this._handleSelect = this._handleSelect.bind(this)
  }

  _handleSelect(key) {
    // console.log('select')
    // console.log(key)
    const currentUser = this.props.user
    this.restaurantRef
        .child(key)
        .child('votes')
        .child(currentUser.uid)
        .set(currentUser.displayName)
  }

  _handleDeselect(key) {
    const currentUser = this.props.user
    this.restaurantRef
        .child(key)
        .child('votes')
        .child(currentUser.uid)
        .remove()
  }

  render () {
    const { restaurants } = this.props
    // console.log(this.props)
    return (
      <section className="Restaurants">
        { 
          map(restaurants, (restaurant, key) => 
            <Restaurant
              key={ key }
              {...restaurant}
              _handleSelect={ () => this._handleSelect(key) }
              _handleDeselect={ () => this._handleDeselect(key) }
            />
          )
         }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
