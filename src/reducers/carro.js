import { ADD_MODELO, ADD_VERSAO, ADD_COR, ADD_OPCIONAL } from '../actions/actionTypes';
import { REMOVE_OPCIONAL } from '../actions/actionTypes';

const initialState = {  
    modelo: [],
    versao: [],
    cor: [],
    opcional: [],
}
export default function Carro(state = initialState, action) { 
    switch (action.type) { 
            case ADD_MODELO: 
            console.log('passou no reducers modelo add');       
            return {
                ...state, 
                modelo: [action.modelo] 
            }            
            case ADD_VERSAO: 
            console.log('passou no reducers versao add');       
            return {
                ...state, 
                versao: [action.versao] 
            }            
            case ADD_COR: 
            console.log('passou no reducers cor add');       
            return {
                ...state, 
                cor: [action.cor] 
            }            
            case ADD_OPCIONAL: 
            console.log('passou no reducers opcional add');       
            return {
                ...state, 
                opcional: [...state.opcional, action.opcional] 
            }            
            case REMOVE_OPCIONAL: 
            console.log('passou no reducers remove opcional');       
            return {
                ...state,
                opcional: state.opcional.filter(op => op !== action.opcional)
            }        
        default:            
            return state;
    } 
}