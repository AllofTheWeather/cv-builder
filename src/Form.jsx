import { startTransition } from "react";
import { useState, useEffect } from "react"

/*{ 
    Each job in the employment history section will require a dedicated input field
    Since the user controls the number of jobs the forms will be conditionally rendered
    The forms will update an app level state using an index property to keep track of each jobs data
    The index property is assigned to the job object as it is created
    A job is created when its location input field is modified
    A greyed out inout field will prompt the user to enter information thus validating the form and creating that specific job object,

    Each EmployerForm Component corresponds with an object in state that contains all its data
}*/


/*{

    A conditional form is a form whose entry fields and state are codependant
    The number of field components that are rendered is derived from the state
    The state is manipulated from the entry fields

    Currently this is creating circular logic which needs to be eliminated
    
    The forms are created inside a for loop that iterates over each object in the state's top level array
        -This takes place at every render

    Perhaps only one form should be rendered at a time, with other apparent forms being none functional and existing only to display information to the user
    Once a none active form is activated by the user it becomes a form

    Thus, the data loaded can be selected with array index matching to the component onscreen

    So a form is always visable on screen, previous form entries are stored as none active forms

    By selecting a previous form, the user can re-activte that form's unctionality and the data will be loaded into the active form

}*/

function ContactForm(props) {

    /*{
        "props.contact" is a data structure of type: object
        It contains each classification of data from the contact form

        number: type int
        email: email     
        socials: an array of objects containing:
            social media type (select forom dropdown)
            url
    }*/

    // A for loop to read the length of props.contact.numbers and add each to an array to be mapped upon


    // The for loop automatically adds an extra form with no corresponding data - this defaults tot empty form placeholders upon render

    function handleChange(key, e) {

        console.log(props.values.contact)
        
        let shallowCopy = [...props.values.contact];

        if (shallowCopy[0] === undefined) {
            shallowCopy.push({});
        } else {
            if (key === "number") {
                shallowCopy[0].number = e.target.value;
            } else if (key === "email") {
                shallowCopy[0].email = e.target.value;
            } else if (key === 0) {
                shallowCopy[0].addressLine1 = e.target.value;
            } else if (key === 1) {
                shallowCopy[0].addressLine2 = e.target.value;
            } else if (key === 2) {
                shallowCopy[0].addressLine3 = e.target.value;
            } else if (key === "postcode") {
                shallowCopy[0].postcode = e.target.value;
            }            
        }

        
        props.setters.setContact(shallowCopy);
        
    }

    let shallowCopy = [...props.values.contact];

    let number = shallowCopy[0] === undefined ? "" : shallowCopy[0].number;
    let email = shallowCopy[0] === undefined ? "" : shallowCopy[0].email;
    let addressLine1 = shallowCopy[0] === undefined ? "" : shallowCopy[0].addressLine1;
    let addressLine2 = shallowCopy[0] === undefined ? "" : shallowCopy[0].addressLine2;
    let addressLine3 = shallowCopy[0] === undefined ? "" : shallowCopy[0].addressLine3;
    let postcode = shallowCopy[0] === undefined ? "" : shallowCopy[0].postcode;

    return (
        <div>
            <h1 className="m-3 p-3">Contact Details</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <label className="form-label">Phone number</label>
                        <input className="form-control" type="text" placeholder="phone number" onChange={(e) => handleChange("number", e)} value={number} />
                    </div>
                    <div className="col">
                        <label className="form-label">Email address</label>
                        <input className="form-control" type="text" placeholder="email address" onChange={(e) => handleChange("email", e)} value={email} /> 
                    </div>
                </div>   
            </div>


            <div className="container mb-3">
                <label className="form-label">Address</label>
                <input className="form-control" type="text" placeholder="address line 1" onChange={(e) => handleChange(0, e)} value={addressLine1} />
                <input className="form-control" type="text" placeholder="address line 2" onChange={(e) => handleChange(1, e)} value={addressLine2} />
                <input className="form-control" type="text" placeholder="address line 3" onChange={(e) => handleChange(2, e)} value={addressLine3} />
                <input className="form-control" type="text" placeholder="postcode" onChange={(e) => handleChange("postcode", e)} value={postcode} />
            </div>
        </div>
    )
};

function EducationFields(props) {
    function handleChange(key, e) {

        console.log(key);
    
        let shallowCopy = [...props.values.education];

        if (shallowCopy[props.index] === undefined) {
            console.log("undefined");
            for (let i = shallowCopy.length - 1; i < props.index; i ++) {
                shallowCopy.push({});
            }
        }

        if (key === "institution") {
            shallowCopy[props.index].institution = e.target.value;
        } else if (key === "qualification") {
            shallowCopy[props.index].qualification = e.target.value;
        } else if (key === "grade") {
            shallowCopy[props.index].grade = e.target.value;
        }
 
        props.setters.setEducation(shallowCopy);
    }

    function handleRemove() {
        props.setCount(count => count - 1);

        let shallowCopy = [...props.values.education];
        shallowCopy.splice(props.index, 1)
        props.setters.setEducation(shallowCopy);
    }

    let institution = props.values.education[props.index] === undefined ? "" : props.values.education[props.index].institution;
    let qualification = props.values.education[props.index] === undefined ? "" : props.values.education[props.index].qualification;
    let grade = props.values.education[props.index] === undefined ? "" : props.values.education[props.index].grade;

    return (
        <div>
            <div className="row">
                <div className="col-11" />
                <div className="col-1">
                    <button className="btn-close" type="submit" onClick={() => handleRemove()}></button>
                </div>
            </div>
            <div className="container mb-3">
                <label className="form-label">Institution</label>
                <input type="text" className="form-control" placeholder="institution" onChange={(e) => handleChange("institution", e)} value={institution} />   
            </div>
            <div className="container mb-3">
                <label className="form-label">Qualification</label>
                <input type="text" className="form-control" placeholder="qualification" onChange={(e) => handleChange("qualification", e)} value={qualification} />   
            </div>
            <div className="container mb-3">
                <label className="form-label">Grade</label>
                <input type="text" className="form-control" placeholder="grade" onChange={(e) => handleChange("grade", e)} value={grade} />   
            </div>
        </div>       
    )
}

function EducationForm(props) {

    const [ count, setCount ] = useState(0);

    let educationForms = [];

    for (let i = 0; i <= count; i ++) {
        educationForms = [...educationForms, <EducationFields values={props.values} setters={props.setters} count={count} setCount={setCount} index={i} />];
    }

    return (
        <div className="container mb-3">
        <h1 className="m-3 p-3">Education History</h1>
        <ul className="list-group">
        {educationForms.map((element, index) => {
            return (
                <li className="list-group-item" key={index}>
                    {element}
                </li>
            )
        })}
        </ul>
        <div className="container mb-3">
            <button className="btn btn-primary m-3" type="submit" onClick={() => setCount(count => count + 1)}>add qualification</button>
        </div>
        </div>
    )
}

function SkillFields(props) {

    /*{The data for each employer form is stored in its componenet as an object}*/
    /*{Once the required field have been completed, the whole object is assigned a name and set to app level state}*/

    /*{ Every time the local state updates, the app level state also needs to update }*/

    function handleChange(key, e) {
    
        let shallowCopy = [...props.values.skills];

        if (shallowCopy[props.index] === undefined) {
            for (let i = shallowCopy.length - 1; i < props.index; i ++) {
                shallowCopy.push({});
            }
        }

        //This is defunct but retains pattern from other components
        // Also allows addition of extra objective properties more easily in future
        if (key === "skill") {
            shallowCopy[props.index].skill = e.target.value;
        }
 
        props.setters.setSkills(shallowCopy);
    }

    function handleRadio(value) {
        let shallowCopy = [...props.values.skills];
        if (shallowCopy[props.index] === undefined) {
            for (let i = shallowCopy.length - 1; i < props.index; i ++) {
                shallowCopy.push({});
            }
        }

        shallowCopy[props.index].profficiency = value;

        props.setters.setSkills(shallowCopy)
    }

    function handleRemove() {
        props.setCount(count => count - 1);

        let shallowCopy = [...props.values.skills];
        shallowCopy.splice(props.index, 1)
        props.setters.setEmployment(shallowCopy);
    }

    function isChecked(rank) {
        let profficiency = props.values.skills[props.index] === undefined ? "" : props.values.skills[props.index].profficiency;
        if (rank === profficiency) {
            return true
        } else {
            return false
        }
    }

    let skill = props.values.skills[props.index] === undefined ? "" : props.values.skills[props.index].skill;

    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-11">

                </div>
                <div className="col-1">
                    <button className="btn-close" type="submit" onClick={() => handleRemove()}></button>
                </div>
            </div>
            <div className="container mb-3">
                <label className="form-label">Skill</label>
                <input type="text" className="form-control" placeholder="skill" onChange={(e) => handleChange("skill", e)} value={skill} />
                <div className="mt-3">
                <label className="form-label">Profficiency</label>
                <div className="container d-flex flex-wrap flex-column">
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleRadio(1)} checked={isChecked(1)} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            beginner
                        </label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => handleRadio(2)} checked={isChecked(2)} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            novice
                        </label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={(e) => handleRadio(3)} checked={isChecked(3)} />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            intermediate
                        </label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onChange={(e) => handleRadio(4)} checked={isChecked(4)} />
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                            proficient
                        </label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" onChange={(e) => handleRadio(5)} checked={isChecked(5)} />
                        <label className="form-check-label" htmlFor="flexRadioDefault5">
                            expert
                        </label>
                    </div>
                </div> 
                </div>
                
            </div>
        </div>
    )
}

function SkillsForm(props) {

    const [ count, setCount ] = useState(0);

    let skillForms = [];

    for (let i = 0; i <= count; i ++) {
        skillForms = [...skillForms, <SkillFields values={props.values} setters={props.setters} count={count} setCount={setCount} index={i} />];
    }

    return (
        <div className="container">
        <h1 className="m-3 p-3">Skills</h1>
        <ul className="list-group">
        {skillForms.map((element, index) => {
            return (
                <li className="list-group-item" key={index}>
                    {element}
                </li>
            )
        })}
        </ul>
        <div className="container mb-3">
            <button className="btn btn-primary m-3" type="submit" onClick={() => setCount(count => count + 1)}>add skill</button>
        </div>
        </div>
    )
}

function EmployerFields(props) {

    /*{The data for each employer form is stored in its componenet as an object}*/
    /*{Once the required field have been completed, the whole object is assigned a name and set to app level state}*/

    /*{ Every time the local state updates, the app level state also needs to update }*/

    function handleChange(key, e) {

        console.log(key);
    
        let shallowCopy = [...props.values.employment];

        if (shallowCopy[props.index] === undefined) {
            console.log("undefined");
            for (let i = shallowCopy.length - 1; i < props.index; i ++) {
                shallowCopy.push({});
            }
        }

        if (key === "location") {
            shallowCopy[props.index].location = e.target.value;
        } else if (key === "name") {
            shallowCopy[props.index].name = e.target.value;
        } else if (key === "title") {
            shallowCopy[props.index].title = e.target.value;
        } else if (key === "contact") {
            shallowCopy[props.index].contact = e.target.value;
        } else if (key === "start") {
            shallowCopy[props.index].start = e.target.value;
        } else if (key === "end") {
            shallowCopy[props.index].end = e.target.value;
        } else if (key === "description") {
            shallowCopy[props.index].description = e.target.value;
        }
 
        props.setters.setEmployment(shallowCopy);
    }

    function handleRemove() {
        props.setCount(count => count - 1);

        let shallowCopy = [...props.values.employment];
        shallowCopy.splice(props.index, 1)
        props.setters.setEmployment(shallowCopy);
    }

    let location = props.values.employment[props.index] === undefined ? "" : props.values.employment[props.index].location;
    let name = props.values.employment[props.index] === undefined ? "" : props.values.employment[props.index].name;

    let description = props.values.employment[props.index] === undefined ? "" : props.values.employment[props.index].description;

    let start = props.values.employment[props.index] === undefined ? "" : props.values.employment[props.index].start;
    let end = props.values.employment[props.index] === undefined ? "" : props.values.employment[props.index].end;

    let title = props.values.employment[props.index] === undefined ? "" : props.values.employment[props.index].title;
    let contact = props.values.employment[props.index] === undefined ? "" : props.values.employment[props.index].contact;

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-11">

                </div>
                <div className="col-1">
                    <button className="btn-close" type="submit" onClick={() => handleRemove()}></button>
                </div>
            </div>

            <div className="container">
                <label className="form-label"><strong>General</strong></label>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <label className="form-label">Job Title</label>
                        <input type="text" className="form-control" placeholder="job title" onChange={(e) => handleChange("title", e)} value={title} />   
                    </div>
                    <div className="col">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-control" placeholder="employer location" onChange={(e) => handleChange("location", e)} value={location} />  
                    </div>
                </div>
            </div>
            </div> 

            <div className="container mb-3">
                <label className="form-label">Description</label>
                <textarea type="text" className="form-control" placeholder="What were your responsabilities here?" onChange={(e) => handleChange("description", e)} value={description} />   
            </div>

            <div className="container">
                <label className="form-label"><strong>Duration</strong></label>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <label className="form-label">Start</label>
                        <input className="form-select" type="date" onChange={(e) => handleChange("start", e)} value={start} />    
                    </div>
                    <div className="col">
                        <label className="form-label">Finish</label>
                        <input className="form-select" type="date" onChange={(e) => handleChange("end", e)} value={end} />
                    </div>
                </div>
            </div>
            </div>          

            <div className="container">
                <label className="form-label"><strong>Contact Details</strong></label>
                <div className="row">
                    <div className="col">
                        <label className="form-label">employer name</label>
                        <input type="text" className="form-control" placeholder="name of manager" onChange={(e) => handleChange("name", e)} value={name} />   
                    </div>
                    <div className="col">
                        <label className="form-label">contact information</label>
                        <input type="text" className="form-control" placeholder="eg. phone number" onChange={(e) => handleChange("contact", e)} value={contact} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

function EmployersForm(props) {

    const [ count, setCount ] = useState(0);

    let employerForms = [];

    for (let i = 0; i <= count; i ++) {
        employerForms = [...employerForms, <EmployerFields values={props.values} setters={props.setters} count={count} setCount={setCount} index={i} />];
    }

    return (
        <div className="container mb-3">
        <h1 className="p-3">Employment History</h1>
        <p>The details of your work history show potential employers what practical experience you have.</p>
        <ul className="list-group">
        {employerForms.map((element, index) => {
            return (
                <li className="list-group-item" key={index}>
                    {element}
                </li>
            )
        })}
        </ul>
        <div className="container mb-3">
            <button className="btn btn-primary m-3" type="submit" onClick={() => setCount(count => count + 1)}>add employer</button>
        </div>
        </div>
    )
}

function GeneralForm(props) {

    function handleChange(key, e) {
        let shallowCopy = [...props.values.general];

        if (shallowCopy[0] === undefined) {
            shallowCopy.push({});
        }

        if (key === "firstName") {
            shallowCopy[0].firstName = e.target.value;
        } else if (key === "lastName") {
            shallowCopy[0].lastName = e.target.value;
        } else if (key === "gender") {
            shallowCopy[0].gender = e.target.value;
        } else if (key === "job title") {
            shallowCopy[0].jobTitle = e.target.value;
        } else if (key === "profficiency") {
            shallowCopy[0].profficiency = e.target.value;
        } else if (key === "age") {
            shallowCopy[0].age = e.target.value;
        }

        props.setters.setGeneral(shallowCopy);
    }

    let firstName = props.values.general[0] === undefined ? "" : props.values.general[0].firstName;
    let lastName = props.values.general[0] === undefined ? "" : props.values.general[0].lastName;
    let gender = props.values.general[0] === undefined ? "" : props.values.general[0].gender;
    let jobTitle = props.values.general[0] === undefined ? "" : props.values.general[0].jobTitle;
    let profficiency = props.values.general[0] === undefined ? "" : props.values.general[0].profficiency;
    let age = props.values.general[0] === undefined ? "" : props.values.general[0].age;

    return (
        <div className="container mb-3">
            <h1 className="m-3 p-3">General Information</h1>
            <div className="container mb-3">
                <div className="row">
                    <div className="col">
                        <label className="form-label">First name</label>
                        <input type="text" className="form-control" placeholder="first name" onChange={(e) => handleChange("firstName", e)} value={firstName} /> 
                    </div>
                    <div className="col">
                        <label className="form-label">Last name</label>
                        <input type="text" className="form-control" placeholder="last name" onChange={(e) => handleChange("lastName", e)} value={lastName} />  
                    </div>
                </div>
            </div>

            <div className="container mb-3">
                <label className="form-label">Sector</label>
                <input className="form-control" type="text" placeholder="job-title" onChange={(e) => handleChange("job title", e)} value={jobTitle} />
            </div>

            <div className="container mb-3">
                <label className="form-label">Profficiency</label>
                <select className="form-select" aria-label="job-profficiency" defaultValue="0" onChange={(e) => handleChange("profficiency", e)} value={profficiency} >
                    <option value="Entry-Level">Entry-Level</option>
                    <option value="Mid-Level">Mid-level</option>
                    <option value="High-Level">High-level</option>
                    <option value="Expert-Level">Expert</option>
                </select>
            </div>
            <div className="container mb-3">
            <div className="row g-3">
                <div className="col">
                        <label className="form-label">Age</label>
                        <input className="form-control" type="number" placeholder="age" onChange={(e) => handleChange("age", e)} value={age} />
                </div>
                <div className="col">
                        <label className="form-label">Gender</label>
                        <select className="form-select" aria-label="Gender-select" defaultValue="10" onChange={(e) => handleChange("gender", e)} value={gender} >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Non-binary">Non-binary</option>
                            <option value="Agender">Agender</option>
                            <option value="Pangender">Pangender</option>
                            <option value="Two-Spirit">Two-spirit</option>
                            <option value="Third Gender">Third gender</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                </div>
            </div>
            </div>
        </div>        
    )
}


export function Form(props) {

    return (
        <>
            <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                <GeneralForm values={props.values} setters={props.setters} />
                </li> 
                <li className="list-group-item">
                <ContactForm values={props.values} setters={props.setters} />
                </li> 
            </ul>
            </div>

            
           
            {/* omitted adjective input */}

            <EmployersForm values={props.values} setters={props.setters} />

            <SkillsForm values={props.values} setters={props.setters} />

            <EducationForm values={props.values} setters={props.setters} />

            
        </>
    )
}