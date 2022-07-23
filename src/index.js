import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Todo from './components/todoreact/Todo';
import Temp from './components/weather/temp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="todo" element={<Todo />} />
      <Route path="weather" element={<Temp />} />
    </Routes>
  </BrowserRouter>
);


