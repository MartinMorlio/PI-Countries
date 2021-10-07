import React, { useEffect, useState } from 'react';
import CountryCard from '/CountryCard';
import { useSelector } from 'react-redux';

const Countries = () => {
    const countries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(0);

    let firstPage = () => {
        setCurrentPage(0);
    };

    let nextPage = () => {
        if(countries.length <= currentPage + 9) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage(currentPage + 9)
        }
    }

    let previousPage = () => {
        if(currentPage < 9){
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 9)
        }
    }
    
    useEffect(() => {
        firstPage()
    }, [countries])

    const filterCountries = countries.slice(currentPage, currentPage + 9);

    return (
        <div>
            <button onClick={previousPage} className={style.btn}> {'➖'} </button>
            <button onClick={nextPage} className={style.btn}> {'➖'} </button>
            <div className={style.grid}>
                {filterCountries.map((e) => {
                    <CountryCard
                        id = {e.id}
                        img = {e.img}
                        name = {e.name}
                        continent = {e.continent} 
                        />
                })
                }
            </div>
        </div>
    )
}

export default Countries;

