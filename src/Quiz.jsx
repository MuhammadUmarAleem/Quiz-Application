import React, { useEffect, useState } from 'react';
import './Home.css'
import { MDBRadio } from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
  import Card from 'react-bootstrap/Card';

          // Define the dimensions of the 2D array (rows x columns)
          const numRows = 10; // Number of rows
          const numColumns = 2; // Number of columns
  
          // Create an empty 2D array with the specified size
          const twoDArray = new Array(numRows);
  
          // Initialize each row with empty arrays
          for (let i = 0; i < numRows; i++) {
          twoDArray[i] = new Array(numColumns);
          }
  
          // You now have a 2D array with 3 rows and 4 columns, initialized with undefined values
          console.log(twoDArray);

const Quiz = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const [users,setUsers] = useState([]);
    const [ids,setids] = useState(0);
    const [Q,setQ] = useState('');
    const [option1,setOption1] = useState('');
    const [option2,setOption2] = useState('');
    const [option3,setOption3] = useState('');
    const [option4,setOption4] = useState('');
    const [count,setCount] = useState(1);
    const [error,setError] = useState(false);
    const [optionerror,setOptionerror] = useState(false);
    const [show,setshow] = useState(false);
    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await fetch(`https://elastic-frequent-attention.glitch.me/GetQuizQ?Id=${urlParams.get('Id')}`);
          const data = await response.json();
          setUsers(data);
          console.log(data)
          setQ(data[0].title);
          setOption1(data[0].option1);
          setOption2(data[0].option2);
          setOption3(data[0].option3);
          setOption4(data[0].option4);
          setids(data[9].id);
          console.log(users)
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    },[])

    function handleclick(){
        
      console.log(optionerror);
      console.log(typeof(optionerror))
      console.log(selectedOption);
        if(selectedOption != '')
        {
            twoDArray[count-1][0]=users[count-1].id;
            twoDArray[count-1][1]=parseInt(selectedOption.match(/\d+/g)[0]);
            console.log(twoDArray);

            // Ans.push(...temp);
            setCount(count+1);
            if (count < users.length){
                setQ(users[count].title);
                setOption1(users[count].option1);
                setOption2(users[count].option2);
                setOption3(users[count].option3);
                setOption4(users[count].option4);
                setSelectedOption('');
                setshow(false);
                setOptionerror(false);
                // const radio = document.getElementById(option1);
                // console.log(radio.checked);
                
            }
            if (count === users.length-1){
              setError(true);
            }
            document.getElementById("quizform").reset();
        }
        else{
            setOptionerror(true)
            console.log(optionerror)
        }
    }

    function handleSubmit(action) {
      twoDArray[count-1][0]=users[count-1].id;
      twoDArray[count-1][1]=parseInt(selectedOption);
      console.log(twoDArray);
        console.log("OK");
        document.getElementById('addquiz').submit();
    };

    const [selectedOption, setSelectedOption] = useState(''); // State to keep track of the selected option

    const handleOptionChange = (event) => {
      console.log(event.target.id);
      setSelectedOption(event.target.id); // Update the selected option when a radio button is clicked
      setshow(true);
      setOptionerror(false);
    };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>    
        <div class="wrapper">
                <svg>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        QUIZ TIME!
                    </text>
                </svg>
        </div>
        <form  action={`https://elastic-frequent-attention.glitch.me/adduserquiz?UserId=${localStorage.getItem("UserId")}&QuizId=${urlParams.get("Id")}&Array=${twoDArray}&a=${ids}&b=1`} method='post' id='addquiz' >
        <MDBContainer fluid className='p-4 d-flex justify-content-center align-items-center'>
        <MDBCol md='8'>
            <MDBCard className='my-30'>
            <MDBCardBody className='p-3'>
            <Card.Header as="h5">Question {count} of 10</Card.Header>
            <div className='d-flex justify-content-start align-items-center'>
            
              
            
            
                <p>Q{count}:{Q}</p>
                </div>
                {/* <div className='d-flex justify-content-start align-items-center'>
                <MDBRadio type="radio" name='flexRadioDefault' id='option1'  />
                <label htmlFor='flexRadioDefault1' className='ms-2'>{option1}</label>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                <MDBRadio type="radio" name='flexRadioDefault' id='option2'  />
                <label htmlFor='flexRadioDefault2' className='ms-2'>{option2}</label>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                <MDBRadio type="radio" name='flexRadioDefault' id='option3'  />
                <label htmlFor='flexRadioDefault1' className='ms-2'>{option3}</label>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                <MDBRadio type="radio" name='flexRadioDefault' id='option4' />
                <label htmlFor='flexRadioDefault2' className='ms-2'>{option4}</label>
                </div> */}


<div>
  <form id="quizform">
      <div className='d-flex justify-content-start align-items-center'>
        <input
          type="radio"
          name='flexRadioDefault'
          id='1'
          // value={selectedOption}
          onClick={handleOptionChange}
          // checked={selectedOption === '1'} // Check if this radio button should be selected
        />
        <label htmlFor='option1' className='ms-2'>{option1}</label>
      </div>
      <div className='d-flex justify-content-start align-items-center'>
        <input
          type="radio"
          name='flexRadioDefault'
          id='2'
          // value={selectedOption}
          onClick={handleOptionChange}
          // checked={selectedOption === '2'} // Check if this radio button should be selected
        />
        <label htmlFor='option2' className='ms-2'>{option2}</label>
      </div>
      <div className='d-flex justify-content-start align-items-center'>
        <input
          type="radio"
          name='flexRadioDefault'
          id='3'
          // value={selectedOption}
          onClick={handleOptionChange}
          // checked={selectedOption === '3'} // Check if this radio button should be selected
        />
        <label htmlFor='option3' className='ms-2'>{option3}</label>
      </div>
      <div className='d-flex justify-content-start align-items-center'>
        <input
          type="radio"
          name='flexRadioDefault'
          id='4'
          // value={selectedOption}
          onClick={handleOptionChange}
          // checked={selectedOption === '4'} // Check if this radio button should be selected
        />
        <label htmlFor='option4' className='ms-2'>{option4}</label>
      </div>
      {/* {show?(<p style={{ color: "blue", marginBottom: "-8px" }}>Selected Option: {selectedOption}</p>):null} */}
      {optionerror?(<p style={{ color: "red", marginBottom: "-15px" }}>Please Select Answer First!</p>):null}
      </form>
    </div>



                {error ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{error}</p>
                ) : null}
                <div class="d-flex justify-content-end">
                {error?(<button type="button" class="btn btn-primary" style={{ width: '170px',marginTop:'20px' }} onClick={handleSubmit} >Submit</button>):<button type="button" class="btn btn-primary" style={{ width: '170px' ,marginTop:'20px'}} onClick={handleclick}>Next</button>}
                </div>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </MDBContainer>
        </form>
    </div>
  )
}

export default Quiz
