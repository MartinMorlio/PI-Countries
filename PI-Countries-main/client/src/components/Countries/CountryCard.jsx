import React from 'react';
import { Link } from 'react-router-dom';
import style from './countryCard.module.css';


const CountryCard = ({name, id, img, continent, activities}) => {
    return (
        <div className={style.countryContainer}>
            <Link className={style.link} to={`/countries/${id}`}>
                <h2 className={style.text}> {name} </h2>
                <div className={style.imgContainer}>
                    <img src={img} alt="No img" />
                </div>
                <h3> {continent} </h3>
                <h3> {activities} </h3>
            </Link>
        </div>
    )
}

export default CountryCard;





