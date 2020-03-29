import React from 'react';
import { Line } from 'peity-react';
import '../style/cardComponent.css';

const confirmed = [5, 7, 20, 40, 78];
const recovered = [0, 0, 0, 0, 0];
const  deaths = [5, 10, 15, 30, 55, 85];

function cardComponents(props) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mt-4">
                    <div className="card text-center positiveColor border-primary" >
                        <div className="card-body">
                            <h5 className="card-title">CONFIRMED CASES</h5>
                            <h1>{props.confcase}</h1>
                            <Line values={ confirmed } height={30} width={100} min={0} max={100} />
                        </div>
                    </div>
                </div>
                <div className="col mt-4">
                    <div className="card text-center recoveryColor border-success">
                        <div className="card-body">
                            <h5 className="card-title">RECOVERED CASES</h5>
                            <h1>{props.reccase}</h1>
                            <Line values={ recovered } height={30} width={100} min={0} max={100} />
                        </div>
                    </div>
                </div>
                <div className="col mt-4">
                    <div className="card text-center deathColor border-danger">
                        <div className="card-body">
                            <h5 className="card-title">DEATHS</h5>
                            <h1>{props.decase}</h1>
                            <Line values={deaths } height={30} width={100} min={0} max={100} stroke={'#e0551e'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardComponents;
