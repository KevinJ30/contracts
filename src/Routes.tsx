import React from 'react';

import {
    Route,
    Switch
} from "react-router-dom";

import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import Candidacy from "./Pages/Candidacy/Candidacy";

export default function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route path={"/candidacy"}>
                    <Candidacy />
                </Route>

                <Route path={"*"}>
                    <Page404 />
                </Route>
            </Switch>
        </React.Fragment>
    );
}
