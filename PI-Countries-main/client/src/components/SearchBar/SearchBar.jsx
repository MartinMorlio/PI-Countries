import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { obtenerPaises, obtenerName } from '../../actions/index';
import style from './searchBar.module.css';


const SearchBar = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    
    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const onClickHandler = () => {
        dispatch(obtenerName(input))
    }

    const homeHandler = () => {
        dispatch(obtenerPaises())
    }

return (
    <div className={style.allInputs}>
        <input 
            className = {style.inputText}
            type = "text"
            placeholder = "Buscar por nombre..."
            name = "input"
            autoComplete ="off"
            onChange = {(e) => inputHandler(e)}
        />
        <div>
            <button className={style.buttonSearch} onClick={() => onClickHandler}>
                Buscar 🧐
            </button>
            <button className={style.buttonSearch} onClick={() => homeHandler()}>
                Reset ♻
            </button>
        </div>
    </div>
)
}

export default SearchBar;



