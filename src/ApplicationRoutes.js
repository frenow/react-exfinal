import React, {Suspense, lazy} from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
const Passo1 = lazy(() => import("./components/passo1"));

export const ApplicationRoutes = () => (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Route path="/" exact component={Home} />
	<Route path="/:id" exact component={Passo1} />
    </Suspense>
    </>
);
