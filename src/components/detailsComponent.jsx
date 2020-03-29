import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from './cardComponents';





class detailsComponent extends Component {



    render() {

        let newTime = this.props.location.state.timeDate.slice(11, 16);
        let newDate = this.props.location.state.timeDate.slice(0, 10);
        let confirmed = this.props.location.state.cases.confirmed;
        let recovered = this.props.location.state.cases.recovered;
        let deaths = this.props.location.state.cases.deaths;

        const pieData = {
            labels: [
                'Confirmed',
                'Recovered',
                'Deaths'
            ],
            datasets: [{
                data: [confirmed,recovered,deaths],
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
                    <h5>Latest update in <span className="text-primary font-weight-bolder">{this.props.location.state.country}</span></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Last updated at {newTime} on {newDate} </h6>
                </div>

                <Card confcase={this.props.location.state.cases.confirmed} reccase={this.props.location.state.cases.recovered} decase={this.props.location.state.cases.deaths} />

               <div className="card mt-4 mb-4" style={{ backgroundColor: '#f4f4f4'}}>
                  <Doughnut data={pieData} width={500} height={220} />
               </div>
                

            </React.Fragment>
        )
    }
} 



export default detailsComponent;


