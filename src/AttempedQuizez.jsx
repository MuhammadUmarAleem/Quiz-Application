import Navbar from './Navbar'
import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

const Attemptquiz = () => {

  const [users,setUsers] = useState([]);
    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await fetch(`https://elastic-frequent-attention.glitch.me/GetUserQuizez?Id=${localStorage.getItem("UserId")}`);
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

  return (
    <div>
       <Navbar/>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>    
        <div class="wrapper">
                <svg>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Quizez!
                    </text>
                </svg>
        </div>
        {users.map((prof,index)=>(
        <MDBContainer fluid className='p-4'>
        <Card>
      <Card.Header as="h5">{prof.DateTime.substring(0, 10)}</Card.Header>
      <Card.Body>
        <Card.Title>{prof.title}</Card.Title>
        <Card.Text>
          {prof.description}
        </Card.Text>
        <a className='text-white' href={`/Progress?Id=${prof.Id}`}>
          <Button variant="primary">Check Progress</Button>
        </a>
        <p>{prof.Id}</p>
      </Card.Body>
    </Card>
    </MDBContainer>
    ))}
   
        <Footer/>
    </div>
  )
}

export default Attemptquiz
