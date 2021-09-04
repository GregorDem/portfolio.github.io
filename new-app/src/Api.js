import React, { Component } from 'react';
import "./NewStyle.css";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            isLoaded: false,
            items: []

        };
    }
        componentDidMount() {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.drinks
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    });
                }
            )
        }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return (
                <p>ERROR {error.message}</p>
            );
        } else if (!isLoaded) {
            return (
                <p> Loading... </p>
            )
        } else {
            return(
                <div className = "list">
                    {items.map(item => (
                        <div className = "item" key = {item.name}>
                            <div className = "NameDrink">
                                <p>{item.strDrink}</p>
                            </div>
                            <div className = "drinkInfo">
                                <img className = "IMG" src = {item.strDrinkThumb}></img>
                                <div className = "buttonBar">
                                    <button className = "toDone">Add</button>
                                    <div className = "favorite"></div>
                                    <div className = "rank">
                                        <div id = '1' className = "star"></div>
                                        <div id = '2' className = "star"></div>
                                        <div id = '3' className = "star"></div>
                                        <div id = '4' className = "star"></div>
                                        <div id = '5' className = "star"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

