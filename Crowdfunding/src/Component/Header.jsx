import { useState } from 'react'
import './Header.css';
import search from "../assets/images/search.png";
import crowdfunding1 from "../assets/images/crowdfunding1.png";

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <div class="image-container">
            <img src={crowdfunding1} alt="Logo"></img>
          </div>
          <div class="link-container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Start a free fundraiser</a></li>
                    <li><a href="#">How it Works</a></li>
                    <li><a href="#">Top Fundraisers</a></li>
                </ul>
            </div>
            <button class="contact-us">Contact Us</button>
            <div class="search-container">
                <input type="search" placeholder="Search here" class="search-input bg-white"></input>
                <img src={search} alt="Search" class="search-icon"></img>
            </div>
            <div class="login-signup-container">
                <button class="login-button">Login</button>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Header