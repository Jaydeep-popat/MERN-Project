import { useEffect, useState } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";

const Viewmore = () => {
  var [data, setData] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:7000/faculty/' + params.id)
      .then((res) => res.json())
      .then((data) => setData(data));
  });

    return (
      <div className="col-3">
        <div className="mb-3">
        <button className="btn btn-light" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left"></i> Back
        </button>
      </div>
        <div
          className="card"
          style={{
            width: "18rem",
            height: "640px", 
            margin: "20px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
            src={data.FacultyImage}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">{data.FacultyName}</h5>
            <p className="card-text text-danger">
              <b>{data.FacultyDesignation}</b>
            </p>
            <hr className="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
            <p className="text-center">{data.FacultyEducationQualification}</p>
            <hr className="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
            <div className="row">
              <div className="col-6">Experience</div>
              <div className="col">Working Since</div>
            </div>
            <div className="row">
              <div className="col-6">
                <button type="button" className="btn btn-light">
                  {data.FacultyExperience}
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-light">
                  {data.FacultyWorkingSince}
                </button>
              </div>
            </div>
            <div className="card-footer text-center">
            <div className="btn-group" role="group">
              <Link to={'/updatefaculty/ '+data.id}  className="btn btn-warning btn-sm me-2">
                <i className="bi bi-pencil"></i> Edit
              </Link>
              <button
                className="btn btn-danger btn-sm"
                onClick={()=>{

                  fetch('http://localhost:7000/faculty/' + data.id, {method:"DELETE"})
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
      </div>
    );
}

export default Viewmore;
