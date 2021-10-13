import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';

export function LandingPage() {
    return (
        <div>
            <h1 className={style.title}> BIENVENIDO - WELCOME </h1>
            <Link to='/home'>
                <button className={style.button}><h3>🛫 LISTO PARA VIAJAR 🛫</h3></button>
            </Link>
        </div>
    )
}

export default LandingPage;


