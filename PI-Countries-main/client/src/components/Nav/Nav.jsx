import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import style from './nav.module.css';
import { connect, useDispatch } from 'react-redux';
import {
    obtenerPaises,
    ordenAZ,
    ordenContinente,
    ordenZA,
    crearActividad,
    ordenPoblacion,
    ordenPoblacionViceversa,
    mostrarActividad
} from '../../actions/index';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = ( { 
    obtenerPaises,
    ordenAZ,
    ordenZA,
    ordenContinente,
    ordenPoblacion,
    ordenPoblacionViceversa,
    crearActividad,
    mostrarActividad
}) => {
    const [order, setOrder] = useState("");
    const [continent, setContinent] = useState("");
    const [activity, setActivity] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(countries){
            obtenerPaises();
            if(continent !== "all") {
                setTimeout(() => {
                    dispatch(ordenContinente(continent))
                }, 300);
            }
        }
    }, [continent, dispatch])

    useEffect(() => {
        if(order === "all") obtenerPaises();
        else if(order === "a-z") ordenAZ();
        else if(order === "z-a") ordenZA();
        else if(order === "⏫ population") ordenPoblacion();
        else if(order === "⏬ population") ordenPoblacionViceversa();
    }, [order]);

    const activityHandler = (e) => {
        e.preventDefault();
        setActivity(e.target.value)
    };

    const searchActHandler = (e) => {
        e.preventDefault();
        obtenerPaises();
        setTimeout(() => {
            dispatch(mostrarActividad(activity))
        }, 300);

        console.log(activity);
        setActivity("");
    }

return(
    <div className={style.navBartContainer}>
        <Link to='/'>
            <button className={style.butn}>
                Inicio ✔
            </button>
        </Link>
        <div className={style.sortContainer}>
            <p> Ordenar por: </p>
            <select onChange={(e) => setOrder(e.target.value)}>
                <option value="all"> ➖ </option>
                <option value="a-z"> A-Z </option>
                <option value="z-a"> Z-A </option>
                <option value="⏫ population"> ⏫ Población </option>
                <option value="⏬ population"> ⏬ Población </option>
            </select>
            <SearchBar />
        </div>
        <div className={style.filtersContainer}>
            <p> Filtrar por continente: </p>
            <div className={style.selectContainer}>
                <select onChange={(e) => {
                    console.log(e.target.value);
                    setContinent(e.target.value);
                }}>
                    <option value="all"> Todos </option>
                    <option value="America"> América </option>
                    <option value="Europa"> Europa </option>
                    <option value="Africa"> África </option>
                    <option value="Oceania"> Oceanía </option>
                    <option value="Asia"> Asia </option>
                </select>
            </div>
        </div>
        <div className={style.inputActivityContainer}>
            <label> Actividad </label>
            <form>
                <input
                    className = {style.inputText}
                    placeholder = "Busca actividad..."
                    type = "text"
                    autoComplete = "off"
                    value = {activity}
                    onChange = {activityHandler}
                    />
                <button className={style.buttonSearch} onClick={searchActHandler}>
                    Buscar 🧐
                </button>
            </form>
        </div>
        <button className={style.butn2}>
            <Link to='/activities' className={style.link2}>
                CREA UNA ACTIVIDAD
            </Link>
        </button>
    </div>
)
}

const mapDispatchToProps = (dispatch) => {
    return {
        ordenAZ: () => dispatch(ordenAZ()),
        ordenZA: () => dispatch(ordenZA()),
        obtenerPaises: () => dispatch(obtenerPaises()),
        ordenContinente: (continent) => dispatch(ordenContinente(continent)),
        crearActividad: (payload) => dispatch(crearActividad(payload)),
        ordenPoblacion: () => dispatch(ordenPoblacion()),
        ordenPoblacionViceversa: () => dispatch(ordenPoblacionViceversa()),
    };
};

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);






