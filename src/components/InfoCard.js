import React from 'react';
import 'react-dom';

function InfoCard(props) {
    return (<div className='info-card'>
        <div className='attribute'> {props.title.toUpperCase()} </div>
        <h2 className='data'> {props.data} </h2>
    </div>)
}

export default InfoCard