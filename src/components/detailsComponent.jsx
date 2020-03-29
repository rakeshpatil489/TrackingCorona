import React, { Component } from 'react';
import Card from './cardComponents';



class detailsComponent extends Component {



    render() {
      
        let newTime = this.props.location.state.timeDate.slice(11,16);  
        let newDate = this.props.location.state.timeDate.slice(0,10); 
        return (
            <React.Fragment>
                <div className="mt-4">
                    <h5>Latest update in <span className="text-primary font-weight-bolder">{this.props.location.state.country}</span></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Last updated at {newTime} on {newDate} </h6>
                </div>
                <Card confcase={this.props.location.state.cases.confirmed} reccase={this.props.location.state.cases.recovered} decase={this.props.location.state.cases.deaths}/>
            </React.Fragment>
        )
    }
} export default detailsComponent;


