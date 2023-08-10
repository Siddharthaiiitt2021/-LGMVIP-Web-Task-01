import './App.css';
import { createElement, useState } from 'react';
import Registered from './Registered'
import ReactDOM from 'react';

function App() {
  const [reg, setReg] = useState([])
  var list = -1;

  function AddDetails() {
    var name = document.querySelector('#name').value
    var email = document.querySelector('#email').value
    var male = document.querySelector('#male').checked
    var female = document.querySelector('#female').checked
    var other = document.querySelector('#other').checked
    var js = document.querySelector('#js').checked
    var html = document.querySelector('#html').checked
    var css = document.querySelector('#css').checked
    var image = document.querySelector('#profilepic').files[0]
    var gender;
    var skills = [];
    if (male) {
      gender = 'Male'
    }
    else if (female) {
      gender = 'Female'
    }
    else {
      gender = 'Other'
    }


    if (js) {
      skills.push('Js')
    }
    if (html) {
      skills.push('HTML')
    }
    if (css) {
      skills.push('CSS')
    }
    if (!html && !css && !js) {
      skills.push('None')
    }

    console.log(name, email, gender, image)
    if (name == '' | email == '' | typeof gender === undefined | typeof image === undefined) {
      alert('Fill all the fields')
    }
    else {
      console.log('Done')
      try{
        var img = URL.createObjectURL(image)
        document.querySelector('#reg_name').style.display = 'block';
        const deets = { name: name, email: email, gender: gender, skills: skills, img: img }
        setReg([...reg, deets]);
      }
      catch{
        alert('Image not submitted')
      }
      
    }
  }
  console.log(reg)

  return (
    <div className="App">
      <div className='container'>
        <h2>Student Registration Form</h2>

        <div id='MainBody'>
          <div id='register'>
            <form id='form'>
              <div className='details'><p>Name:</p><input type='text' id='name'></input></div>
              <div className='details'><p>Email:</p><input type='text' id='email'></input></div>
              <div className='details'><p>Gender:</p>
                <input type='radio' id='male' name='Gender'></input>
                <label htmlFor='male'>Male</label>
                <input type='radio' id='female' name='Gender'></input>
                <label htmlFor='female'>Female</label>
                <input type='radio' id='other' name='Gender'></input>
                <label htmlFor='Other'>Other</label>
              </div>
              <div className='details'><p>Skills:</p>
                <input type='checkbox' id='js'></input>
                <label htmlFor='js'>JS</label>
                <input type='checkbox' id='html'></input>
                <label htmlFor='html'>HTML</label>
                <input type='checkbox' id='css'></input>
                <label htmlFor='css'>CSS</label>
              </div>
              <div className='details'>
                <label htmlFor='img'>Select Image :</label>
                <input type='file' name='img' accept='image/*' id='profilepic'></input>
              </div>
            </form>
            <button onClick={AddDetails}>Submit</button>
          </div>
          <div id='registered'>
            <h3 id='reg_name' style={{ display: 'none' }}>Registered Students</h3>
            <div className='list'>
              <div className='deetsList'>
                {reg.map((obj, idx) =>
                  <Registered key={idx} reg={obj}></Registered>
                )}
              </div>
            </div>
            {/* <Registered></Registered>
            <Registered></Registered> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
