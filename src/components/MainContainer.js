import React from 'react';
import 'react-dom';
import BottomPanel from './BottomPanel';
import ImagePanel from './ImagePanel';
import SidePanel from './SidePanel';
import {useParams} from "react-router-dom";

function MainContainer(props) {

    let params = useParams();
    let loadedData = props.loadedData

    const extractPlanet = (planetName) => {
        const data = loadedData.filter(item => {
          return item.name.toLowerCase() == planetName.toLowerCase()
        })
        console.log(data)
        return data
      }

    if (props.loadedData != null) {

    console.log(loadedData)

    extractPlanet(params.name)

    return ( <div className='mainContainer'>
        <ImagePanel />
        <SidePanel />
        <BottomPanel />
    </div>)

    } else {
        return (
            <div>
                Loading / Not Data in Props
            </div>
        )
    }
}

export default MainContainer