import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import { rootPath } from './Constants.js';
import { Form } from './Form.jsx';
import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Download from './Download.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route className="hidden" element={<App />}>
          <Route path={rootPath} element={<Home />} />
          <Route path={rootPath + 'form'} element={<Form />} />
          <Route path={rootPath + 'download'} element={<Download />} />
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
