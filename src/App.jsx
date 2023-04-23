import { Outlet } from 'react-router-dom'
import Nav from './Nav';

function App() {

  return (
    <>
      <div className="container-fluid d-flex ">
        <h1 className="p-3 m-0">CV Builder</h1>
      </div>
      
      <div className="container-fluid bg-primary p-1" />
      <Nav />
      
      <Outlet />
    </>
  )
}

export default App