import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo } from '../actions';
import { ADD_MODELO } from '../actions/actionTypes';


function MapaPassos(props){
    return(
        <div>
           <ol class="progress" data-steps="5">
                <li class="done">
                <span class="name">Escolha o modelo</span>
                <span class="step"><span>1</span></span>
                </li>
                <li class="done">
                <span class="name">Escolha a versão</span>
                <span class="step"><span>2</span></span>
                </li>
                <li class="done">
                <span class="name">Escolha a cor</span>
                <span class="step"><span>3</span></span>
                </li>
                <li class='active'>
                <span class="name">Escolha os Opcionais </span>
                <span class="step"><span>4</span></span>
                </li>       
                <li>
                <span class="name">Resumo</span>
                <span class="step"><span>5</span></span>
                </li>
            </ol>
        </div>
    )
        
    
}


export default MapaPassos;