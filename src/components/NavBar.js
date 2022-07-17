import React, { useState, useEffect} from 'react';
import 'react-dom';
import {Link} from 'react-router-dom'

function NavBar(props) {

    const [isToggled, setToggle] = useState(false)

    return(
        <div>
        <div className='nav-container'>
            
                <div className='nav-title'>
                    THE PLANETS
                </div>

                <button className='toggle-icon' onClick={() => setToggle(!isToggled)}><img src='assets/icon-hamburger.svg'></img></button>
                
                <ul className='navbar'>
                    <li>
                    <Link to="/mercury" id='mercury-link' className='links'>Mercury</Link>
                    </li>

                    <li>
                    <Link to="/venus" id='venus-link' className='links'>Venus</Link>
                    </li>

                    <li>
                    <Link to="/earth" id='earth-link' className='links'>Earth</Link>
                    </li>

                    <li>
                    <Link to="/mars" id='mars-link' className='links'>Mars</Link>
                    </li>

                    <li>
                    <Link to="/jupiter" id='jupiter-link' className='links'>Jupiter</Link>
                    </li>

                    <li>
                    <Link to="/saturn" id='saturn-link' className='links'>Saturn</Link>
                    </li>

                    <li>
                    <Link to="/uranus" id='uranus-link' className='links'>Uranus</Link>
                    </li>

                    <li>
                    <Link to="/neptune" id='neptune-link' className='links'>Neptune</Link>
                    </li>

                </ul>
        </div>

            <ul className={isToggled ? 'navbar-shown' : 'navbar-collapse'}>
                        <li>
                        <Link to="/mercury" id='mercury-link' className='links'>Mercury</Link>
                        </li>

                        <li>
                        <Link to="/venus" id='venus-link' className='links'>Venus</Link>
                        </li>

                        <li>
                        <Link to="/earth" id='earth-link' className='links'>Earth</Link>
                        </li>

                        <li>
                        <Link to="/mars" id='mars-link' className='links'>Mars</Link>
                        </li>

                        <li>
                        <Link to="/jupiter" id='jupiter-link' className='links'>Jupiter</Link>
                        </li>

                        <li>
                        <Link to="/saturn" id='saturn-link' className='links'>Saturn</Link>
                        </li>

                        <li>
                        <Link to="/uranus" id='uranus-link' className='links'>Uranus</Link>
                        </li>

                        <li>
                        <Link to="/neptune" id='neptune-link' className='links'>Neptune</Link>
                        </li>

                    </ul>

        {
            props.layer === 'overview' 
            &&
            <div className='top-button-container'>
            <button className='buttons'  id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("overview")}><div className='button-text'>Overview</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("structure")}><div className='button-text'>Structure</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("geology")}><div className='button-text'>Surface</div></button>
            </div>
        }

        {
            props.layer === 'structure' 
            &&
            <div className='top-button-container'>
            <button className='buttons'  id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("overview")}><div className='button-text'>Overview</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("structure")}><div className='button-text'>Structure</div></button>
            <button className='buttons' id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("geology")}><div className='button-text'>Surface</div></button>
            </div>
        }

        {
             props.layer === 'geology' 
             &&
             <div className='top-button-container'>
             <button className='buttons'  id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("overview")}><div className='button-text'>Overview</div></button>
             <button className='buttons' id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("structure")}><div className='button-text'>Structure</div></button>
             <button className='buttons'id={props.name.toLowerCase() + '-button--mobile'} onClick={() => props.updateLayer("geology")}><div className='button-text'>Surface</div></button>
            </div>
            }

        </div>
    )
}

export default NavBar