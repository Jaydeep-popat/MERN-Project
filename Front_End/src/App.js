import { Route, Routes, Navigate } from 'react-router-dom';
import Map from './pages/Map';
import AddFaculty from './pages/AddFaculty.jsx';
import Navbar from './pages/Navbar.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FacultyList from './pages/FacultyList.jsx';
import UpdateFaculty from './pages/UpdateFaculty.jsx';
import Viewmore from './pages/viewmore.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/facultylist" />} />
        <Route path="/facultylist" element={<FacultyList />} />
        <Route path="/map" element={<Map />} />
        <Route path="/addfaculty" element={<AddFaculty />} />
        <Route path='/viewmore/:id' element={<Viewmore />} />
        <Route path='/addfaculty' element={<AddFaculty />} />
        <Route path='/updatefaculty/:id' element={<UpdateFaculty />} />
      </Routes>
    </div>
  );
}

export default App;
