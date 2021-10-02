import React from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'

const Product = ({item}) => {

  return (
    <div className="wrapper m-3 shadow flex items-center justify-center flex-1 relative w-80 h-88 lg:w-80 h-80">
      <img style={{height:'inherit'}} className="object-contain" src={item.img} alt={item.alt} />
      <div className="info-container bg-gray-500 opacity-0 transition-all hover:opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="icon-container p-2 mx-2 cursor-pointer rounded-full text-black bg-white hover:text-white hover:bg-black transition-all">
          <ShoppingCartOutlined/>
        </div>
        <div className="icon-container p-2 mx-2 cursor-pointer rounded-full text-black bg-white hover:text-white hover:bg-black transition-all">
          <SearchOutlined/>
        </div>
        <div className="icon-container p-2 mx-2 cursor-pointer rounded-full text-black bg-white hover:text-white hover:bg-black transition-all">
          <FavoriteBorderOutlined/>
        </div>
      </div>
    </div>
  )
}

export default Product
