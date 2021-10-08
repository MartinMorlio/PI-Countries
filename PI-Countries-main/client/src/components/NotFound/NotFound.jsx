import { Link } from 'react-router-dom';
import style from './notFound.module.css';
import img from '../../images/notFound.png';

export function NotFound() {
    return (
        <div>
            <div className={style.msg}>
                <h1> YOU LOST KING 🥴 </h1>
                <h3> YOUR HEAD UP, YOUR CROWN FALLS OFF, KING 👑 </h3>
                <Link to='/home'>
                    <button className={style.button}>
                        Volver a viajar 🛩
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;




