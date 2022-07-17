import React, { useEffect, useState } from 'react';
import 'react-dom';

function SidePanel (props) {

    return (<div className='info-panel'>
        <div className='content-container'>
        <h1 className='title'>{props.name.toUpperCase()}</h1>
        <body className='content'>
            <div style={{paddingBottom: '32px'}}>{props.data.content}</div>
            <div>Source: <a className='links' style={{marginLeft: 0, textDecorationStyle: 'underline'}} href={props.data.source}>Wikipedia <img src='assets/icon-source.svg'></img></a></div>
        </body>
        </div>
        {
            props.layer === 'overview' 
            &&
            <div className='button-container'>
            <button className='buttons' id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("overview")}><div className='button-number'>01</div><div className='button-text'>Overview</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("structure")}><div className='button-number'>02</div><div className='button-text'>Structure</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("geology")}><div className='button-number'>03</div><div className='button-text'>Geology</div></button>
            </div>
        }

        {
            props.layer === 'structure' 
            &&
            <div className='button-container'>
            <button className='buttons'  id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("overview")}><div className='button-number'>01</div><div className='button-text'>Overview</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("structure")}><div className='button-number'>02</div><div className='button-text'>Structure</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("geology")}><div className='button-number'>03</div><div className='button-text'>Geology</div></button>
            </div>
        }

        {
             props.layer === 'geology' 
             &&
             <div className='button-container'>
             <button className='buttons'  id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("overview")}><div className='button-number'>01</div><div className='button-text'>Overview</div></button>
             <button className='buttons' id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("structure")}><div className='button-number'>02</div><div className='button-text'>Structure</div></button>
             <button className='buttons' id={props.name.toLowerCase() + '-button'} onClick={() => props.updateLayer("geology")}><div className='button-number'>03</div><div className='button-text'>Geology</div></button>
            </div>
            }
    </div>)
}

export default SidePanel