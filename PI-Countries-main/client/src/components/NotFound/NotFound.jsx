import { Link } from 'react-router-dom';
import style from './notFound.module.css';

export function NotFound() {
    return (
        <div>
            <div className={style.msg}>
                <h1>TE PERDISTE, WILSON! 😱</h1>
                <h3>Estás en el famoso error '404 not found' 😓</h3>
                <Link to='/home'>
                    <button className={style.button}>Volver a la civilización ◀</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;




