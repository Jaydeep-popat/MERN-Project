import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UpdateFaculty from "./UpdateFaculty";

const Map = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const url = "http://localhost:7000/faculty/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  
  const result = data.map((items) => {
    return (
      <div className="col-3" key={items.id}>
        <div
          className="card shadow-sm"
          style={{
            width: "18rem",
            height: "680px", 
            margin: "20px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
            src={items.FacultyImage}
            className="card-img-top"
            alt={items.FacultyName}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{items.FacultyName}</h5>
            <p className="card-text text-danger">
              <b>{items.FacultyDesignation}</b>
            </p>
            <hr className="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
            <p className="text-center">{items.FacultyEducationQualification}</p>
            <hr className="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
            <div className="row">
              <div className="col-6">Experience</div>
              <div className="col">Working Since</div>
            </div>
            <div className="row">
              <div className="col-6">
                <button type="button" className="btn btn-light">
                  {items.FacultyExperience}
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-light">
                  {items.FacultyWorkingSince}
                </button>
              </div>
            </div>

            {/* View More Button */}
            <div className="mt-4">
              <Link to={'/viewmore/' + items.id} className="btn btn-primary">
                View More
              </Link>
            </div>
          </div>

          {/* Edit and Delete Buttons */}
          <div className="card-footer text-center">
            <div className="btn-group" role="group">
              <Link to={'/updatefaculty/ '+items.id}  className="btn btn-warning btn-sm me-2">
                <i className="bi bi-pencil"></i> Edit
              </Link>
              <button
                className="btn btn-danger btn-sm"
                onClick={()=>{

                  fetch('http://localhost:7000/faculty/' + items.id, {method:"DELETE"})
                  .then((res)=>res.json())
                  .then((res)=> navigate('/Map'))
                }
              }
              >
                <i className="bi bi-trash"></i> 
                Delete
                
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="row m-4">{result}</div>
    </>
  );
};

export default Map;
