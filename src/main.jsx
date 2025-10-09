import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Game from './Game.jsx'
import RootLayout from './RootLayout.jsx';
import Home from './Home.jsx';
import Setting from './Setting.jsx';

const router=createBrowserRouter([{
  path:'/',
  element:<RootLayout/>,
  children:[{path:"/play",element:<Game/>},{path:"/",element:<Home/>},{path:"setting", element:<Setting/>}]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
