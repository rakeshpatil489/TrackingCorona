import React, { Component } from 'react';
import '../style/statsComponent.css';

class statsComponents extends Component {


    render() {
        return (
            <div className="mt-4">
                {this.props.locations.map(location =>
                    <div className="card cardColor mt-2 mb-2" style={{cursor:'pointer'}}>
                        <div className="card-body">
                            <div className="row"  key={location.id} >
                                <div className="col">
                                    <h6 className="text-dark customeStyle" >{location.id+1}</h6>
                                </div>
                                <div className="col-5" >
                                    <h6 className="customeStyle">{location.country}&ensp;<span className="text-black-50 font-italic">{location.province}</span></h6>
                                </div>
                                <div className=" col col-xs-4">
                                    <h6 className="text-primary customeStyle">{location.latest.confirmed}</h6>
                                </div>
                                <div className="col col-xs-4">
                                    <h6 className="text-success customeStyle">{location.latest.recovered}</h6>
                                </div>
                                <div className="col col-xs-4">
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
