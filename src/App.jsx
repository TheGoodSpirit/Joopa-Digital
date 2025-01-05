import { useState } from 'react';
import React from 'react';
import Header from './components/global/header.jsx';
import Footer from './components/global/footer.jsx';
import Section from './components/global/section.jsx';
import './index.css';

function App() {
  return (
    <>
      {/* global component */}
      <Header />



      {/* Section component */}
      <Section name={"home"} />
      <Section name={"about"} />



      {/* global component */}
      <Footer />
    </>
  );
}

export default App;
