import React, { useContext } from 'react';
import Log from '../components/log';
import { UidContext } from '../components/appcontext';

const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className='profil-page'>
            { uid ? (
                <h1>UPDATE PAGE</h1>
            ) : (
            <div className='log-container'>
                <Log signup={true} signin={false}/>
                <div className='img-container'>
                    <img src='./img/cadenas.png' alt='cadenas' />
                </div>
            </div>
            )}
        </div>
    );
};

export default Profil;