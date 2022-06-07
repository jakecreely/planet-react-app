import React from 'react';
import 'react-dom';

function SidePanel (props) {

    return (<div className='info-panel'>
        <h1 className='title'>{props.name.toUpperCase()}</h1>
        <body className='content'>
            <div>{props.data.content}</div>
            <div>Source: <a href={props.data.source}>Wikipedia <img src='assets/icon-source.svg'></img></a></div>
        </body>
        <button onClick={() => props.updateLayer("overview")}>Overview</button>
        <button onClick={() => props.updateLayer("structure")}>Structure</button>
        <button onClick={() => props.updateLayer("geology")}>Geology</button>
    </div>)
}

export default SidePanel