import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Passo1 from "./components/passo1";

export const ApplicationRoutes = () => (
    <>
    <Route path="/" exact component={Home} />
	<Route path="/:id" exact component={Passo1} />
    </>
);
