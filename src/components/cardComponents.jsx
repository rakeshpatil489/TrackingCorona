import React from 'react';
import '../style/cardComponent.css';

function cardComponents(props) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mt-4">
                    <div className="card text-center positiveColor border-primary" >
                        <div className="card-body">
                            <h5 className="card-title font-weight-bolder">CONFIRMED</h5>
                            <h1>{props.confcase}</h1>
                            <h5 className="font-weight-light">[+{props.newcases} ]</h5>
                        </div>
                    </div>
                </div>
                <div className="col mt-4">
                    <div className="card text-center recoveryColor border-success">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bolder">RECOVERED</h5>
                            <h1>{props.reccase}</h1>
                            <h5 className="font-weight-light">[+{props.newrecover} ]</h5> 
                        </div>
                    </div>
                </div>
                <div className="col mt-4">
                    <div className="card text-center deathColor border-danger">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bolder">DEATHS</h5>
                            <h1>{props.decase}</h1>
                            <h5 className="font-weight-light">[+{props.newdeaths} ]</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardComponents;
