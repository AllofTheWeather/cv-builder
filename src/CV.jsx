export function CV(props) {

    let firstName = props.values.general[0] === undefined ? "" : props.values.general[0].firstName;
    let lastName = props.values.general[0] === undefined ? "" : props.values.general[0].lastName; 
    let gender = props.values.general[0] === undefined ? "" : props.values.general[0].gender;
    let jobTitle = props.values.general[0] === undefined ? "" : props.values.general[0].jobTitle;
    let profficiency = props.values.general[0] === undefined ? "" : props.values.general[0].profficiency;
    let age = props.values.general[0] === undefined ? "" : props.values.general[0].age;

    let number = [...props.values.contact][0] === undefined ? "" : [...props.values.contact][0].number;
    let email = [...props.values.contact][0] === undefined ? "" : [...props.values.contact][0].email;
    let addressLine1 = [...props.values.contact][0] === undefined ? "" : [...props.values.contact][0].addressLine1;
    let addressLine2 = [...props.values.contact][0] === undefined ? "" : [...props.values.contact][0].addressLine2;
    let addressLine3 = [...props.values.contact][0] === undefined ? "" : [...props.values.contact][0].addressLine3;
    let postcode = [...props.values.contact][0] === undefined ? "" : [...props.values.contact][0].postcode;

    return (
        <div>
            <div className="p-3">

                <div className="d-flex bg-body p-2">
                    <div className="col-8 p-0 m-0">
                        <h1 className="display-4"><strong>{firstName} {lastName}</strong><small className="text-muted"> - {jobTitle}</small></h1>
                        

                        <div className="">
                                <p>I`&apos;`m a {age} year old {gender} looking for {() => {
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
                        props.values.employment.map((item, key) => {
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
                                props.values.education.map((item, key) => {
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
                
                <ul className="list-group mb-3">
                    <li className="list-group-item">
                        <h3 className="">Skills</h3>
                    </li>
                    {
                        props.values.skills.map((item, key) => {
                            return (
                                <li className="list-group-item" key={key}>
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