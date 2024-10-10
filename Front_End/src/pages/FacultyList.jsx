// FacultyTable.js
import {React,useEffect,useState} from "react";
import { Link} from "react-router-dom";


const FacultyTable = () => {
const [data, setData] = useState([]);

  const url = "http://localhost:7000/faculty/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Faculty List</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Faculty Designation</th>
            <th>Faculty Education Qualification</th>
            <th>Faculty Experience</th>
            <th>Faculty Working Since</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{items.FacultyName}</td>
              <td>{items.FacultyDesignation}</td>
              <td>{items.FacultyEducationQualification}</td>
              <td>{items.FacultyExperience}</td>
              <td>{items.FacultyWorkingSince}</td>
              <td>
              <Link to={'/viewmore/' + items.id} className="btn btn-primary">
                View More
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyTable;
