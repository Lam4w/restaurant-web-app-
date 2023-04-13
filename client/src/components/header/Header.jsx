import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'

export default function Header() {
    const userId = useSelector((state) => state.user);
    const ID = userId._id;
    console.log(ID);
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
                    {ID != null ? (
                        <div className='dropdown'> 
                            <Link to="/menu"><button>ORDER HERE</button></Link>
                            <div className='avatar-dropdown'>
                                <label htmlFor="navdrop" class="img-avatar"><img src="/assets/images/avatar.png" alt="" /></label>
                                <input type="checkbox" id='navdrop' />
                                <ul className='nav-list'>
                                    <li className='nav-item'><Link to="/user">Profile</Link></li>
                                    <li className='nav-item'>Log out</li>
                                </ul>
                            </div>
                        </div>
                    ):(
                        <Link to="/login">
                        <button>LOGIN</button>
                        </Link>
                    )}
                   
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
