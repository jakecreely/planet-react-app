import React from 'react';
import 'react-dom';

function NavBar() {
    return(
        <div className='nav-container'>
                <ul className='navbar'>
                    <li className='nav-title'>
                        <div>THE PLANETS</div>
                    </li>

                    <li>
                    <a id='mercury-link'>Mercury</a>
                    </li>

                    <li>
                    <a id='venus-link'>Venus</a>
                    </li>

                    <li>
                    <a id='earth-link'>Earth</a>
                    </li>

                    <li>
                    <a id='mars-link'>Mars</a>
                    </li>

                    <li>
                    <a id='jupiter-link'>Jupiter</a>
                    </li>

                    <li>
                    <a id='saturn-link'>Saturn</a>
                    </li>

                    <li>
                    <a id='uranus-link'>Uranus</a>
                    </li>

                    <li>
                    <a id='neptune-link'>Neptune</a>
                    </li>

                </ul>
        </div>
    )
}

export default NavBar