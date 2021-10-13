import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { useSelector } from 'react-redux';
import style from './countries.module.css';

const Countries = () => {
    const countries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(0);

    let firstPage = () => {
        setCurrentPage(0)
    }
    let nextPage = () => {
        if (countries.length <= currentPage + 9) {
            setCurrentPage(currentPage)
        } else setCurrentPage(currentPage + 9)
    };
    let previousPage = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
        } else setCurrentPage(currentPage - 9);
    }
    useEffect(() => {
        firstPage()
    }, [countries]);

    const filterCountries = countries.slice(currentPage, currentPage + 9);

    return (
        <div>
            <button onClick={previousPage} className={style.btn}>{'⬅'}</button>
            <button onClick={nextPage} className={style.btn}>{'➡'}</button>
            <div className={style.grid}>
                {filterCountries.map((el) => (
                    <CountryCard
                        id={el.id}
                        img={el.img}
                        name={el.name}
                        continent={el.continent} />
                ))}
            </div>
        </div>
    );
}

export default Countries;