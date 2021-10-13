import { Link } from 'react-router-dom';
import style from './notFound.module.css';

export function NotFound() {
    return (
        <div>
            <div className={style.msg}>
                <h1> NO ES MALO PERDERSE EN UN LUGAR ASÍ, PERO DEBES VOLVER 🥴</h1>
                <Link to='/home'>
                    <button className={style.button}>Volver al inicio ♻</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;




