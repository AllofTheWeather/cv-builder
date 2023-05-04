import { useContext } from "react";
import { UserContext } from "./Constants";


// The document contains all the formatted CV data
// It is split into small chunks that can be spread over one or more pages. This helps with even spacing accross pages.
// Each chunk of information will have a height which will be measured with the useRef hook
// The chunks will be iteratively added to an array which will represent one page of information
// A running sum of heights will be kept and once the height exceeds the page height a new array will be created and the height reset


// Definitions

// Format contains all the Chunk(s) and allows the heights to be queried

// Each Page contains a subset of the Chunk(s) in document based on a running sum of their heights

// Document contains all Pages with all Chunk(s)

// Format
// - The logic that determines the splitting of chunks betweeen pages must occur here


// Document could be a sibling or otherwise further detached from format and use context to transfer the data

// The only prop data that needs to be shared are the number of pages and the number of chunks per page.

// The list of chunks will be accesible via the context

// Document will build:
    // a list of chunks in jsx format
    // an array of page objects that contains a number of chunks property and a data property

    // Document
    // - must have an array of pages based on props from format
        // Page
        // - must have an array of chunks from format
            // Chunk


    //props

    /*
    
    [
        {
            numberOfChunks (type:int) : "number of chunks on this page" - 1,
            chunks (type:array) : "an array of the chunks and their data" - [
                {
                    height (type: int) : "representing the height in pixels of the component once rendered" - 150px,
                    data (type: jsx) : "The prestyled jsx to be displayed in the chunk" - <></>
                }
            ]
        }
    ]

    */

function Chunk(props) {
    const myHeight = document.getElementById(props.id).offsetHeight
    
    return (
        <div height={myHeight} id={"chunk-" + props.key}>
            {
                props.pages[currentPage].chunks[currentChunk].data
            }
        </div>
    )
}
    
function Format() {
    
    let context = useContext(UserContext);
    let values = context[0];
    
    /* All form information variables must be checked for type: undefined to prevent the "Uncontrolled component" error. */

    let firstName = values.general[0] === undefined ? "" : values.general[0].firstName;
    let lastName = values.general[0] === undefined ? "" : values.general[0].lastName; 
    let jobTitle = values.general[0] === undefined ? "" : values.general[0].jobTitle;

    let bio = values.general[0] === undefined ? "" :values.general[0].bio;

    let addressLine1 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine1;
    let addressLine2 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine2;
    let addressLine3 = [...values.contact][0] === undefined ? "" : [...values.contact][0].addressLine3;
    let postcode = [...values.contact][0] === undefined ? "" : [...values.contact][0].postcode; 

    let number = [...values.contact][0] === undefined ? "" : [...values.contact][0].number;
    let email = [...values.contact][0] === undefined ? "" : [...values.contact][0].email;


    const [ pages, setPages ] = useState([]);
    const [ chunks, setChunks ] = useState([]);

    function countChunks() {
        return values.general.length + values.employment.length + values.skills.length + values.education.length + values.contact.length
    }

    function getChunkHeight(index) {
        var offsetHeight = document.getElementById(index).offsetHeight;
        return offsetHeight
    }

    function getHeightOfChunksBetween(start, end) {
        var runningSum = 0;

        for (let i = start; i <= end; i ++) {
            runningSum += getChunkHeight(i)
        }
    }

    function formatData() {



    }

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

export function Document(props){

    /*
        
        [
            {
                numberOfChunks (type:int) : "number of chunks on this page" - 1,
                chunks (type:array) : "an array of the chunks and their data" - [
                    {
                        height (type: int) : "representing the height in pixels of the component once rendered" - 150px,
                        data (type: jsx) : "The prestyled jsx to be displayed in the chunk" - <></>
                    }
                ]
            }
        ]
    
    */
    
    return (
        <>
            {
                pages.map((page, index) => {
                    <div key={index}>
                        {
                            page.chunks.map((chunk, index) => {
                                <div key={index}>
                                {
                                    chunk.data
                                }
                                </div>
                            })
                        }
                    </div>
                })
            }
        </>
    )  
    }
    