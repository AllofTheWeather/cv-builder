import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import './index.css'
import State from './State.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<State />}>

    </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
