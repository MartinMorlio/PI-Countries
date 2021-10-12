import React, { useEffect, useState } from 'react';
import { createActivity, getName } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { SmallCountry } from './SmallCountry';
import style from './activityForm.module.css';
import { Link } from 'react-router-dom';

const ActivityForm = () => {
  const countries = useSelector((state) => state.countries);
  const [inputName, setInputName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  let nextPage = () => {
    if (countries.length <= currentPage + 9) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 9);
  };
  let prevPage = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 9);
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [countries]);

  const filtered = countries.slice(currentPage, currentPage + 9);

  const [dataForm, setDataForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryID: [],
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

  const submitInputName = (el) => {
    el.preventDefault();
    setInputName(el.target.value);
  };

  const setDataHandler = (el) => {
    el.preventDefault();

    setDataForm({
      ...dataForm,
      [el.target.name]: el.target.value,
    });
  };

  const setIdHandler = (el) => {
    el.preventDefault();

    setDataForm({
      ...dataForm,
      [el.target.name]: dataForm[el.target.name].concat(el.target.value),
    });

    alert("País agregado! 😊");
  };

  useEffect(() => {
    dispatch(getName(inputName));
  }, [inputName]);

  const submitForm = (el) => {
    el.preventDefault();
    var form = true;

    if (dataForm["name"].length < 2) {
      form = false;
    } else if (!dataForm["countryID"].length >= 1) {
      form = false;
    }

    if (form) {
      dispatch(createActivity(dataForm))
        .then(() => stateReset())
        .then(() => alert("Actividad agregada 😎"));
    } else {
      return alert("Campos incompletos! Por favor, completar todos 😊");
    }
  };

  return (
    <div>
      <div className={style.navBarContainer}>
        <button className={style.butn}>
          <Link className={style.link} to="/home" >Volver atrás ◀</Link></button>
        <form className={style.navBarContainer} onSubmit={(e) => submitForm(e)}>
          <div>
            <input
              className={style.inputName}
              type="text"
              autocomplete="off"
              placeholder="Nombre de tu actividad!"
              name="name"
              value={dataForm.name}
              onChange={setDataHandler}
            />
          </div>

          <div className={style.difficulty}>
            <label>Dificultad</label>
            <select
              name="difficulty"
              value={dataForm.difficulty}
              id="difficulty"
              onChange={setDataHandler}
            >
              <option value={''}></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <div className={style.duration}>
            <label>Duración (en horas)</label>
            <select
              name="duration"
              value={dataForm.duration}
              id="duration"
              onChange={setDataHandler}
            >
              <option value={''}></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
            </select>
          </div>

          <div className={style.season}>
            <label>En qué estación se realiza?</label>
            <select
              name="season"
              value={dataForm.season}
              id="season"
              onChange={setDataHandler}
            >
              <option value={''}></option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
          </div>

          <div className={style.countries}>
            <label>En qué país se agregará la actividad?</label>
            <input
              className={style.countries1}
              type="text"
              autocomplete="off"
              placeholder="Encuentra tu país!"
              onChange={submitInputName}
            />
          </div>
          <div>
            <input className={style.btn1} type="submit" value="Agregar ➕" />
          </div>
        </form>
      </div>

      <button onClick={prevPage} className={style.butn}>
        {" "}
        {"⬅"}{" "}
      </button>
      <button onClick={nextPage} className={style.butn}>
        {" "}
        {"➡"}{" "}
      </button>

      <div className={style.order}>
        {filtered.length < 30
          ? filtered.map((el) => (
            <div className={style.countryCont}>
              <div>
                <SmallCountry key={el.id} name={el.name} img={el.img} />
                <button
                  className={style.btn}
                  onClick={setIdHandler}
                  value={el.id}
                  name="countryID"
                >
                  AGREGAR
                </button>
              </div>
            </div>
          ))
          : console.log("Error!")}
      </div>
    </div>
  );
};

export default ActivityForm;