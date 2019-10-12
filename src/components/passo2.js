import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addModelo, addVersao } from '../actions';
import { ADD_MODELO, ADD_VERSAO } from '../actions/actionTypes';

function Passo2(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([]);
  const [currentStep, setCurrentStep] = useState(props.currentStep);
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
    setModelo(props.modelo);
    setVersao(props.versao);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  useEffect(() => {
    setSelecionado(null);
  }, [props.modelo]);    

  function addVersao(ver) {    
    props.addVersao(ver);
    return { type: ADD_VERSAO, ver }
}  
function handleClick(index) {
  let activeIndex = selecionado === index ? null : index;
  setSelecionado(activeIndex);
}

    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <>
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}><h2>{mod.nome}</h2>
          <ul>
            {mod.versoes.map((ver, index) => <div className='selectItem'><a className=''>
            <li key={ver.id} className={`${selecionado === index && 'selecionado'}`}> 
            <h2>{ver.nome} Preço: {ver.preco} </h2><button onClick={() => {addVersao(ver); handleClick(index);}} className="btnItem">Escolher</button></li></a></div>)} 
          </ul>
          </li>)}
      </ul>
      </div>
      </>
    );
  }
  const mapStateToProps = store => ({
    modelo: store.modelo,
    versao: store.versao
  });
   
 const mapDispatchToProps= (dispatch)=>{    
    return{
      addModelo: (modelo)=>{dispatch(addModelo(modelo))},
      addVersao: (versao)=>{dispatch(addVersao(versao))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo2);