import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/statsComponent.css';


class statsComponents extends Component {

    

    render() {
        return (
            <div className="mt-4">
                {this.props.locations.map((location, i) =>
                    <div className="card cardColor mt-2 mb-2" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className="row" >
                                <div className="col-md-1 col-2">
                                    <h6 className="text-dark customeStyle"><span className="badge badge-secondary">{i+1}</span></h6>
                                </div>
                                <div className="col-md-5 col-10" >
                                    <Link style={{ textDecoration: 'none' }} to={{
                                        pathname: '/' + location.country_name , state: {
                                            country: location.country_name,
                                            cases: location.cases,
                                            deaths:location.deaths,
                                            newcases:location.new_cases,
                                            newdeaths:location.new_deaths,
                                            newrecover:"Pray for them",
                                            recovered:location.total_recovered,
                                            time:this.props.timestamp
                                             }}} >
                                        <h6 className="customeStyle font-weight-bolder">{location.country_name}</h6>
                                    </Link>
                                </div>
                                <div className=" col-md-2 col-4">
                                    <h6 className="text-primary customeStyle">↑&nbsp;{location.cases}</h6>
                                </div>
                                <div className="col-md-2 col-4 ">
                                    <h6 className="text-success customeStyle">{location.total_recovered}</h6>
                                </div>
                                <div className="col-md-2 col-4">
                                    <h6 className="text-danger customeStyle">↓&nbsp;{location.deaths}</h6>
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
