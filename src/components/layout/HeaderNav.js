import React from 'react'
import { NavLink } from 'react-router-dom'
export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>J</span>

                <h3>Juan Martin WEB</h3>
            </div>
            <nav>

                <ul>

                    <li>
                        <NavLink to="/home" className={({isActive})=> isActive ? 'active' : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum"className={({isActive})=> isActive ? 'active' : ""}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"className={({isActive})=> isActive ? 'active' : ""}>Contacto</NavLink>
                    </li>

                    <li>
                        <NavLink to="/services"className={({isActive})=> isActive ? 'active' : ""}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/briefcase"className={({isActive})=> isActive ? 'active' : ""}>Portafolios</NavLink>
                    </li>



                </ul>
            </nav>
        </header>
    )
}
