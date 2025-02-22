// import { useState } from 'react'
// import './Header.css'

import About from "../Component/about";
import Banner from "../Component/Banner"
import Category from "../Component/Category"
import Footer from "../Component/Footer";
import Header from "../Component/Header"
import './Home.css';
function Index() {
//   const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <Category />
    <About />
    <Footer />
    </> 
  )
}

export default Index