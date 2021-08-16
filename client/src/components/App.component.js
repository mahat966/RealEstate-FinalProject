import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AppRouting } from './App.routing';
import 'react-toastify/dist/ReactToastify.css';



export const App = (props) => {
   
    return(
        <div>
        <AppRouting />
        <ToastContainer />
        </div>
    )
}



