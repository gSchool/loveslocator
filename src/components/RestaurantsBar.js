import React, { Component } from 'react';

export default class RestaurantsBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
    }

    componentDidMount() {
        this.populateRestaurants();
    }

    async populateRestaurants() {
        try {
            const restaurants = await (await fetch('/api/restaurants')).json();
            this.setState(Object.assign({}, this.state, {
                restaurants: restaurants
            }));
        } catch (ex) {
            console.error(ex);
        }
    }

    get restaurantCodes() {
        return this.state.restaurants && this.state.restaurants.map((restaurant, i) => {
            return (
                <div key={i} style={{margin: '10px'}}>
                    <input type="checkbox" id={`s${i}`} className="left" style={{marginRight: '10px'}} />
                    <label htmlFor={`s${i}`}>{restaurant.Name}</label>
                </div>
            )
        });
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <h4>Select Restaurants:</h4>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap' }} >
                    {this.restaurantCodes}
                </div>
            </div>
        );
    }
}
