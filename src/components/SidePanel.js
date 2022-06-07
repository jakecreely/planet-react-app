import React from 'react';
import 'react-dom';

function SidePanel (props) {

    return (<div className='info-panel'>
        <div className='content-container'>
        <h1 className='title'>{props.name.toUpperCase()}</h1>
        <body className='content'>
            <div>{props.data.content}</div>
            <div>Source: <a className='links' style={{marginLeft: 0}} href={props.data.source}>Wikipedia <img src='assets/icon-source.svg'></img></a></div>
        </body>
        </div>
        <div className='button-container'>
        <button className='buttons' onClick={() => props.updateLayer("overview")}>Overview</button>
        <button className='buttons' onClick={() => props.updateLayer("structure")}>Structure</button>
        <button className='buttons' onClick={() => props.updateLayer("geology")}>Geology</button>
        </div>
    </div>)
}

export default SidePanel