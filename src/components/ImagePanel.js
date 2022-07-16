import React, { useEffect, useState } from 'react';
import 'react-dom';

function ImagePanel(props) {

    const [style, setStyle] = useState(null)

    useEffect(() => {
        setStyle({
            backgroundImage: 'url(' + props.images[0] + ')',
            backgroundRepeat: "no-repeat"
        })
    }, [])


    if (props.layer === "geology") {
        return (<div className='image-panel'>
            <img src={props.images[0]} className='image'></img>
            <div className='image' style={style}></div>
            <div className='overlay'>
                <img className='the-image' src={props.images[1]}></img>
            </div>
        </div>)
    } else {
        return (<div className='image-panel'>
            <img className='the-image' src={props.images}></img>
        </div>)
    }
}

export default ImagePanel