import React, { Component } from 'react';
import Card from './cardComponents';
import Stats from './statsComponents';
import axios from 'axios';
import '../style/contentComponents.css';
require('dotenv').config();

const headers = {
    'Content-Type': 'application/json',
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_API_KEY
};

console.log(process.env);
const urlOne = process.env.REACT_APP_BASE_URL_ONE;
const urlTwo = process.env.REACT_APP_BASE_URL_TWO;
class contentComponent extends Component {

    state = {
        loading: true,
        timestamp: '',
        allConfirmed: '',
        allDeaths: '',
        allRecovered: '',
        allNewcases: '',
        allNewdeaths: '',
        locations: []
    }


   

    //   axios API call here
    componentDidMount() {
        window.scrollTo(0, 0);
        const requestOne = axios.get(urlOne, { headers });
        const requestTwo = axios.get(urlTwo, { headers });
        axios.all([requestOne, requestTwo])
            .then(axios.spread((...res) => {
                const allCountries = res[0].data;
                const statsOverall = res[1].data;
                console.log(allCountries, statsOverall);
                this.setState({
                    locations: allCountries.countries_stat,
                    timestamp: allCountries.statistic_taken_at,
                    allConfirmed: statsOverall.total_cases,
                    allDeaths: statsOverall.total_deaths,
                    allRecovered: statsOverall.total_recovered,
                    allNewcases: statsOverall.new_cases,
                    allNewdeaths: statsOverall.new_deaths,
                    allNewrecovered: 'Pray for them',
                    loading: false
                })
            })
            )
            .catch(error => {
                console.log(error);
            })
            console.log(this.state.locations);
    }


    render() {


       
        // sorting by highest
        let displayUI;
        if (this.state.loading) {
            displayUI = <div className="overlay">
                <div className="spinner-border text-primary custom" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        } else {
            displayUI = <Stats locations={this.state.locations} timestamp={this.state.timestamp} />
        }
        return (
            <div>
                <div className="mt-4">
                    <h5 className="font-weight-bolder">Latest update on <span className="badge badge-warning font-weight-bolder">COVID-19</span> worldwide.</h5>
                    <h6 className="card-subtitle text-muted">Last updated: <span className="text-monospace">{this.state.timestamp}</span></h6>
                </div>
               

                <Card
                    confcase={this.state.allConfirmed}
                    reccase={this.state.allRecovered}
                    decase={this.state.allDeaths}
                    newcases={this.state.allNewcases}
                    newdeaths={this.state.allNewdeaths}
                    newrecover={this.state.allNewrecovered}
                />

                <hr />

                <div className="mt-4">
                    <h5 className="font-weight-bolder">Cases by country wise</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Total number of countries <span className="badge badge-primary">{this.state.locations.length}</span></h6>
                    {displayUI}
                </div>

            </div>
        )

    }
}



export default contentComponent;