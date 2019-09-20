import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

function MapaPassos(props){
    const [currentStep, setCurrentStep] = useState(props.currentStep);

    useEffect(() => {
        setCurrentStep(props.currentStep);    
      }, [props.currentStep]);  

    return(
        <div>
           <ol class="progress" data-steps="5">
                <li className={`${currentStep === 1 ? 'active' : currentStep > 1 ? 'done' : '' }`}>
                <span class="name">Escolha o modelo</span>
                <span class="step"><span>1</span></span>
                </li>
                <li className={`${currentStep === 2 ? 'active' : currentStep > 2 ? 'done' : '' }`}>
                <span class="name">Escolha a versão</span>
                <span class="step"><span>2</span></span>
                </li>
                <li className={`${currentStep === 3 ? 'active' : currentStep > 3 ? 'done' : '' }`}>
                <span class="name">Escolha a cor</span>
                <span class="step"><span>3</span></span>
                </li>
                <li className={`${currentStep === 4 ? 'active' : currentStep > 4 ? 'done' : '' }`}>
                <span class="name">Escolha os Opcionais </span>
                <span class="step"><span>4</span></span>
                </li>       
                <li className={`${currentStep === 5 ? 'active' : currentStep > 5 ? 'done' : '' }`}>
                <span class="name">Resumo</span>
                <span class="step"><span>5</span></span>
                </li>
            </ol>
        </div>
    )
        
    
}

const mapStateToProps = store => ({
    modelo: store.modelo,
    versao: store.versao,
    cor: store.cor,
    opcional: store.opcional
  });

export default connect(mapStateToProps)(MapaPassos);