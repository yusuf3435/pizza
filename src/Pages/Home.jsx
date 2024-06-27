import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../Assets/pizza.jpeg";
import '../Styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Perfect Pizza</h1>
            <p>Best Pizza on Earth</p>
            <Link to='/menu'>
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home