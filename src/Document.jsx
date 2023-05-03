import { useContext } from "react";
import { UserContext } from "./Constants";

export function Document() {
    
    let context = useContext(UserContext);
    let values = context[0];
    
    /* All form information variables must be checked for type: undefined to prevent the "Uncontrolled component" error. */

    let firstName = values.general[0] === undefined ? "" : values.general[0].firstName;
    let lastName = values.general[0] === undefined ? "" : values.general[0].lastName; 
    let gender = values.general[0] === undefined ? "" : values.general[0].gender;
    let jobTitle = values.general[0] === undefined ? "" : values.general[0].jobTitle;
    let profficiency = values.general[0] === undefined ? "" : values.general[0].profficiency;
    let age = values.general[0] === undefined ? "" : values.general[0].age;

    let bio = values.general[0] === undefined ? "" :values.general[0].bio;

    let addressLine1 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine1;
    let addressLine2 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine2;
    let addressLine3 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine3;
    let postcode = [...values.contact][0] === undefined ? "" : [...values.contact][0].postcode; 

    let number = [...values.contact][0] === undefined ? "" : [...values.contact][0].number;
    let email = [...values.contact][0] === undefined ? "" : [...values.contact][0].email;


    return (
        <div style={{"width": "210mm"}} id="document">


            <div className="d-flex bg-body p-1">
                <div className="col-10 p-0 m-0">
                    <h3 className="display-5 text-capitalize"><strong>{firstName} {lastName}</strong><small className="text-muted">{jobTitle !== "" ? " - " : ""}{jobTitle}</small></h3>
                    

                    <div className="">
                        {bio}
                    </div>

                </div>
                <div className="col-2">
                    <div className="text-xs-right d-flex flex-column align-items-end">
                        <p className="lh-1 text-muted mb-2 ">{addressLine1}{addressLine1 !== "" ? "," : ""}</p>
                        <p className="lh-1 text-muted mb-2">{addressLine2}{addressLine2 !== "" ? "," : ""}</p>
                        <p className="lh-1 text-muted mb-2">{addressLine3}{addressLine3 !== "" ? "," : ""}</p>
                        <p className="lh-1">{postcode}</p>
                    </div> 
                </div>
            </div>



            <h4 className="p-1 m-1">{values.employment !== undefined ? "Employment history" : ""}</h4>
            <ul className="list-unstyled d-flex flex-column flex-grow m-0">
                {
                    values.employment.map((item, key) => {
                        return (
                            <li key={key} className="bg-body p-2 border-top">
                                <div className="d-flex justify-content-between">
                                    <h5 className="text-capitalize">{item.title}<small className="text-muted">{item.location !== undefined ? " - " : ""}{item.location}</small></h5>
                                    <div>
                                        <p className="text-primary">{item.start === undefined ? "" : item.start + " to " + item.end === undefined ? "present" : item.end}</p>
                                    </div>
                                    
                                </div>

                                <p>{item.description}</p>
                                <p><strong>{item.contact !== undefined ? "Contact Information" : ""}</strong></p>
                                <p className="lh-1">{item.contact}{item.name !== undefined ? " -" : ""}<small className="text-muted"> {item.name}</small></p>
                            </li>
                        )
                    }) 
                }
            </ul>

            <div className="col-8 m-0 p-0">            
                <div className="">
                    <h3 className="bg-body mb-0 p-2" >Education & Qualifications</h3>
                    <ul className="list-unstyled mb-0">
                        <li className="bg-body p-2">
                            <div className="row">
                                <div className="col">
                                    <p><strong>School</strong></p>
                                </div>
                                <div className="col">
                                    <p><strong>Qualification</strong></p>
                                </div>
                                <div className="col">
                                    <p><strong>Grade</strong></p>
                                </div>
                            </div>
                        </li>
                        {
                            values.education.map((item, key) => {
                                return (
                                    <li key={key} className="bg-body p-0">
                                        
                                        <div className="row">
                                            <div className="col">
    
                                                <p className="text-capitalize">{item.institution}</p>
                                            </div>
                                            <div className="col">
                                                <p className="">{item.qualification}</p>
                                            </div>
                                            <div className="col">
                                                <p className="">{item.grade}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }) 
                        }
                    </ul>
                </div>
            

                
            <ul className="list-unstyled m-0 p-0">
                <li className="">
                    <h3 className="">Skills</h3>
                </li>
                {
                    values.skills.map((item, key) => {
                        return (
                            <li className="" key={key}>
                                <p className=""><strong>{item.skill}</strong>: {item.profficiency}</p>
                            </li>
                        )
                    }) 
                }
            </ul>
            
            <div className="border" id="contact">
                    <div className="bg-body p-3">
                        <h5>Contact Details</h5>
                        <p>Phone: {number}</p>             
                        <p>Email: {email}</p>
                    </div>
            </div>      
        </div>  
    </div>
    )
}
