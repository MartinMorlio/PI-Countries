import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';
import { connect, useDispatch } from 'react-redux';
import {
    getCountries,
    orderAZ,
    orderContinent,
    orderZA,
    createActivity,
    orderPop,
    orderPopReverse,
    showActivity,
} from '../../actions/';
import SearchBar from '../SearchBar/SearchBar';
const NavBar = ({
    orderAZ,
    getCountries,
    orderZA,
    orderContinent,
    createActivity,
    orderPop,
    orderPopReverse,
}) => {
    const [order, setOrder] = useState("");
    const [continent, setContinent] = useState("");
    const [activity, setActivity] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {
        if (continent) {
            getCountries();
            if (continent !== "all") {
                setTimeout(() => {
                    dispatch(orderContinent(continent));
                }, 200);
            }
        }
    }, [continent, dispatch]);

    useEffect(() => {
        if (order === "all") getCountries();
        else if (order === "a-z") orderAZ();
        else if (order === "z-a") orderZA();
        else if (order === "↑ population") orderPop();
        else if (order === "↓ population") orderPopReverse();
    }, [order]);

    const activityHandler = (el) => {
        el.preventDefault();
        setActivity(el.target.value);
    };

    const searchActHandler = (el) => {
        el.preventDefault();
        getCountries();
        setTimeout(() => {
            dispatch(showActivity(activity));
        }, 200);

        console.log(activity);
        setActivity("");
    };

    return (
        <div className={style.navBarContainer}>
            <Link to="/" >
                <button className={style.butn}>
                    Inicio
                    ◀
                </button>
            </Link>
            <div className={style.sortContainer}>
                <p>Ordenar por:</p>
                <select onChange={(event) => setOrder(event.target.value)}>
                    <option value="all">-</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="↑ population">↑ Población</option>
                    <option value="↓ population">↓ Población</option>
                </select>
                <SearchBar />
            </div>
            <div className={style.filtersContainer}>
                <p>Filtrar por Continente</p>
                <div className={style.selectContainer}>
                    <select onChange={(event) => {
                        console.log(event.target.value);
                        setContinent(event.target.value)
                    }
                    }>

                        <option value="all">Todos</option>
                        <option value="Americas">Americas</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Asia">Asia</option>
                    </select>
                </div>
            </div>
            <div className={style.inputActivityContainer}>
                <label>Actividad</label>
                <form>
                    <input
                        className={style.inputText}
                        placeholder="Busca actividad..."
                        type="text"
                        autocomplete="off"
                        value={activity}
                        onChange={activityHandler}
                    />
                    <button className={style.buttonSearch} onClick={searchActHandler}>
                        Buscar 🔎
                    </button>
                </form>
            </div>
            <button className={style.butn2}>
                <Link to="/activities" className={style.link2}>CREA UNA ACTIVIDAD TURÍSTICA</Link>
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        orderAZ: () => dispatch(orderAZ()),
        getCountries: () => dispatch(getCountries()),
        orderContinent: (continent) => dispatch(orderContinent(continent)),
        orderZA: () => dispatch(orderZA()),
        createActivity: (payload) => dispatch(createActivity(payload)),
        orderPop: () => dispatch(orderPop()),
        orderPopReverse: () => dispatch(orderPopReverse()),
    };
};
const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);






