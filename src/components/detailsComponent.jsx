import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from './cardComponents';

class detailsComponent extends Component {



    render() {
        // removing commos to make it number
        let confirmedGraph = this.props.location.state.cases;
        confirmedGraph = Number(confirmedGraph.replace(/,/g, ""));
        let recoveredGraph = this.props.location.state.recovered;
        recoveredGraph = Number(recoveredGraph.replace(/,/g, ""));
        let deathsGraph = this.props.location.state.deaths;
        deathsGraph = Number(deathsGraph.replace(/,/g, ""));

        const pieData = {
            labels: [
                'Confirmed',
                'Recovered',
                'Deaths'
            ],
            datasets: [{
                data: [confirmedGraph, recoveredGraph, deathsGraph],
                backgroundColor: [
                    '#36A2EB',
                    '#FF6384',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#36A2EB',
                    '#FF6384',
                    '#FFCE56'
                ]
            }]
        }
        return (
            <React.Fragment>

                <div className="mt-4">
                    <h5>Latest update in <span className="badge badge-primary font-weight-bolder">{this.props.location.state.country}</span></h5>
                    <h6 class="card-subtitle text-muted">Last updated: <span className="text-monospace">{this.props.location.state.time}</span></h6>
                </div>

                <Card 
                confcase={this.props.location.state.cases} 
                reccase={this.props.location.state.recovered} 
                decase={this.props.location.state.deaths}  
                newcases={this.props.location.state.newcases}
                newdeaths={this.props.location.state.newdeaths}
                newrecover={this.props.location.state.newrecover} />

               <hr/>

                <div className="card mt-3 mb-3" style={{ backgroundColor: '#f9f9f9' }}>
                    <Doughnut data={pieData} />
                </div>


            </React.Fragment>
        )
    }
}



export default detailsComponent;


