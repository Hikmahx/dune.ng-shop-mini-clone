import React from 'react'
import {bgImg} from "../data"


const Login = () => {
  return (
    <div style={{  background:'linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url('+ bgImg.img +'), #4d2f2f no-repeat', backgroundSize:'cover'}}
     className="wrapper w-full min-h-screen py-12 sm:py-8 flex items-center justify-center">
      <div className="wrapper w-5/6 sm:w-2/3 sm:w-1/2 lg:w-2/5 container py-16 px-8 sm:px-12 bg-white">
        <h1 className="title text-xl sm:text-2xl lg:text-3xl mb-5 font-bold">SIGN IN</h1>
        <form className="flex flex-wrap justify-between gap-x-1">
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="username or email"/>
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="password"/>
          <button className="w-1/2 mt-4 mx-auto border-black border-2 border-solid py-2 px-12 flex items-center justify-center hover:bg-black hover:text-white">LOGIN</button>
          <br />
          <br />
          <div className="links mt-5 flex flex-wrap justify-between w-full">
          <a className="border-b-2 border-solid border-transparent hover:border-black transition-color" href="/">FORGET PASSWORD?</a>
          <a className="border-b-2 border-solid border-transparent hover:border-black transition-color" href="/">CREATE NEW ACCOUNT</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
