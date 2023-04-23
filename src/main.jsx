import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import State from './State.jsx';
import About from './About.jsx';
import { rootPath } from './Constants.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route path={rootPath} element={<Home />} />
        <Route path={rootPath + 'form'} element={<State />} />
        <Route path={rootPath + 'about'} element={<About />} />    
      </Route>

    </>
    
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
