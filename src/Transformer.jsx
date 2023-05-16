import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "./Constants";
import Template from "./Templates";
import Document from "./Document";

// Handles form data for rendering

export default function Transformer() {
    let context = useContext(UserContext);
    let values = context[0];

    const [ chunks, setChunks ] = useState([]);

    // I want to iterate through every element in the top level array that are nested inside the values object
    // I also need to kow which array is being operated upon so the correct template can be assigned

    // I can get an array of the object keys to iterate upon, which turns the problem into a 2 d array comprehension

    // I need to iterate every item in a 2d array and keep a count of the top level index which will control the template aassignment

    //nested for loops will iterate every item, and a switch statement will determine which template is assigned based on a running sum of templates assigned vs the running sum of the length of each sub array

    // The 'i' for loop iterates over the five items in the values object

    //The i for loop iterates over all the values in the sub array


    useEffect(() => {

        let shallowCopy = []

        for (let i = 0; i < values.general.length; i ++) {
            shallowCopy.push({type: "general", values: values.general[i]})
        }
    
        for (let i = 0; i < values.employment.length; i++) {
            shallowCopy.push({type: "employment", values: values.employment[i], index: i})
        }
    
        for (let i = 0; i < values.education.length; i++) {
            shallowCopy.push({type: "education", values: values.employment[i], index: i})
        }
    
        for (let i = 0; i < values.skills.length; i++) {
            shallowCopy.push({type: "skills", values: values.skills[i], index: i})
        }
    
        for (let i = 0; i < values.contact.length; i++) {
            shallowCopy.push({type: "contact", values: values.contact[i]})
        }
    
        setChunks(() => shallowCopy)
    }, []);

    return (
        <>
            <Document chunks={chunks} />
        </>
    )
}