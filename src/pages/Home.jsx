import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
    )
}

export default Home
