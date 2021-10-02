import { Send } from '@material-ui/icons'
import React from 'react'
import { newsImg } from '../data'

const Newsletter = () => {
  return (
    <div style={{ background:'url('+ newsImg.img +'), #4d2f2f no-repeat', backgroundSize:'cover'}}
     className= "relative w-full flex flex-col p-20 xl:px-60 max-w-96 gap-8 items-center justify-center mx-auto mb-8">
      {/* <img className="absolute inset-0" src= {newsImg.img} alt="newsletter"/> */}
      <div className="wrapper container">
        <h1 className="title text-3xl md:text-5xl text-white mb-6 text-center">Newsletter</h1>

        <div className="relative input-container  w-full mb-6">
          <input style={{borderBottom: '1px solid rgb(172, 62, 33)'}} type='email' placeholder="YOUR EMAIL ADDRESS" 
          className="relative placeholder-gray-500 w-full  text-white bg-transparent focus:outline-none pb-5"/>
          <button className="text-white absolute top-0 right-0">
            <Send/>
          </button>
        </div>

        <p className="desc text-white text-2xl mb-6 font-light italic">
        Subscribe to be the first to know about discounts, tutorial videos,
         blog posts, new products and much more
        </p>
      </div>
    </div>
  )
}

export default Newsletter
