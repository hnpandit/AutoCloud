import React from 'react';
import "./Vehicle.css";
import "../../Pages/Dashboard/Dashboard.css";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function Vehicles(props) {
    return (
        <Tabs defaultActiveKey='Vehicle 1' id="dashboard-tabs">
            {
                props.vehicles.map((vehicle, i) => {
                    return <Tab eventKey={`Vehicle ${i + 1}`} title={`Vehicle ${i + 1}`}>
                                <div>
                                    <div className='card'>
                                        <p>Registration Expiration</p>
                                        <p>{vehicle.registration}</p>
                                    </div>
                                    <div className='card'>
                                        <p>License Expiration</p>
                                        <p>{vehicle.license}</p>
                                    </div>
                                    <div className='card'>
                                        <p>Inspection Expiration</p>
                                        <p>{vehicle.inspection}</p>
                                    </div>
                                </div>
                            </Tab>
                })
            }

        </Tabs>

    )
}

export default Vehicles;
