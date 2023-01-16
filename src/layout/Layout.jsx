import React from 'react'
import AutoToTop from '../components/AutoToTop/AutoToTop'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './Layout.css'

const Layout = (props) => {
  return (
    <>
        <Navbar />
        <div className='content-layout'>
            {props.children}
        </div>
        <Footer />
        <AutoToTop />
    </>
  )
}

export default Layout