import axios from 'axios';

export function obtenerPaises () {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/countries`);
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: res.data
        })
    }
}

export function obtenerDetalles(id){
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: 'GET_DETAIL',
            payload: res.data
        })
    }
}

export function obtenerName(name){
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: 'GET_NAME',
                payload: res.data
            })
        } catch (err) {
            console.log(err);
        };
    }
}

export function ordenAZ () {
    return {
        type: 'ORDEN_AZ'
    }
}

export function ordenZA (){
    return {
        type: 'ORDEN_ZA'
    }
}

export function ordenPoblacion(){
    return {
        type: 'ORDEN_POBLACION'
    }
}

export function ordenPoblacionViceversa () {
    return {
        type: 'ORDEN_POBLACION_VICEVERSA'
    }
}

export function ordenContinente(payload){
    return { 
        type: 'ORDEN_CONTINENTE',
        payload
    }
}

export function mostrarActividad(payload){ 
        return {
            type: 'SHOW_ACTIVITY',
            payload
        };
    }

export function crearActividad(actividad){
    return async function(){
        try {
            const nuevaActividad = await axios.post('http://localhost:3001/activity/', actividad)
            console.log('Aguarde, se está creando la actividad: ', nuevaActividad);
        } catch (err) {
            console.log('Hubo un error, este es: ', err)
        }
    }
}





