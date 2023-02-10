import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import loginVectorBg from '../assets/loginVector.png'

export default function Login(props) {

  return (
    <>

      <div className="relative min-h-screen flex ">

        <div className={`flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 `}>

          <div className={`sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-${props.darkmodeGradient} text-white bg-no-repeat bg-cover relative` } >

            <img className="absolute z-0 object-contain loginAnim2 " src={loginVectorBg} alt="" />

          </div>



          <div className={`md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-${props.mode2} `}>
            
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="loginAnim LoginText mt-6 text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  LOGIN
                </h2>

              </div>

              <div className="text-center items-center justify-center	">

              <button type="button" className="loginAnim text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z" /></svg>
                Sign in with Facebook
              </button>
              <button type="button" className="loginAnim text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                Sign in with Google
              </button>

              </div>


              <div className="flex items-center justify-center space-x-2">
                <span className={`h-px w-16 bg-${props.darkmodeText}`} />
                <span className={`text-${props.darkmodeText} font-normal`}>or continue with</span>
                <span className={`h-px w-16 bg-${props.darkmodeText}`} />
              </div>


              <form className=" loginAnim mt-8 space-y-6" action="#" method="POST">


                <div className="relative">
                  <div class={`w-full rounded-2xl bg-transparent px-4 ring-2 ring-${props.darkmodeText} focus-within:ring-blue-700`}>
                    <input type="email" placeholder="Email"
                      class={`my-3 w-full border-none bg-transparent text-${props.darkmodeText} outline-none focus:outline-none`} />
                  </div>
                </div>

                <div className="mt-8 content-center">
                  <div class={`w-full rounded-2xl bg-transparent px-4 ring-2 ring-${props.darkmodeText} focus-within:ring-blue-700`}>
                    <input type="text" placeholder="Password"
                      class={`my-3 w-full border-none bg-transparent text-${props.darkmodeText} outline-none focus:outline-none`} />
                  </div>
                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center">

                    <input type="checkbox" className=" h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                    <label htmlFor="remember_me" className={`ml-2 block text-sm text-${props.darkmodeText}`}>
                      Remember me
                    </label>

                  </div>

                  <div className="text-sm">
                    <a href="#" className=" text-indigo-400 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>

                </div>

                <div>

                  <Link to="/dashboard" type="submit" className=" w-full justify-center text-center rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"> Login </Link>

                </div>

                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">

                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className={`text-${props.darkmodeText} font-normal`}>Don't have an account?</span>
                  </div>

                  <Link to="dashboard" className=" w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">Sign up </Link>

                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </>
  )

}
