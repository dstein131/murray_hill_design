import React from 'react'
import Header from './header'
import Home from './home'
import {
    Routes,
    Route,
  } from "react-router-dom";
import DevPort from './devPort';
import UxUiPort from './uxuiport';
import Resume from './resume';

function Index() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/devport" element={<DevPort />}> </Route>
        <Route path="/uxuiport" element={<UxUiPort />}> </Route>
        <Route path="/resume" element={<Resume />}> </Route>
        
       
    </Routes>
    </>
  )
}

export default Index