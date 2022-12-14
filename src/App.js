import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";

const App = () => {
    return(
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path="movie/:id" element={<h1> Movie detail page</h1>}></Route>
                    <Route path="movies/:type" element={<h1> Movies list page</h1>}></Route>
                    <Route path="/*" element={<h1> Error page </h1>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;