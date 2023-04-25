import { NavLink } from "react-router-dom";
import { Document } from "./Document"
import { useState } from "react"
import { rootPath } from "./Constants";
import blockScroll from "./hooks/blockScroll";
import { useEffect } from "react";

export default function Modal() {

    let defaultStyling = "btn btn-primary"

    const [ toggle, setToggle ] = useState(false);

    function toggleDisplayNone() {
        return toggle ? "d-block position-fixed" : "d-none";
    }

    useEffect(() => {
        toggle ? blockScroll[0] : blockScroll[1];
    }, [])

    return (
        <>
        <button type="button" className="btn btn-primary" onClick={() => setToggle(prev => !prev)}>
            Preview
        </button>
        
        <div className={toggleDisplayNone()}>

            <div className="modal-backdrop" style={{"backgroundColor": "RGB(0.0, 0.0, 0.0, 0.7)", "overflowY": "scroll"}} onClick={() => setToggle(false)}>
                    <div className="">
                        <div className="modal-content">
                            <div className="d-flex flex-row-reverse">
                                <button type="button" className="btn-close btn-close-white p-3 m-3" aria-label="Close" onClick={() => setToggle(false)} />
                            </div>
                            
                            <Document />

                            <div className="d-flex justify-content-center p-5">
                                <NavLink to={rootPath + "download"} className={({ isActive, isPending }) =>
                    isPending ? "pending " + defaultStyling : isActive ? "active " + defaultStyling : defaultStyling}>download</NavLink>   
                            </div>

                        </div>
                    </div>   
            </div>
        </div>
        </>
    )
}