import React from 'react';
import Home from "./components/home/Home";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate replace to="/home/content"/>}/>
                <Route path={'home'} element={<Home/>}/>
                <Route path={'home/:page'} element={<Home/>}/>
                <Route path={'home/checks'} element={<Home/>}/>
                <Route path={'home/checks/:page'} element={<Home/>}/>
            </Routes>

        </div>
    );
}

export default App;
