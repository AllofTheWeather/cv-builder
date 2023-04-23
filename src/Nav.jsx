import { NavLink } from "react-router-dom"
import { rootPath } from "./Constants"

export default function Nav() {

  let defaultStyling = "nav-link"

  return (
    <nav className="container-fluid border-bottom">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to={rootPath} className={({ isActive, isPending }) =>
          isPending ? "pending " + defaultStyling : isActive ? "active " + defaultStyling : defaultStyling}>home</NavLink>          
        </li>
        <li className="nav-item">
          <NavLink to={rootPath + "form"} className={({ isActive, isPending }) =>
          isPending ? "pending " + defaultStyling : isActive ? "active " + defaultStyling : defaultStyling}>form</NavLink>          
        </li>
        <li className="nav-item">
          <NavLink to={rootPath + 'about'} className={({ isActive, isPending }) =>
          isPending ? "pending " + defaultStyling : isActive ? "active " + defaultStyling : defaultStyling}>about</NavLink>           
        </li>
      </ul>
      
    </nav>
  )
}