import logo from './logo.svg';
import './App.css';
import React from "react";
import HomePage from "./components/HomePage";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                {/** Repositories route **/}
                <Route path='/' component={HomePage}/>

                {/** Main page ( where the user can make his search ) **/}
                {/*<Route exact path='/' component={Home}/>*/}
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
