import React from 'react';
import { Link } from 'react-router-dom';
import style from './activityDetail.module.css'

//mostraría las actividades en las cards.
//si no tiene actividades, puede crearlas desde ahí

const Activity = ({ activities }) => {
    if (activities && activities.length > 0) {
        return (
            <div>
                <h2>-----------------------</h2>
                <h3>Actividades en este país:</h3>
                <table className={style.activities}>
                    {activities && activities.map((el) => (
                        <tr key={el.id}>
                            <h5>Nombre: {el.name}</h5>
                            <h5>Duración (en horas): {el.duration}</h5>
                            <h5>Dificultad: {el.difficulty}</h5>
                            <h5>Estación: {el.season}</h5>
                            <h3>-----------</h3>
                        </tr>
                    ))}
                </table>
            </div>
        )
    } else {
        return <h3>¡No hay actividades en este país!<Link className={style.link} to='/activities'><p>▶ Click aquí para agregar ◀</p></Link></h3>
    }
}

export default Activity;



