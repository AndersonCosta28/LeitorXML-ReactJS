import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Relatorio from './Relatorio'
import Xls from './RelatorioAux/xls'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Loading from './Loading';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/xls' element={<Xls />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);