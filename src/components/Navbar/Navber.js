import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import football from '../assets/football.png'

export default function Navber(props) {

    return (
        <>

            <header id='BounceAnimationComponents'>
            
                {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" id='BounceAnimationComponents'> */}

                <nav className={`bg-${props.mode} px-2 sm:px-4 py-2.5 ${props.mode}:bg-gray-900  w-full z-20 top-0 left-0 `}>

                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <Link to="/landing" className="flex items-center">
                            <span className="ml-3 text-xl"><h1 className=' logoText text-xl bg-gradient-to-r from-purple-500 to-pink-500'>SPORTSCLUB</h1></span>
                            <img className='logoAnim h-14' src={football} />
                        </Link>
                        

                            
                        <Link className="flex md:order-2">


                            <Link to="login" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-600 rounded-full shadow-md group transform active:scale-y-75 ">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full 
                                group-hover:bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </span>
                                <span className={`absolute flex items-center justify-center w-full h-full text-${props.darkmodeText} transition-all duration-300 transform group-hover:translate-x-full ease`}>Login</span>
                                <span className="relative invisible">Login</span>
                            </Link>

                            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                            </button>

                        </Link>


                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

                            <ul className={`flex flex-col mt-4 text-${props.darkmodeText} md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium `}>

                                <li>
                                    <Link to="dashboard" className=" block navigations transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300" >Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="pricing" className="block navigations transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="services" className="block navigations transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">Services</Link>
                                </li>
                                <li>
                                    <Link to="contactus" className="block navigations transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">Contact US</Link>
                                </li>
                                <li>
                                    <Link to="aboutus" className="block navigations transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">About US</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>





                {/* 
                </div> */}
            </header>


        </>
    )
}
