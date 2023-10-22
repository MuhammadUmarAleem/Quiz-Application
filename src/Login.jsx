import React, { useEffect, useState } from 'react';
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

function Login() {
  const [users,setUsers] = useState([]);
  const [error,setError] = useState(false);
    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await fetch("https://elastic-frequent-attention.glitch.me/GetUsers");
          const data = await response.json();
          setUsers(data);
          console.log(data)
          console.log(users)
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    },[])

    const loginSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email"),
        password: Yup.string().min(6).required("Please enter your password"),
      });
    const initialValues = {
        email: "",
        password: "",
      };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
          action.resetForm();
      },
    });

    const checklogin = (event)=>{
      event.preventDefault();
      var isfound = false;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      for (let i = 0; i < users.length; i++) {
        if (users[i].Email === email && users[i].Password === password ) {
          isfound = true;
          localStorage.setItem("UserId", users[i].Id);
          console.log(users[i]);
          window.location.href = `/Home?UserId=${users[i].Id}`;
        }
      }
      if (isfound === false) {
        setError(true);
      }
    }

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

          <MDBCard className='my-5 '>
            <MDBCardBody className='p-5'>
            <h4 className="display-10 fw-bold" style={{ marginBottom: "25px" }}>
            <span style={{ whiteSpace: "nowrap" }}>
                Brain <span className="text-primary">Blitz</span>
            </span>
            </h4>
              <MDBRow></MDBRow>
              <form onClick={handleSubmit} >
              <MDBInput  wrapperClass='mb-4' placeholder='Email' id='email' name='email' type='email' value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {/* {errors.email && touched.email ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.email}</p>
                    ) : null} */}
              <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' name='password' type='password' value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {/* {errors.password && touched.password ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.password}</p>
                    ) : null} */}

              <div className='d-flex justify-content-center mb-4'>
              <p>
                      Don't Have Account?{" "}
                      <Link
                        to="/Signup"
                        style={{
                          textDecoration: "none",
                          marginRight: "8px",
                        }}
                      >
                        Signup
                      </Link>
                    </p></div>
              {error? (
                <p className="form-error" style={{color:"red", marginTop: "-25px"}}>Incorrect Username or Password</p>
              ) :<p></p>}
              <button type="button" class="btn btn-primary btn-block mb-4" onClick={checklogin}>Login</button>
              {/* <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn> */}
              {/* <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>Login</MDBBtn> */}
              </form>
              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}



export default Login;