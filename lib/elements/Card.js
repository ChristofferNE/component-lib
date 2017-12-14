import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2 className="card-header">{this.props.header}</h2>
                    <p className="card-description">{this.props.description}</p>
                    <p className="card-categories">{!this.props.categories ? this.props.categories : this.props.categories.join(", ")}</p>
                </div>
            </div>
        );
    }
}