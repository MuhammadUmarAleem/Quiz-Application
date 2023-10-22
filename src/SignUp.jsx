import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

function Signup() {
  const [role,setrole] = useState();
  const [error,seterror] = useState(false);
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');
    setrole(role);
    console.log(role);
    async function fetchData() {
      try {
        const response = await fetch("https://majestic-clever-grapple.glitch.me/Login");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  },[])
  const signupSchema = Yup.object({
    firstname: Yup.string().min(3).max(25).required("Please enter your name"),
    lastname: Yup.string().max(25),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onChange:()=>{
        
      },
      onSubmit: (values, action) => {
        document.getElementById('signup').submit();
        action.resetForm();
      },
    });


  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
        Challenge your mind,   <br />
            <span className="text-primary">master the quiz.</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)', display: 'flex', justifyContent: 'center' }}>
  Discover the thrill of learning and the joy of challenge with our quiz application. Engage your mind in a journey of knowledge as you answer intriguing questions from various topics. Sharpen your thinking, expand your horizons, and compete against others to see who emerges as the ultimate quiz master. With a user-friendly interface and a wide range of engaging quizzes, our app is designed to entertain, educate, and inspire. Join the quest for knowledge today!
</p>

        </MDBCol>

        <MDBCol md='4'>

          <MDBCard className='my-5 d-flex'>
            <MDBCardBody className='p-5'>
            <h4 className="display-10 fw-bold" style={{ marginBottom: "25px" }}>
            <span style={{ whiteSpace: "nowrap" }}>
                Brain <span className="text-primary">Blitz</span>
            </span>
            </h4>
            <form  action={`https://elastic-frequent-attention.glitch.me/SignUp`} method='post' id='signup'>
                  <MDBInput wrapperClass='mb-4' placeholder='Full Name' id='firstname' name='firstname' type='text'value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.firstname && touched.firstname ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.firstname}</p>
                    ) : null}


              <MDBInput wrapperClass='mb-4' placeholder='Email' id='email' name='email' type='email'value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.email && touched.email ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.email}</p>
                    ) : null}
              <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' name='password' type='password'value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.password && touched.password ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.password}</p>
                    ) : null}
              <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='confirm_password' name='confirm_password' type='password' value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.confirm_password}</p>
                    ) : null}

              <div className='d-flex justify-content-center mb-4'>
              <p>
                      Already Have an Account?{" "}
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          marginRight: "8px",
                        }}
                      >
                        Login
                      </Link>
                    </p></div>
                    {console.log(error)}
                    {{error}?(<button type="button" class="btn btn-primary btn-block mb-6" onClick={handleSubmit} onSubmit={handleSubmit}>Signup</button>):<p className="form-error" style={{color:"red", marginTop: "-25px"}}>User Already Exists</p>}

              </form>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;