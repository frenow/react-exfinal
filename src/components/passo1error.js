import React, { Component } from "react";

export class Passo1error extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while loading this component</h1>;
    }

    return this.props.children;
  }
}