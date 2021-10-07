import React from 'react';
import { Link } from 'react-router-dom';
import style from './activityDetail.module.css';

const Activity = ({ activities }) => {
    if (activities && activities.length > 0) {
        return (
            <div>
                <h2>➖➖➖➖➖➖➖➖➖➖➖➖➖</h2>
                <h3>Actividades de este país: </h3>
                <table className={style.activities}>
                    {activities && activities.map((e) => (
                        <tr key={e.id}>
                            <h5>Nombre: {e.name} </h5>
                            <h5>Duración: {e.duration} </h5>
                            <h5>Dificultad: {e.difficulty} </h5>
                            <h5>Estación: {e.duration} </h5>
                            <h2>➖➖➖➖➖➖➖➖➖➖➖➖➖</h2>
                        </tr>
                    ))}
                </table>
            </div>
        )
    } else {
        return <h3>No se encuentran actividades en este país! <Link className={style.link} to='/activities'> <p>⏩Click para agregar actividad⏪ </p> </Link> </h3>
    }
}

export default Activity;



