import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from './appcontext';
import Logout from './log/logout';

const NavBar = () => {
    const uid = useContext(UidContext);

    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink to='/'>
                        <div className='logo'>
                            <img src='/' alt=''/>
                            <h3>Home</h3>
                        </div>
                    </NavLink>
                </div>
                {uid ? (
                    <ul>
                        <li className='welcome'>
                            <NavLink to='/profil'>
                                <h5>Bienvenue 'valeur dynamique'</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <NavLink to='/profil'>
                                <img src='' alt='logo connexion'/>
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;