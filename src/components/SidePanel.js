import React from 'react';
import 'react-dom';

function SidePanel (props) {

    return (<div className='info-panel'>
        <h1>{props.name}</h1>
        <body>{props.data.content}
        {props.data.source}</body>
        <button onClick={() => props.updateLayer("overview")}>Overview</button>
        <button onClick={() => props.updateLayer("structure")}>Structure</button>
        <button onClick={() => props.updateLayer("geology")}>Geology</button>
    </div>)
}

export default SidePanel