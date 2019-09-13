import React from "react";

export default function Passo2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <>
      <h2>Escolha a versão</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
          />
      </div>
      </>
    );
  }