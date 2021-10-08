import { ordAZ, ordPop } from '../components/Orders/orders';

const initialState = {
    countries: [],
    countryDetail: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                countryDetail: action.payload
            }
        case 'GET_NAME':
            return {
                ...state,
                countries: action.payload
            }
        case 'ORDER_ZA':
            return {
                ...state,
                countries: state.countries.slice().sort(ordAZ).reverse()
            }
        case 'ORDER_POP':
            return {
                ...state,
                countries: state.countries.slice().sort(ordPop)
            }
        case 'ORDER_POP_REVERSE':
            return {
                ...state,
                countries: state.countries.slice().sort(ordPop).reverse()
            }
        case 'ORDER_CONTINENT':
            return {
                ...state,
                countries: state.countries.filter((e) => e.continent === action.payload)
             }
        case 'SHOW_ACTIVITY':
            return {
                ...state,
                countries: state.countries.filter((e) => {
                    return e.activities.some((e) =>{ 
                        e.name === action.payload
                    })
                })
            }
        default:
            return state;

    }
}

export default rootReducer;




