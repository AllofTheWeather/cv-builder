import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import { Form } from './Form';
import { Export } from './Export';

export default function State() {

  const [ general, setGeneral ] = useState([]);

  const [ employment, setEmployment ] = useState([]);

  const [ education, setEducation ] = useState([]);

  const [ contact, setContact ] = useState([]);

  const [ skills, setSkills ] = useState([]);
 
  /*{ 
      The employment history object contains employer objects referenced by their location for employerLocation
      The corresponding data is stored in the sub objects
      This means multiple jobs cannot share the same location

      In future, perhaps the option to name the objects after a different field could be added
  }*/

  let values = {
    general: general,
    employment: employment,
    education: education,
    contact: contact,
    skills: skills
  }

  let setters = {
    setGeneral: setGeneral,
    setEmployment: setEmployment,
    setEducation: setEducation,
    setContact: setContact,
    setSkills: setSkills
  }

  return (
      <div>
        <div className="container-fluid bg-primary">
          <h1 className="p-3 text-white m-0">CV Builder</h1>
        </div>
        
          <div className="container-fluid bg-warning p-1" />
          <div className="container-fluid p-3 ">Welcome to C.V. Builder. Fill in all the fields to begin generating your C.V.</div>
          <Form setters={setters} values={values} />
          <Export values={values} />
      </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
