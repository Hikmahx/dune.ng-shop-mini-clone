import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {popularProducts} from '../data'
import { Add, Remove } from '@material-ui/icons'


const Cart = () => {
  return (
    <div>
      <Navbar/>
      <div className="wrapper min-h-screen px-12 py-4 lg:px-16 xl:px-24">
        <h1 className="text-2xl font-semibold uppercase text-center mb-6">Your Shopping Cart</h1>
        <div className="top flex items-center justify-center lg:justify-between flex-wrap m-5">
          <button className="mr-1 w-full sm:w-max mb-3 py-2 px-12 text-md lg:text-xl bg-white border-2 border-solid border-black hover:border-white hover:text-white hover:bg-gray-500 transition-color">CONTINUE SHOPPING</button>
          <button className="ml-1 w-full sm:w-max mb-3 lg:order-3 py-2 px-12 text-md lg:text-xl border-2 border-solid text-white bg-black hover:opacity-60 transition-opacity">CHECKOUT NOW</button>
          <div className="text flex-wrap">
            <span className="underline mx-5">Shopping Cart (4)</span>
            <span className="underline mx-5">Your Wishlist (0)</span>
          </div>
        </div>
        <div className="bottom flex justify-between">
          <div className="info w-3/4">
            <div className="product flex justify-between m-4">
              <div className="product-detail w-2/3 flex">
                <img src={popularProducts[0].img} alt={popularProducts[0].alt}
                  className="w-60 h-66" />
                <div className="details flex flex-col justify-around px-8 py-6">
                  <span className="product-name">
                    <b>Product:</b> Milk Chocolate
                  </span>
                  <span className="product-id">
                    <b>ID:</b> 125920
                  </span>
                  <span className="product-weight">
                    <b>Weight:</b> 1800g
                  </span>
                </div>
              </div>
              <div className="price-detail w-1/3 flex flex-col items-center justify-center">
                <div className="product-amount-container flex items-center  mb-8">
                  <Add/>
                  <div className="product-amount text-xl m-2">2</div>
                  <Remove/>
                </div>
                <div className="product-price text-2xl font-thin">₦4,500.00</div>
              </div>
            </div>

            <hr/>

            <div className="product flex justify-between m-4">
              <div className="product-detail w-2/3 flex">
                <img src={popularProducts[2].img} alt={popularProducts[2].alt}
                  className="w-60 h-66" />
                <div className="details flex flex-col justify-around px-8 py-6">
                  <span className="product-name">
                    <b>Product:</b> 70% Cocoa dark Chocolate
                  </span>
                  <span className="product-id">
                    <b>ID:</b> 348920
                  </span>
                  <span className="product-weight">
                    <b>Weight:</b> 1800g
                  </span>
                </div>
              </div>
              <div className="price-detail w-1/3 flex flex-col items-center justify-center">
                <div className="product-amount-container flex items-center  mb-8">
                  <Add/>
                  <div className="product-amount text-xl m-2">2</div>
                  <Remove/>
                </div>
                <div className="product-price text-2xl font-thin">₦4,500.00</div>
              </div>
            </div>
          </div>
          <div style={{minHeight:'50vh'}} className="summary w-1/4 border-2 border-solid border-gray-500 rounded py-12 px-5">
            <h1 className="font-extralight text-xl">ORDER SUMMARY</h1>
            <div className="summary-item my-8 flex justify-between">
              <span className="summary-text">Subtotal</span>
              <span className="summary-price">₦9000.00</span>
            </div>
            <div className="summary-item my-8 flex justify-between">
              <span className="summary-text">Estimated Shipping</span>
              <span className="summary-price">₦1000.00</span>
            </div>
            <div className="summary-item my-8 flex justify-between">
              <span className="summary-text">Shipping Discount</span>
              <span className="summary-price">-₦500.00</span>
            </div>
            <div className="summary-item my-8 flex justify-between text-xl font-bold">
              <span className="summary-text">Total</span>
              <span className="summary-price">₦9500.00</span>
            </div>
            <button className="w-full border-solid border-2 py-2 px-12 text-md text-white bg-black hover:opacity-60 transition-opacity">CHECKOUT NOW</button> 
          </div>
        </div>
      </div>
      <Footer/> 
    </div>
  )
}

export default Cart
