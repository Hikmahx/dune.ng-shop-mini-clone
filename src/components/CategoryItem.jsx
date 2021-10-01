import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className="flex-1 relative">
      <div className="img-wrapper">
        <img className="object-cover h-full w-full" src={item.img} alt={item.alt}/>
      </div>
      <div className=" text-white info-container w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center bg-pink">
        <h1 className="font-bold text-xl">{item.title}</h1>
        <button className="border-none bg-white text-gray-500 font-semibold mt-4 px-4 py-2">SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem
