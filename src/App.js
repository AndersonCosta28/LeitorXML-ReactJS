import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Login/Login'
import HomePage from './HomePage/HomePage';
import DadosRelatorioProvider from './context/DadosRelatorioContext';

function App() {
    return (
        <DadosRelatorioProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="HomePage" element={<HomePage />} />
            </Routes>
        </DadosRelatorioProvider>
    );
}

export default App;