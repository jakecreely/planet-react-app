import React, { useEffect } from 'react';
import 'react-dom';

function ImagePanel(props) {

    useEffect(() => {
        console.log(props.images[2])
    }, [props.layer])

    return (<div className='image-panel'>
        <img src={props.images}></img>
    </div>)
}

export default ImagePanel