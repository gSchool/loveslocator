import React, { Component } from 'react';

export default class RestaurantsBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
        this.handleChange = this.handleChange.bind(this);
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
                <div key={i}>
                    <input 
                        type="checkbox" 
                        id={`s${i}`} 
                        name={restaurant.Name}
                        className="left" 
                        style={{marginRight: '10px'}} 
                        defaultChecked={this.props.restaurants[restaurant.Name]}
                        onChange={this.handleChange}
                        />
                    <label htmlFor={`s${i}`}>{restaurant.Name}</label>
                </div>
            )
        });
    }

    handleChange(ev) {
        const restaurants = Object.assign({}, this.props.restaurants);
        restaurants[ev.target.name] = ev.target.checked;
        console.log('restaurants=', restaurants);
        this.props.onChange(restaurants);
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
