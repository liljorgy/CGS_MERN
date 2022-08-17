import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from "./components/Homepage";
import Results from "./components/Results";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/results" element={<Results/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
