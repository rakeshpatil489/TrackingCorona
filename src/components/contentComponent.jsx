import React, { Component } from 'react';
import Card from './cardComponents';
import Stats from './statsComponents';
import axios from 'axios';
import '../style/contentComponents.css';

class contentComponent extends Component {

    state = {
        confirmed: '',
        recovered: '',
        deaths: '',
        locations: []

    }

    //   axios API call here
    async componentDidMount() {

        await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
            .then(res => {
                const response = res.data;
                this.setState({
                    confirmed: response.latest.confirmed,
                    recovered: response.latest.recovered,
                    deaths: response.latest.deaths,
                    locations: response.locations,
                })
            })
            .catch(error => {
                console.log(error);
            })
        console.log(this.state.locations);
        console.log(this.state.loading);
    }


    render() {

        return (
            <div>
                <div className="alert alert-info mt-4" role="alert">
                    <span className="badge badge-info">Info</span>&emsp;Since the API is not providing <strong>RECOVERED CASES</strong> it shows 0.
                </div>

                <div className="mt-4">
                    <h5>Latest update on <span className="badge badge-secondary">COVID-19</span> worldwide.</h5>
                </div>

                <Card confcase={this.state.confirmed} reccase={this.state.recovered} decase={this.state.deaths} />

                <div className="mt-4">
                    <h5>Cases by country wise</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Total number of countries <span className="badge badge-info">{this.state.locations.length}</span></h6>
                    <Stats locations={this.state.locations} />
                </div>

            </div>
        )

    }
}



export default contentComponent;