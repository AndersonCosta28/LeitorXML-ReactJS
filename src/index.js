import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Relatorio from './Relatorio'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Loading from './Loading';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path='/loading' element={<Loading />}/>
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
function Home() {
  console.log(useParams())
  return (<h2>Home</h2>);
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
