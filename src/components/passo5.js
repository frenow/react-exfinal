import React from "react";

export default function Passo3(props) {
    if (props.currentStep !== 5) {
      return null
    } 
    return(
      <>
      <h2>Resumo</h2>
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
      <button className="btn btn-success btn-block">Comprar</button>
      <br></br>
      </React.Fragment>
      </>    
    );
  }