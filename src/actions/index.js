import { ADD_CARRO } from '../actions/actionTypes';
import { REMOVE_CARRO } from '../actions/actionTypes';

export function addCarro(carro) { 
    return {    
        type: ADD_CARRO,     
        carro   
    } 
}

export function removeCarro(carro) { 
    return {    
        type: REMOVE_CARRO,     
        carro  
    } 
}