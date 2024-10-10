import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Map from './pages/Map'
import reportWebVitals from './reportWebVitals';
import Viewmore from './pages/viewmore';
import AddFaculty from './pages/AddFaculty';
import UpdateFaculty from './pages/UpdateFaculty';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacultyTable from './pages/FacultyList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route path='/map' element={<Map/>} />
      <Route path ='/facultylist' element={<FacultyTable/>}/>
      <Route path ='/viewmore/:id' element={<Viewmore/>}/>
      <Route path ='/addfaculty' element={<AddFaculty/>}/>
      <Route path ='/updatefaculty/:id' element={<UpdateFaculty/>}/>
    </Route>


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
