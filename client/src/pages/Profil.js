import React from 'react';
import Log from '../components/log';

const Profil = () => {
    return (
        <div className='profil-page'>
            <div className='log-container'>
                <Log signup={true} signin={false}/>
                <div className='img-container'>
                    <img src='./img/cadenas.png' alt='cadenas' />
                </div>
            </div>
        </div>
    );
};

export default Profil;