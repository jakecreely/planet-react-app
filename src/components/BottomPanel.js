import React from 'react';
import 'react-dom';
import InfoCard from './InfoCard';

function BottomPanel(props) {
    return (<div className='stats-panel'>
        <InfoCard title={"Rotation Time"} data={props.data.rotation}/>
        <InfoCard title={"Revolution Time"} data={props.data.revolution}/>
        <InfoCard title={"Radius"} data={props.data.radius}/>
        <InfoCard title={"Average Temp."} data={props.data.temperature}/>
    </div>)
}

export default BottomPanel