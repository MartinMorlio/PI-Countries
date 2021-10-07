import React, {useEffect, useState} from 'react';
import {createActivity, getName} from '../../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import {SmallCountry} from './SmallCountry';
import style from './activityForm.module.css';
import {Link} from 'react-router-dom';


const ActivityForm = () => {
    const countries = useSelector((state) => state.countries);
    const [inputName, setInputName] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();

    let nextPage = () => {
        if(countries.length <= currentPage + 9) {
            setCurrentPage(currentPage);
        } else {
            setCurrentPage(currentPage + 9);
        }
    };

    let prevPage = () => {
        if(currentPage < 9){
            setCurrentPage(0);
        }else {
            setCurrentPage(currentPage - 9);
        }
    };

    useEffect(()=> {
        setCurrentPage(0);
    }, [countries] );

    const filtered = countries.slice(currentPage, currentPage + 9);

    const [dataForm, setDataForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryID: []
    });

    const stateReset = () => {
        setDataForm({
          name: "",
          difficulty: "",
          duration: "",
          season: "",
          countryID: [],
        });

        setInputName("");
};

const submitInputName = (e) => {
    e.preventDefault();
    setInputName(el.target.value);
  };

const setDataHandler = (e) => {
    e.preventDefault();

    setDataForm({
      ...dataForm,
      [el.target.name]: el.target.value,
    });
  };

const setIdHandler = (e) => {
    e.preventDefault();

    setDataForm({
        ...dataForm,
        [e.target.name] : dataForm[e.target.name].concat(e.target.value)
    });
    alert("Add countries successfully! 😁");
};

useEffect(() => {
    dispatch(getName(inputName))
}, [inputName]);

const submitForm = (e) => {
    e.preventDefault();
    let form = true;

    if(dataForm["name"].length < 2) {
        form = false;
    } else if (!dataForm["countryID"].length >= 1) {
        form = false;
    }
    if(form) {
        dispatch(createActivity(dataForm))
        .then(() => stateReset())
        .then(() => alert("Activity created successfully 😁"))
    } else {
        return alert("Some things were not filed. Please complete everything 😜");
    };
}

return (
    <div>
        <div className={style.navBarContainer}>
            <button className={style.butn}>
                <Link className={style.link} to="/home"> ⏪ Volver </Link>
            </button>
            <form className={style.navBarContainer} onSubmit={(e) => submitForm(e)}>
            <div>
                <input 
                className = {style.inputName}
                type = "text"
                autoComplete = "off"
                placeholder = "Name of activity!"
                name = "name"
                value = {dataForm.name}
                onChange = {setDataHandler}
                />
            </div>

            <div>
                <label>Dificultad</label>
                <select
                    name = "difficulty"
                    value = {dataForm.difficulty}
                    id = "difficulty"
                    onChange = {setDataHandler}
                >
                    <option value={''}></option>
                    <option value={1}> 1 </option>
                    <option value={2}> 2 </option>
                    <option value={3}> 3 </option>
                    <option value={4}> 4 </option>
                    <option value={5}> 5 </option>
                </select>
            </div>

            <div className={style.duration}>
                <label>Duración</label>
                <select
                    name = "duration"
                    value = {dataForm.duration}
                    id = "duration"
                    onChange = {setDataHandler}
                >
                    <option value={''}></option>
                    <option value={1}> 1 </option>
                    <option value={2}> 2 </option>
                    <option value={3}> 3 </option>
                    <option value={4}> 4 </option>
                    <option value={5}> 5 </option>
                    <option value={6}> 6 </option>
                    <option value={7}> 7 </option>
                    <option value={8}> 8 </option>
                    <option value={9}> 9 </option>
                    <option value={10}> 10 </option>
                    <option value={11}> 11 </option>
                    <option value={12}> 12 </option>
                    <option value={13}> 13 </option>
                    <option value={14}> 14 </option>
                    <option value={15}> 15 </option>
                    <option value={16}> 16 </option>
                    <option value={17}> 17 </option>
                    <option value={18}> 18 </option>
                    <option value={19}> 19 </option>
                    <option value={20}> 20 </option>
                </select>
            </div>

            <div className={style.season}>
                <label>En qué estación se realiza?</label>
                <select
                    name = "season"
                    value = {dataForm.season}
                    id = "season"
                    onChange = {setDataHandler}
                >
                    <option value={''}></option>
                    <option value='Verano'> Verano </option>
                    <option value='Otoño'> Otoño </option>
                    <option value='Invierno'> Invierno </option>
                    <option value='Primavera'> Primavera </option>
                </select>
            </div>

            <div className={style.countries}>
                <label> En qué país se agregará la actividad? </label>
                < input
                    className = {style.countries}
                    type = "text"
                    autoComplete = "off"
                    placeholder = "Encuentra el país que buscas!"
                    onChange = {submitInputName}
                />
            </div>

            <div>
                <input className={style.btn1} type="submit" value="Add💨" />
            </div>
            </form>
        </div>

        <button onClick={nextPage} className={butn}>
            {" "}
            {"➖"} {" "}
        </button>

        <div className={style.order}>
            {filtered.length < 30
                ? filtered.map((e) => (
                    <div className={style.countryCont}>
                        <div>
                            <SmallCountry key={e.id} name={e.name} img={e.img} />
                            <button 
                                className={style.btn}
                                onClick={setIdHandler}
                                value={e.id}
                                name="countrID"
                            >
                                AGREGAR
                            </button>
                        </div>
                    </div>
                ))
            : console.log("Tienes un error!😢")}
        </div>

    </div>
)

};

export default ActivityForm;
 








