import React, { useEffect, useState } from 'react';
import 'react-dom';
import BottomPanel from './BottomPanel';
import ImagePanel from './ImagePanel';
import SidePanel from './SidePanel';
import {useParams} from "react-router-dom";

function MainContainer() {

    const [planetData, setPlanetData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const [selectedLayer, setLayer] = useState("structure")
    const [imageData, setImageData] = useState(null)
    const [layerData, setLayerData] = useState(null)
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
            setLoading(false);
            console.log(filtered)
            return filtered;
        }).then(data => {
            if (selectedLayer === "overview") {
                setImageData(data[0].images["planet"])
                setLayerData(data[0].overview)
            } else if (selectedLayer === "structure") {
                setImageData(data[0].images["internal"])
                setLayerData(data[0].structure)
            }
            else if (selectedLayer === "geology") {
                setImageData([data[0].images["planet"],data[0].images["geology"]])
                setLayerData(data[0].geology)
            }
        })
    }, [params.name, selectedLayer])

    const updateLayer = (value) => {
        setLayer(value)
    }

    if (!isLoading) {
    return ( <div className='mainContainer'>
        <ImagePanel images={imageData} layer={selectedLayer}/>
        <SidePanel name={planetData[0].name} data={layerData} layer={selectedLayer} updateLayer={updateLayer}/>
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