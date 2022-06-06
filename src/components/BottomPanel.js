import React from 'react';
import 'react-dom';
import InfoCard from './InfoCard';

function BottomPanel(props) {
    return (<div className='stats-panel'>
        <InfoCard title={"Radius"} data={props.data.radius}/>
        <InfoCard title={"Revolution"} data={props.data.revolution}/>
        <InfoCard title={"Rotation"} data={props.data.rotation}/>
        <InfoCard title={"Temperature"} data={props.data.temperature}/>
    </div>)
}

export default BottomPanel