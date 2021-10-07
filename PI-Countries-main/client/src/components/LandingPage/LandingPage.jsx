import React from "react";
import { Link } from 'react-router-dom';
import style from './landing.module.css';

export function LandingPage () {
    return (
        <div>
            <h4 className={style.title}> BIENVENIDOS ➖ WELCOME </h4>
            <Link to='/home'>
                <button className={style.button}> <h3> 🛩PREPARADOS PARA VIAJAR🛩</h3> </button>
            </Link>
        </div>
    )
}

export default LandingPage;


