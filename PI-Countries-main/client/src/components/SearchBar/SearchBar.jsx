import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries, getName } from '../../actions';
import style from './searchBar.module.css';

const SearchBar = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (el) => {
        setInput(el.target.value);
    };
    const onClickHandler = () => {
        dispatch(getName(input));
    };
    const homeHandler = () => {
        dispatch(getCountries());
    };

    return (
        <div className={style.allInputs}>
            <input
                className={style.inputText}
                type="text"
                placeholder="Buscar por nombre..."
                name="input"
                autoComplete="off"
                onChange={(el) => inputHandler(el)}
            />
            <div>
                <button className={style.buttonSearch} onClick={() => onClickHandler()}>
                    Buscar 🔎
                </button>
                <button className={style.buttonSearch} onClick={() => homeHandler()}>
                    Reset 🔁
                </button>
            </div>
        </div>
    )
}

export default SearchBar;



