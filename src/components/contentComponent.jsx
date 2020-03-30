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
        loading: true,
        locations: []

    }

    //   axios API call here
    async componentDidMount() {
        window.scrollTo(0, 0);
        await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
            .then(res => {
                const response = res.data;
                this.setState({
                    confirmed: response.latest.confirmed,
                    recovered: response.latest.recovered,
                    deaths: response.latest.deaths,
                    locations: response.locations,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error);
            })
        console.log(this.state.locations);
    }


    render() {
        let displayUI;
        if (this.state.loading) {
            displayUI = <div className="overlay ">
                <div className="spinner-border text-primary custom" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        } else {
            displayUI = <Stats locations={this.state.locations} />
        }
        return (
            <div>
                <div className="alert alert-warning mt-4" role="alert">
                    <span className="badge badge-warning">Info</span>&emsp;API no longer provides <strong>RECOVERED CASES</strong>.
                </div>

                <div className="mt-4">
                    <h5>Latest update on <span className="badge badge-secondary font-weight-bolder">COVID-19</span> worldwide.</h5>
                </div>

                <Card confcase={this.state.confirmed} reccase={this.state.recovered} decase={this.state.deaths} />

                <hr />

                <div className="mt-4">
                    <h5>Cases by country wise</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Total number of countries <span className="badge badge-info">{this.state.locations.length}</span></h6>
                    {displayUI}
                </div>

            </div>
        )

    }
}



export default contentComponent;