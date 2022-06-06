import React from 'react';
import 'react-dom';

function InfoCard(props) {
    return (<div class='info-card'>
        <h2> {props.title} </h2>
        <h2> {props.data} </h2>
    </div>)
}

export default InfoCard