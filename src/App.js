import React from 'react';
import { Routes, Route } from "react-router-dom";
// import TelaEnvio from './TelaEnvio/TelaEnvio';
import Login from './Login/Login'
import HomePage from './HomePage/HomePage';
// import CompararLados from './CompararLados/CompararLados';
import DadosRelatorioProvider from './context/DadosRelatorioContext';
import HomePageProvider from './context/HomePageContext';

function App() {
    return (
        <HomePageProvider>
            <DadosRelatorioProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    {/* <Route path="TelaEnvio" element={<TelaEnvio />} /> */}
                    <Route path="HomePage" element={<HomePage />} />
                    {/* <Route path="CompararLados" element={<CompararLados />} /> */}
                </Routes>
            </DadosRelatorioProvider>
        </HomePageProvider>
    );
}

export default App;