import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import WelcomePage from './components/WelcomePage/WelcomePage';

const router = createBrowserRouter([
  {
    Path: "/sp-advertising-demo3/",
  element:<Home/>,
  children:[
    {
      path:"/sp-advertising-demo3/about-me",
      element:<AboutMe/>
    },
    {
      path:"/sp-advertising-demo3/services",
      element:<WhatWeDo/>
    },
    {
      path:"/sp-advertising-demo3/welcome-page",
      element:<WelcomePage/>
    },
    
  ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);