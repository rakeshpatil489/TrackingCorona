import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/statsComponent.css';


class statsComponents extends Component {



    render() {
        return (
            <div className="mt-4">
                {this.props.locations.map(location =>
                    <div className="card cardColor mt-2 mb-2" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className="row" >
                                <div className="col-md-1 col-2 d-none d-sm-block">
                                    <h6 className="text-dark customeStyle">{location.id + 1}</h6>
                                </div>
                                <div className="col-md-5 col-10" >
                                    <Link style={{ textDecoration: 'none' }} to={{
                                        pathname: '/' + location.country, state: {
                                            country: location.country,
                                            id: location.id,
                                            countryPopulation: location.country_population,
                                            cases: location.latest,
                                            timeDate: location.last_updated }}} >
                                        <h6 className="customeStyle">{location.country}&ensp;<span className="text-black-50 font-italic">{location.province}</span></h6>
                                    </Link>
                                </div>
                                <div className=" col-md-2 col-4">
                                    <h6 className="text-primary customeStyle">{location.latest.confirmed}</h6>
                                </div>
                                <div className="col-md-2 col-4 ">
                                    <h6 className="text-success customeStyle">{location.latest.recovered}</h6>
                                </div>
                                <div className="col-md-2 col-4">
                                    <h6 className="text-danger customeStyle">{location.latest.deaths}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}







export default statsComponents;
