import React from "react";
import Passo1 from "./passo1";
import Passo2 from "./passo2";
import Passo3 from "./passo3";
import Passo4 from "./passo4";
import Passo5 from "./passo5";

export default class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:  '',
        username: '',
        password: '', 
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Detalhes: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 4? 5: currentStep + 1      
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Anterior
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <5){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Próximo
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <>
        <React.Fragment>
        <h1>Monte seu VW</h1>
        <p>Passo: {this.state.currentStep} </p> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Passo1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Passo2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Passo3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Passo4 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Passo5 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
        </React.Fragment>
        <style jsx>{`
        body {
            margin: 1em;
        }
        `}</style>           
        </>       
      );
    }
  }