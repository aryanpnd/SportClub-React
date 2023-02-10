import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState, useEffect } from 'react';
import profilelogo from '../assets/user.png'
import logo from '../assets/football.png'


export default function Navber(props) {
    // const [sticky, setsticky] = useState('sticky')
    // const [stickyNav, setStickyNav] = useState(false);

    // const handleScroll = () => {
    //   window.pageYOffset >= 100 ? setStickyNav(true) : setStickyNav(false)  
    // }

    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.addEventListener('scroll', handleScroll);
    // })



    return (
        <>
            <header class={`mainNavber bg-${props.mode}`} >
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" id='BounceAnimationComponents'>

                    <Link to="landing" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span class="ml-3 text-xl"><h1 className=' logoText text-xl bg-gradient-to-r from-purple-500 to-pink-500'>SPORTSCLUB</h1></span>
                    </Link>
                    <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-${props.darkmodeText} text-base ` } >
                        <Link className="navigations p-3 mr-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" to="dashboard">Dashboard</Link>
                        <Link className="navigations p-3 mr-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 " to="pricing">Pricing</Link>
                        <Link className="navigations p-3 mr-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" to="contactus">Contact US</Link>
                        <Link className="navigations p-3 mr-5 " to="aboutus">About US</Link>
                    </nav>


                    <Link className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none  shadow-lg transform active:scale-y-75 transition-transform flex " to="login">Login</Link>


                    <div className=" relative inline-block w-10 mb-5align-middle select-none transition duration-1000 ease-in ml-5 border ">
                        
                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onClick={props.toggleMode} />
                        
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
                    </div>

                </div>
            </header>
        </>
    )
}
