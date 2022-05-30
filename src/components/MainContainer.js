import React from 'react';
import 'react-dom';
import BottomPanel from './BottomPanel';
import ImagePanel from './ImagePanel';
import SidePanel from './SidePanel';

function MainContainer() {
    return ( <div className='mainContainer'>
        <ImagePanel />
        <SidePanel />
        <BottomPanel />
    </div>)
}

export default MainContainer