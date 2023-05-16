import { UserContext } from "./Constants";
import { useState, useRef, useContext, useEffect } from "react";
import Template from "./Templates";

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

export default function Document(props) {

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

    const [ pageData, setPageData ] = useState([
        {
            height: "a4",
            rangeStart: 0,
            rangeEnd: null,
            pageNumber: 1
        }
    ])

    const [ chunkData, setChunkData ] = useState([])

    useEffect(() => {
        var data = props.chunks.map((chunk, key) => {
            return (
                {
                    chunk: chunk,
                    key: key,
                    height: null,
                    page: null
                } 
            )
        })

        setChunkData(data)
    }, [props.chunks])

    /*

    const [ documentData, setDocumentData ] = useState({
        chunkData: chunkData,
        setChunkData: setChunkData,
    })

    */

    // data will contsin all information required by children
    // this includes all form data as chunks
    // any lifted state hooks

    // each page object will receive all the chunks as props under chunks
    // there will also be a page specific data object contain unique page data
    // crucially, this will contain a range property telling the page which chunks to load
    // This range property will be calculated in document using the lifted state of heights from each chunk

    // It is of paramount importance that the chunks can alter the page states
    // This is why

    return (
        <>
            <p>I am a document!</p>
            <button className="btn btn-primary" onClick={() => console.log(props.chunks)}>log chunks</button>
            <div id="divToPrint" className="mt4 z" style={{
                backgroundColor: '#f5f5f5',
                width: '210mm',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                {
                    chunkData.map((chunk, key) => {
                        return (
                            <Chunk key={key} thisChunkData={chunk} />
                        )
                    })
                }
              </div>

        </>
    )  
    }

    function Chunk(props) {

        console.log("Chunk call")

        const elRef = useRef(null);

        const [ height, setHeight ] = useState(0)

        /*
    
        function effectDocumentHeight(refHeight) {
            let shallowCopyDocumentChunkData = props.documentData.chunkData // the chunk data for all chunks
            
            shallowCopyDocumentChunkData.props.key.height(refHeight);

            props.documentData.setChunkData(shallowCopy);
        }
    
        useEffect(() => {
            if (!elRef?.current?.clientHeight) {
            return;
            }
            effectDocumentHeight(elRef?.current?.clientHeight);
        }, [elRef?.current?.clientHeight]);

        */
    
        return (
            <div height={height} ref={elRef}>
                <Template data={props.thisChunkData.chunk} />
            </div>
        )
    }