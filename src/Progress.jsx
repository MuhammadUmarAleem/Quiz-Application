import './Home.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
  import { MDBRadio } from 'mdb-react-ui-kit';
  import Navbar from './Navbar'
  import React, { useEffect, useState } from 'react';
  import Footer from './Footer'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var correct = 0;

const Progress = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const [users,setUsers] = useState([]);
    const [Id,setId] = useState(0);

    useEffect(()=>{
        async function fetchData() {
          try {
            const response = await fetch(`https://elastic-frequent-attention.glitch.me/GetUserQuiz?Id=${urlParams.get('Id')}`);
            const data = await response.json();
            setUsers(data);
            setId(data[0].QuizId);
            console.log(data)
            console.log(users)
            for (let i = 0; i <= data.length; i++) {
              if(data[i].correctoption === data[i].UserAns)
              {
                correct = correct+1;
              }
              console.log(correct);
            }
            
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
                        Progress!
                    </text>
                </svg>
        </div>

        

        <MDBContainer fluid className='d-flex justify-content-center align-items-center'>
        <MDBCol md='8'>



            <MDBCard className='my-30'>
            <ProgressBar>
          <ProgressBar now={correct*10} animated striped variant="success" label={`Correct(${correct*10}%)`} key={1} />
          <ProgressBar now={100-(correct*10)} animated striped variant="danger" label={`Wrong(${100-(correct*10)}%)`} key={2} />
        </ProgressBar>
            
            {users.map((prof, index) => (
            <MDBCardBody className='p-3' key={index}>
                <div>
                <div className='d-flex justify-content-start align-items-center'>
                    <p>Q:{prof.title}</p>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    {(prof.UserAns === 1) ? (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option1-${index}`} checked disabled />
                    ) : (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option1-${index}`} disabled />
                    )}
                    <label htmlFor={`option1-${index}`} className='ms-2'>{prof.option1}</label>
                    {(prof.correctoption==1)?(<span className="text-primary">✔️</span>):null}
                    {(prof.correctoption!=prof.UserAns)&&(prof.UserAns==1)?(<span className="text-primary">❌</span>):null}
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    {(prof.UserAns === 2) ? (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option2-${index}`} checked disabled />
                    ) : (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option2-${index}`} disabled />
                    )}
                    <label htmlFor={`option2-${index}`} className='ms-2'>{prof.option2}</label>
                    {(prof.correctoption==2)?(<span className="text-primary">✔️</span>):null}
                    {(prof.correctoption!=prof.UserAns)&&(prof.UserAns==2)?(<span className="text-primary">❌</span>):null}
                
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    {(prof.UserAns === 3) ? (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option3-${index}`} checked disabled />
                    ) : (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option3-${index}`} disabled />
                    )}
                    <label htmlFor={`option3-${index}`} className='ms-2'>{prof.option3}</label>
                    {(prof.correctoption==3)?(<span className="text-primary">✔️</span>):null}
                    {(prof.correctoption!=prof.UserAns)&&(prof.UserAns==3)?(<span className="text-primary">❌</span>):null}
                
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    {(prof.UserAns === 4) ? (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option4-${index}`} checked disabled />
                    ) : (
                    <MDBRadio type="radio" name={`flexRadioDefault${index}`} id={`option4-${index}`} disabled />
                    )}
                    <label htmlFor={`option4-${index}`} className='ms-2'>{prof.option4}</label>
                    {(prof.correctoption==4)?(<span className="text-primary">✔️</span>):null}
                    {(prof.correctoption!=prof.UserAns)&&(prof.UserAns==4)?(<span className="text-primary">❌</span>):null}
                
                </div>
                </div>
                
            </MDBCardBody>
            ))}

<div style={{ textAlign: 'center', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<a href={`/Quiz?Id=${Id}`}>
<button type="button" class="btn btn-primary btn-block mb-4" style={{ width: '200px' }} >Retake</button>
</a>
</div>
            </MDBCard>
        </MDBCol>
        </MDBContainer>
        <Footer/>
    </div>
  )
}

export default Progress
