import React from "react";

export default function Passo1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
        <>
        <h2>Escolha o modelo</h2> 
        <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          />
      </div>
      </>
    );
  }