import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (

        <div className='header-wrapper'>
            <div className='header-entry'>
                <div className='navigation'>
                    <ul>
                        <li>
                            <Link to="">HOME</Link>
                        </li>
                        <li>
                            <Link to="">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="">SHOP</Link>
                        </li>
                        <li>
                            <Link to="/menu">MENU</Link>
                        </li>
                        <li>
                            <Link to="">CONTACT US</Link>
                        </li>
                    </ul>   
                </div>
                <div className='order-section'>
                    <Link to="/menu">
                        <button>ORDER HERE</button>
                    </Link>
                </div>
            </div>
            <div className="marquee1">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci odio, qui nam quisquam velit eos nemo doloresex laborum magni corrupti! Reprehenderit sequi!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci odio, qui nam quisquam velit eos nemo doloresex laborum magni corrupti! Reprehenderit sequi!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci odio, qui nam quisquam velit eos nemo doloresex laborum magni corrupti! Reprehenderit sequi!</p>
            </div>
        </div>
  )
}
