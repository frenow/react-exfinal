import React from "react";

export default function Passo3(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <>
      <h2>Escolha os opcionais</h2>
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
      </div>
      </React.Fragment>
      </>    
    );
  }