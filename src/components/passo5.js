import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Totalizador from './totalizador';
import { removeOpcional } from '../actions';
import { REMOVE_OPCIONAL } from '../actions/actionTypes';

function Passo5(props) {
  const [modelo, setModelo] = useState(props.modelo);
  const [versao, setVersao] = useState([props.versao]);
  const [cor, setCor] = useState([props.cor]);
  const [opcional, setOpcional] = useState([props.opcional]);

  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    setModelo(props.modelo);
    setVersao(props.versao);
    setCor(props.cor);
    setOpcional(props.opcional);

    setCurrentStep(props.currentStep);    
  }, [props.opcional]);  

  function removeOpcional(op) {
    console.log('remove opcional '+op.nome);
    props.removeOpcional(op);
    return { type: REMOVE_OPCIONAL, op }
    }  

  function buyClick(){  
    alert(`Parabens, você acaba de comprar um Vw: \n 
           Modelo: ${modelo[0].nome} \n 
           Versão: ${versao[0].nome} \n
           Cor: ${cor[0].nome} \n
           Opcionais: ${opcional[0].nome} \n
           `);
  }

    if (props.currentStep !== 5) {
      return null
    } 
    return(
      <>
      <div>
      <ul>   
        {modelo.map(mod => <div className='row'><a className='card'>
          <li key={mod.id}><h2>Modelo: {mod.nome}</h2>
          <img src={require(`../assets/images/${mod.imagem}`)} alt="Carro" />
          <ul>
            {versao.map(ver => 
            <li key={ver.id}><h2>Versão: {ver.nome}</h2>
            <ul>
              {cor.map(cor => 
                <li key={cor.id}><h2>Cor: {cor.nome}</h2>
                <ul>
                  {opcional.map(op => <div className='row'><a className='card'>
                    <li key={op.id}><h2>Opcional: {op.nome}</h2><button onClick={() => removeOpcional(op)}>Remover Opcional</button>
                    </li></a></div>)} 
                </ul>
                </li>
                )}
            </ul>
            </li>)}
          </ul>
          </li></a></div>)} 
      </ul>
      </div>
      <div className='centralizado'>
      <h2><Totalizador /></h2>
      <button onClick={() => buyClick()}>Comprar</button>
      <br></br>  
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
      .centralizado { 
        text-align: center; 
      }      
    `}</style>
      </>
    );
  }
  const mapStateToProps = store => ({
    modelo: store.modelo,
    versao: store.versao,
    cor: store.cor,
    opcional: store.opcional
  });
   
 const mapDispatchToProps= (dispatch)=>{    
    return{
      removeOpcional: (op)=>{dispatch(removeOpcional(op))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passo5);