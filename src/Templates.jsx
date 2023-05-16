function General(props) {

    if (props.values !== undefined) {
        var firstName = props.values.firstName;
        var lastName = props.values.lastName; 
        var jobTitle = props.values.jobTitle;
    
        var bio = props.values.bio;
    
        var addressLine1 = props.values.addressLine1;
        var addressLine2 = props.values.addressLine2;
        var addressLine3 = props.values.addressLine3;
        var postcode = props.values.postcode;
    }
    
    return (
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
    )
}

function Employment(props) {

    let item = props.values

    return (
        
        <div className="bg-body p-2 border-top">
            <p>{props.index}</p>
            <div className="d-flex justify-content-between">
                <h5 className="text-capitalize">{item.title}<small className="text-muted">{item.location !== undefined ? " - " : ""}{item.location}</small></h5>
                <div>
                    <p className="text-primary">{item.start === undefined ? "" : item.start + " to " + item.end === undefined ? "present" : item.end}</p>
                </div>
                
            </div>

            <p>{item.description}</p>
            <p><strong>{item.contact !== undefined ? "Contact Information" : ""}</strong></p>
            <p className="lh-1">{item.contact}{item.name !== undefined ? " -" : ""}<small className="text-muted"> {item.name}</small></p>
        </div>
    )
}

function Education(props) {

    let item = props.values

    return (
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
    )

}

function Skills(props) {

    let item = props.values

    return (
        <p className=""><strong>{item.skill}</strong>: {item.profficiency}</p>
    )

}

function Contact(props) {

    if (props.values !== undefined) {
        var number = props.values.number;
        var email = props.values.email; 
    }

    return (
        <div className="border" id="contact">
            <div className="bg-body p-3">
                <h5>Contact Details</h5>
                <p>Phone: {number}</p>             
                <p>Email: {email}</p>
            </div>
        </div>  
    )
}

export default function Template(props) {
    let data = props.data
    console.log("I am a template")
    if (data.type === "general") {
        return (
            <General values={data.values} />
        )
    } else if (data.type === "employment") {
        return (
            <Employment values={data.values} index={data.index} />
        )
    } else if (data.type === "education") {
        return (
            <Education values={data.values} index={data.index} />
        )
    } else if (data.type === "skills") {
        return (
            <Skills values={data.values} index={data.index} />
        )
    } else if (data.type === "contact") {
        return (
            <Contact values={data.values} />
        )
    }
}