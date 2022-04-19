import React from 'react';
import Home from "./components/home/Home";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {

    return (
        // <div className="App">
        //     <Routes>
        //         <Route path="/" element={<Navigate replace to="/home/content"/>}/>
        //         <Route path={'home'} element={<Home/>}/>
        //         <Route path={'home/:page'} element={<Home/>}/>
        //         <Route path={'home/checks'} element={<Navigate replace to="/home/head1/check1"/>}/>
        //         {/*<Route path={'home/checks/:page'} element={<Home/>}/>*/}
        //         {/*<Route path={'home/checks/:header/:page'} element={<Home/>}/>*/}
        //         <Route path={'home/checks/:header/:check'} element={<Home/>}/>
        //     </Routes>
        // </div>

    <div className="App">
        <Routes>
            {/*<Route path="/" element={<Navigate replace to="/home/content"/>}/>*/}
            <Route path="/" element={<Navigate replace to="/home/"/>}/>
            <Route path={'home'} element={<Home/>}/>
            <Route path={'home/:page'} element={<Home/>}/>
            {/*<Route path={'home/checks'} element={<Navigate replace to="/home/checks/head1/check1"/>}/>*/}
            <Route path={'home/checks/:header/:check'} element={<Home/>}/>
        </Routes>
    </div>





    );
}

export default App;
