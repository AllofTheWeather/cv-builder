import { Outlet } from 'react-router-dom'
import Nav from './Nav';
import { useState } from 'react';
import { UserContext } from './Constants';
import Modal from './Modal';

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
      <div className="container-fluid d-flex justify-content-between p-0">
        <h1 className="p-3 m-0">CV Builder</h1>
        <div className="p-3 m-0">
        <div className="d-flex">
          <Modal />
        </div>  
        </div>
        
        
      </div>
      
      <div className="container-fluid bg-primary p-1" />
      <Nav />
      
      <Outlet />
    </UserContext.Provider>
  )
}

export default App