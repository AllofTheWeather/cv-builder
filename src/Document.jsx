import { useContext } from "react";
import { UserContext } from "./Constants";

export function Document() {
    
    let context = useContext(UserContext);
    let values = context[0];

    let firstName = values.general[0] === undefined ? "" : values.general[0].firstName;
    let lastName = values.general[0] === undefined ? "" : values.general[0].lastName; 
    let gender = values.general[0] === undefined ? "" : values.general[0].gender;
    let jobTitle = values.general[0] === undefined ? "" : values.general[0].jobTitle;
    let profficiency = values.general[0] === undefined ? "" : values.general[0].profficiency;
    let age = values.general[0] === undefined ? "" : values.general[0].age;

    let number = [...values.contact][0] === undefined ? "" : [...values.contact][0].number;
    let email = [...values.contact][0] === undefined ? "" : [...values.contact][0].email;
    let addressLine1 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine1;
    let addressLine2 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine2;
    let addressLine3 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine3;
    let postcode = [...values.contact][0] === undefined ? "" : [...values.contact][0].postcode;

    return (
        <div id="divToPrint" className="mt4 z" style={{
            backgroundColor: '#f5f5f5',
            width: '210mm',
            minHeight: '297mm',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <div className="p-3">

                <div className="d-flex bg-body p-2">
                    <div className="col-8 p-0 m-0">
                        <h1 className="display-4"><strong>{firstName} {lastName}</strong><small className="text-muted"> - {jobTitle}</small></h1>
                        

                        <div className="">
                                <p>I&apos;m a {age} year old {gender} looking for {() => {
                            if (
                                profficiency[0] === "a"
                                || profficiency[0] === "e"
                                || profficiency[0] === "i"
                                || profficiency[0] === "o"
                                || profficiency[0] === "u") {
                                    return "an"
                                } else {
                                    return "a"
                                }
                                }} {profficiency} role in the {jobTitle} Sector.</p>

                        </div>

                    </div>
                    <div className="col-4">
                        <div className="text-xs-right d-flex flex-column align-items-end">
                            <p className="lh-1 text-muted mb-2 ">{addressLine1},</p>
                            <p className="lh-1 text-muted mb-2">{addressLine2},</p>
                            <p className="lh-1 text-muted mb-2">{addressLine3},</p>
                            <p className="lh-1">{postcode}</p>
                        </div> 
                    </div>
                </div>
            </div>


            <div className="p-3 border bg-body">
                <h1 className="p-2">Employment history</h1>
                <ul className="list-unstyled">
                    {
                        values.employment.map((item, key) => {
                            return (
                                <li key={key} className="bg-body p-2 border-top">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="text-capitalize">{item.title} <small className="text-muted">- {item.location}</small></h4>
                                        <div>
                                            <p className="text-primary">{item.start} to {item.end}</p>
                                        </div>
                                        
                                    </div>

                                    <p>{item.description}</p>
                                    <h5>Contact information</h5>
                                    <p>{item.contact} -<small className="text-muted"> {item.name}</small></p>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>

           

        
                    <div className="row m-0 p-0">
                <div className="col-8 m-0 p-0">            
                    <div className="p-3">
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
                                        <li key={key} className="bg-body p-2">
                                            
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
                </div>
            

        <div className="col-4 p-0">
            <div className="pt-3">
                
                <ul className="list-unstyled mb-3">
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
            </div>        
        </div>  
        </div>

        <div className="p-3">
                <div className="bg-body">
                    <h5>Contact Details</h5>
                    <p>{number}</p>             
                    <p>{email}</p>
                </div>
        </div>
        </div>
    )
}