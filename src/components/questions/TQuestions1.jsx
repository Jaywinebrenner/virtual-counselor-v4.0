import React from 'react';
import { NavLink } from 'react-router-dom';
import roomtone from '../../media/roomtone3.mp3';
import ReactHowler from 'react-howler';
//Continue being counseled / No

const TQuestions1 = () => {

return (
  <div className='entire-question-wrapper'>
    <style jsx>{`

        .entire-question-wrapper{
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .question-div {
          text-align: center;
          margin: auto;
          width: 60%;
          padding: 10px;
          height: 200px;
        }




        `}</style>

      <div className='question-div'>
        <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px', lineHeight: '40px'}} to="/TVideo2">Continue being Virtually Counseled</NavLink>
        <br></br>
        <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', lineHeight: '40px' }} to="/TVideo4">No. Virtual Counselor is not for me</NavLink>
      </div>

      <ReactHowler
  src={roomtone}
  playing={true}
  volume={.2}
  />
    </div>
  );
}

export default TQuestions1;
