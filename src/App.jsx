import React from 'react';
import Header from './components/global/header.jsx';
import Footer from './components/global/footer.jsx';
import Section from './components/global/section.jsx';
import './index.css';

function App() {
  const sections = [
    { name: "hero" },
    { name: "about" },
    { name: "services" },
    { name: "CTA" },
    { name: "How We Work" },
    { name: "Testimonials" },
    { name: "Contact Us"}
  ];

  return (
    <>
      <Header />
      {sections.map((section, index) => (
        <Section key={index} name={section.name} />
      ))}
      <Footer />
    </>
  );
}

export default App;
