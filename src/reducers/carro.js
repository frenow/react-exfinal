import { ADD_CARRO } from '../actions/actionTypes';
import { REMOVE_CARRO } from '../actions/actionTypes';

const initialState = {  
    carro: [],
}
export default function Carro(state = initialState, action) { 
    switch (action.type) { 
        case ADD_CARRO: 
            console.log('passou no reducers add');       
            return {
                ...state, 
                carro: [...state.carro, action.carro] 
            }            
            case REMOVE_CARRO: 
            console.log('passou no reducers remove');       
            return {
                ...state,
                carro: state.carro.filter(car => car !== action.car)
            }        
        default:            
            return state;
    } 
}