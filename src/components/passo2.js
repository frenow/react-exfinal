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
    console.log(props.modelo);
    setModelo(props.modelo);
    setVersao(props.versao);
    setCurrentStep(props.currentStep);    
  }, [props]);  

  function addVersao(ver) {    
    console.log('add versao '+ver.nome);  
    props.addVersao(ver);
    return { type: ADD_VERSAO, ver }
}  
function handleClick(index) {
  console.log('clickkkk '+index);
  let activeIndex = selecionado === index ? null : index;
  setSelecionado(activeIndex);
}

    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <>
      <h2>Escolha a versão - Passo {props.currentStep}</h2>
      <div>
      <ul>   
        {modelo.map(mod => 
          <li key={mod.id}><h2>{mod.id} - {mod.nome}</h2>
          <ul>
            {mod.versoes.map((ver, index) => 
            <li key={ver.id} className={`${selecionado === index && 'selecionado'}`}> 
            {ver.id} - {ver.nome} Preço: {ver.preco} <button onClick={() => {addVersao(ver); handleClick(index);}}>Escolher</button></li>)}
          </ul>
          </li>)}
      </ul>
      </div>
      <style jsx>{`
      ul {
          text-align: center;
          list-style:none;
      }
      .selecionado {
        background-color: #067df7;
      }
      h1 { text-align: center; }
      .row {
        max-width: 220px;
        margin: 40px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 640px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
    `}</style>      
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