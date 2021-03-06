///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS

import React from 'react';

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./views/Home";

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////                                                                             SETUP

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////                                                                COMPONENTS & LOGIC

function App() {
  // return (
  //   <BrowserRouter>
  //     <Layout>
  //       <Routes>
  //         <Route path="/" element={<Home/>} />
  //       </Routes>
  //     </Layout>
  //   </BrowserRouter>
  // );
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App;
