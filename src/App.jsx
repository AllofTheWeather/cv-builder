import { Outlet } from 'react-router-dom'
import Nav from './Nav';
import { useState } from 'react';
import { UserContext } from './Constants';

function App() {

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
    <UserContext.Provider value={[ values, setters ]}>
      <div className="container-fluid d-flex ">
        <h1 className="p-3 m-0">CV Builder</h1>
      </div>
      
      <div className="container-fluid bg-primary p-1" />
      <Nav />

      <Outlet />
    </UserContext.Provider>
  )
}

export default App