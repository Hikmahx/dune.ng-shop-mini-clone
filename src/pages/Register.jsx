import React from 'react'
import {bgImg} from "../data"

const Register = () => {
  return (
    <div style={{  background:'linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url('+ bgImg.img +'), #4d2f2f no-repeat', backgroundSize:'cover'}}
     className="wrapper w-full min-h-screen py-12 sm:py-8 flex items-center justify-center">
      <div className="wrapper w-5/6 sm:w-2/3 sm:w-1/2 lg:w-2/5 container py-16 px-8 sm:px-12 bg-white">
        <h1 className="title text-xl sm:text-2xl lg:text-3xl mb-5 font-bold">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap justify-between gap-x-1">
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="Name" />
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="Last name"/>
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="username"/>
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="Email"/>         
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="password"/>
          <input className="w-full mb-2 px-2 py-3 border-b-2 border-solid focus:outline-none" placeholder="confirm password"/>
          <div className="agreement text-sm ">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button className="w-1/2 mt-4 mx-auto border-black border-2 border-solid py-2 px-12 flex items-center justify-center hover:bg-black hover:text-white">CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
