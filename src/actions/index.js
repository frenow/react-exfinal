import { ADD_CARRO, ADD_MODELO, ADD_VERSAO, ADD_COR, ADD_OPCIONAL } from '../actions/actionTypes';
import { REMOVE_CARRO } from '../actions/actionTypes';

export function addCarro(carro) { 
    return {    
        type: ADD_CARRO,     
        carro   
    } 
}
export function addModelo(modelo) { 
    return {    
        type: ADD_MODELO,     
        modelo   
    } 
}
export function addVersao(versao) { 
    return {    
        type: ADD_VERSAO,     
        versao   
    } 
}
export function addCor(cor) { 
    return {    
        type: ADD_COR,     
        cor   
    } 
}
export function addOpcional(opcional) { 
    return {    
        type: ADD_OPCIONAL,     
        opcional   
    } 
}
export function removeCarro(carro) { 
    return {    
        type: REMOVE_CARRO,     
        carro  
    } 
}