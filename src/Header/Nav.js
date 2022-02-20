import React from 'react'
import Aonncement from './Aonncement'
import './nav.css'

export default function Nav() {
    return (
        <div className='header'>
            <Aonncement />
            <nav>
                <ul>
                <li id='logo'>STUNNER VISION</li>
                    <li>
                        HOODIES
                    </li>

                    <li>
                        SWEAT SHIRTS
                    </li>
                    <li>
                        YS MERCH
                    </li>
                    <li>
                        TROUSERS
                    </li>
                    <li>
                        Tees
                    </li>
                    <li>
                        COMPLETE COLLECTION
                    </li>
                </ul>
            </nav>


        </div>
    )
}
