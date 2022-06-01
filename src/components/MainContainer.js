import React, { useEffect, useState } from 'react';
import 'react-dom';
import BottomPanel from './BottomPanel';
import ImagePanel from './ImagePanel';
import SidePanel from './SidePanel';
import {useParams} from "react-router-dom";

function MainContainer() {

    const [planetData, setPlanetData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    let params = useParams();

    useEffect(() => {
        fetch('data.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
            const filtered = data.filter(planet => {
                return planet.name.toLowerCase() === params.name.toLowerCase()
            })
            setPlanetData(filtered)
            console.log(filtered)
            setLoading(false);
        })
    }, [params.name])

    if (!isLoading) {
    return ( <div className='mainContainer'>
        <ImagePanel images={planetData[0].images}/>
        <SidePanel data={{
            "overview": planetData[0].overview, 
            "geology": planetData[0].geology,
            "structure": planetData[0].structure
            }}/>
        <BottomPanel data={{
            "radius": planetData[0].radius,
            "revolution": planetData[0].revolution,
            "rotation": planetData[0].rotation,
            "temperature": planetData[0].temperature
        }}/>
    </div>)
    } else {
        <div>
            Still Loading...
        </div>
    }
}

export default MainContainer