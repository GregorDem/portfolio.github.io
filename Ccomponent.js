import React, { Component } from 'react';
import "./NewStyle.css";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    };
    render() {
        return (
            <div>
                <h1 className = "label">Hellow, programmer</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input value = {this.state.input} onChange = {this.handleChange}></input>
                    <button type = "submit">Submit!</button>
                </form>
                <h5>Controlled input:</h5>
               <ul>
                   {this.state.items.map((items,index) => (
                       <li key = {index}>{items}</li>
                   ))}
               </ul>
            </div>
        );
    }
}

