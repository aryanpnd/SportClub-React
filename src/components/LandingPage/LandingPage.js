import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import sportsVector from '../assets/sportsVector.png'
import footballLogo from '../assets/football.png'
import basketball from '../assets/basketball.png'
import heroSectionImage1 from '../assets/heroSectionImage1.jpg'



export default function LandingPage(props) {
  return (
    <>
      <div className={` bg-${props.mode}`}>
      
      
        <img className={`basketball h-20 relative inline-flex items-center justify-center  overflow-hidden text-sm font-medium  rounded-lg group bottom-5 left-5`} src={basketball} alt="" />

        <header className={`flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-${props.mode}`}>

          

          <section className="text-gray-600 body-font " >
            <div className="container mx-auto flex md:flex-row flex-col items-center">
              <div id="LandingPageAnimation" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img  className="object-cover object-center rounded" alt="hero" src={sportsVector} />
              </div>

              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 id="LandingPageAnimation" className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-${props.darkmodeText} md:text-5xl lg:text-6xl text-${props.darkmodeText}`}>Get back to <span className='underline underline-offset-4 bg-gradient-to-r from-lime-400 to-lime-500'>growth</span>  with <span className="text-blue-600 dark:text-blue-500">the world's #1 </span>
                  <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>SportsClub.</span> </h1>

                <h1 id="LandingPageAnimation" className={`title-font sm:text-2xl text-xl mb-4 font-medium text-${props.darkmodeText}`}>Winning is a habit,
                  <br className="hidden lg:inline-block" /> <span className='bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent'> SUCCESS IS A CHOICE</span>
                </h1>


                <div className="flex justify-center">

                  <a href="#section2" className="learnMoreBtn relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                    <span className="relative">Learn More</span>
                  </a>
                </div>


              </div>
            </div>
          </section>

        </header>

        <section id='section2' className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">


          <figure className="mx-auto max-w-screen-md text-center">

            <svg aria-hidden="true" className="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>

            <blockquote>
              <p className="text-lg md:text-4xl italic font-medium text-gray-900 dark:text-white ">Our website offers a variety of membership options, each with its own unique benefits. To join, simply select the membership that best suits your needs and complete the online registration form. We hope you enjoy your experience at SportsClub!</p>
            </blockquote>

            <figcaption className="flex justify-center items-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Team</cite>
                <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">SportsClub.pvt</cite>
              </div>
            </figcaption>

            <figcaption className="flex justify-center items-center mt-6 space-x-3">
              <Link to="/pricing" className="relative px-6 py-3 font-bold text-white rounded-lg group">
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen" />
                <span className="relative">View Pricing

                </span>

              </Link>
            </figcaption>


          </figure>

        </section>


        {/* ---------------- statistics Section ----------------- */}

        <section className={`text-${props.darkmodeText} body-font`}>
          <div className="container px-5 py-24 mx-auto">

            <div className="flex flex-col text-center w-full mb-20 ">
              <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-${props.darkmodeText} underline underline-offset-8`}>Our All Time Stats</h1>
            </div>


            <div className="flex flex-wrap -m-4 text-center justify-center">

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-2xl">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9" />
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl">2.7K</h2>
                  <p className="leading-relaxed">Memberships</p>
                </div>
              </div>


              <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-2xl">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl">1.3K</h2>
                  <p className="leading-relaxed">Current Members</p>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-2xl">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl">9</h2>
                  <p className="leading-relaxed">Places</p>
                </div>
              </div>


            </div>
          </div>
        </section>


        {/* --------------- FOOTER   -------------------- */}


        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">

          <div className="md:flex md:justify-between">

            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex items-center">
                <img src={footballLogo} className="mr-3 h-8" alt="Sportsclub Logo" />
                <span className="ml-3 text-xl"><h1 className=' logoText text-xl bg-gradient-to-r from-purple-500 to-pink-500'>SPORTSCLUB</h1></span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>

            </div>


          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">

            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://Sportsclub.com/" className="hover:underline">Sportsclub™</a>. All Rights Reserved.
            </span>

            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
              </a>

            </div>
          </div>
        </footer>


      </div>




    </>
  )
}

