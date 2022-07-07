import React from 'react'
import {NavLink, Link} from 'reac-router-dom';
import { ReactComponentElement as Logo } from '../picture/boocking.png';
import { ReactComponentElement as Home } from 'react';
// import OutlinedButtons from '../HomeButton';




const Header = () => {
  return (
    <nav>
        <div>
            <div>
                <div>
                    <Logo/>
                </div>
            </div>
                <NavLink to= '/'><Home/></NavLink>;
                {/* <button><OutlinedButtons/></button>; */}
        </div>

    </nav>
  )
}

export default Header