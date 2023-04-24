import { NavLink } from "react-router-dom";
import { rootPath } from "./Constants.js";

export default function Home() {
    return (
        <div className="container">
            <div className="hero p-5">
                <div className="row pt-5 pb-5">
                    <div className="col">                      
                        <h1 className="display-1">Get noticed & get hired.</h1>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="containe d-flex justify-content-center flex-column">
                        <h1 className="display-1 text-center text-success">✓</h1>
                        </div>
                        
                    </div>
                </div>
                <div className="row pt-5 pb-5">
                    <div className="col">
                        <h5 className="">The easiest way to create a proffessional looking CV online.</h5>
                        
                    </div>
                    <div className="col">
            
                    </div>
                </div>
                <div className="col-12 p-5">
                    <div className="container d-flex justify-content-center">
                      <NavLink to={rootPath + "form"} className="btn btn-primary">Fill in the form</NavLink>     
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}