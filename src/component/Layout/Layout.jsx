import React from 'react'
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About'
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Layout = () => {

  return (
    <>
      <Header/>
      <Home/>
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout