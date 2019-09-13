import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";

export const ApplicationRoutes = () => (
    <>
    <Route path="/" exact component={Home} />
    </>
);
