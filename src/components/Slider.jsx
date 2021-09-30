import React, { useState } from 'react'
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons"
import {sliderItems} from '../data'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction)=>{
    if(direction === 'left'){
      setSlideIndex(slideIndex >0 ? slideIndex-1 : 2)
    }else{
      setSlideIndex(slideIndex <2 ? slideIndex+1 : 0)
    }
  }

  return (
    <div className="overflow-hidden w-full h-screen flex justify-start items-center relative my-4 py-2">
      <div className=" left
        absolute z-20 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center
        top-0 bottom-0 m-auto left-10 cursor-pointer opacity-50
        "
        onClick={()=>handleClick('left')}
        >
        <ArrowLeftOutlined/>
      </div>
      <div style={{transform:'translateX('+ slideIndex *-100 + 'vw)', transition: 'all 1s ease'}} className="wrapper h-full flex">
        {sliderItems.map((item) => (
          <div key= {item.id} className=" slide flex items-center justify-center w-screen h-screen">
            <div className="img-container pl-4 lg:pl-12 flex items-center justify-center flex-1 h-full">
              <img className="my-auto" src={item.img} alt={item.alt}/>
            </div>
            <div className="info-container pr-4 lg:pr-12 flex-1">
              <h1 className="title text-bold text-2xl">
              {item.title}
            </h1>
              <p className="desc max-w-sm flex-wrap italic my-12">
                {item.desc}
              </p>
              <button className="text-semi-bold">{item.more}</button>
            </div>
          </div>
        ))}
        
      </div>    
      
      <div className=" right
        absolute z-20 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center
        top-0 bottom-0 m-auto right-10 cursor-pointer opacity-50
        "
        onClick={()=>handleClick('right')}
        >
        <ArrowRightOutlined/>           
      </div>
    </div>
  )
}

export default Slider
