import React from 'react';
import 'react-dom';

function BottomPanel(props) {
    return (<div className='stats-panel'>
        {/* 4 Info Cards */}
        Radius: {props.data.radius}
        Revolution: {props.data.revolution}
        Rotation: {props.data.rotation}
        Temperature: {props.data.temperature}
    </div>)
}

export default BottomPanel