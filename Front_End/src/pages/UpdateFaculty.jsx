import { useState,useEffect } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";

function UpdateFaculty(){
    const param = useParams();
     const navigate = useNavigate();
    // const apiUrl = "http://localhost:7000/faculty/";
     useEffect(()=>{
    fetch("http://localhost:7000/faculty/"+"/"+param.id,{method:"GET"})
    .then(res=>res.json()).then(res=>setData(res));
    },[]);

    const [data, setData] = useState({});
    
    return(
        <>
            
            <div class="col-4" style={{marginLeft:"25vw",marginTop:"5vw"}}>
            <div class="card p-3 border " style={{width:"50vw"}}>
                <div class="card-header border">
                    Add Faculty
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <div>
                        <div class="form-group row">
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">FacultyName : </label> 
                <div class="col-8">
                <input value={data.FacultyName} onChange={(e)=>{
                    setData({...data,FacultyName:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-4 col-form-label">Faculty Designation : </label> 
                <div class="col-8">
                <input  value={data.FacultyDesignation}
                onChange={(e)=>{
                    setData({...data,FacultyDesignation:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">Faculty EducationQualification : </label> 
                <div class="col-8">
                <input  value={data.FacultyEducationQualification} onChange={(e)=>{
                    setData({...data,FacultyEducationQualification:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">FacultyExperience
                : </label> 
                <div class="col-8">
                <input value={data.FacultyExperience} onChange={(e)=>{
                    setData({...data,FacultyExperience:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 

            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">FacultyWorkingSince

                : </label> 
                <div class="col-8">
                <input value={data.FacultyWorkingSince} onChange={(e)=>{
                    setData({...data,FacultyWorkingSince:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">FacultyImage  : </label> 
              <div class="col-8">
                <input value={data.FacultyImage} onChange={(e)=>{
                    setData({...data,FacultyImage:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>  
            <div class="form-group row">
                <div class="offset-4 col-8">
                <br/>
                <button onClick={()=>{
                    const apiUrl = "http://localhost:7000/faculty/";

                    fetch(apiUrl,{
                        method:"Patch",
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then((res)=>res.json())
                    .then((res)=>{
                        navigate('/Map');
                    });
                }} name="submit" class="btn btn-success" style={{marginLeft:"5vw"}} > Update Faculty </button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Map" className="btn btn-info">BACK</Link>
                </div>
                </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default UpdateFaculty;