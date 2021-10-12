import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetail } from '../../actions';
import Activity from './ActivityDetail';
import style from "./countryId.module.css";

const CountryId = () => {
    const countryDetail = useSelector((state) => state.countryDetail);
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        dispatch(getDetail(id));
    }, [id]);

    return (
        <div className={style.all}>
            <button className={style.butn}>
                <Link className={style.link} to="/home" >Volver atrás ◀</Link></button>
            <div className={style.countryContainer}>
                <h1>{countryDetail.name}</h1>
                <h3>{countryDetail.id}</h3>
                <div className={style.imgContainer}>
                    <img src={countryDetail.img} alt="No img" />
                </div>
                <h4>Continente: {countryDetail.continent}</h4>
                <h5>Capital: {countryDetail.capital}</h5>
                <h5>Área: {countryDetail.area} Km2</h5>
                <h5>Población: {countryDetail.population} habitantes </h5>
                <div className={style.activity}>
                    <Activity countryName={countryDetail.name} activities={countryDetail.activities} /></div>
            </div>
        </div>
    );
};
export default CountryId;