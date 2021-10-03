import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { popularProducts } from '../data'
import { Add, Remove } from '@material-ui/icons'



const Product = () => {
  return (
    <div>
      <Navbar/>
      <div className="wrapper w-full p-20  px-12 lg:px-24 my-12 flex gap-8 items-center">
        <div className="img-container flex-1">
          <img className=" w-full fit-cover" src={popularProducts[2].img} alt={popularProducts[2].alt} />
        </div>
        <div className="info-container flex-1 flex flex-col gap-4">
          <h1 className="title text-2xl font-bold">DÙNE MILK CHOCOLATE, (100g x 18)</h1>
          <p className="desc">
            Taste the very smooth and creamy Dùne Milk Chocolate - Crafted
            in Nigeria using the finest West African cocoa and ingredients 
            to create a superior flavour.
          </p>
          <div className="price font-thin text-xl">₦11,700.00</div>
          <div className="add-container">
            <div className="amount-container flex items-center justify-start mb-4">
              <Remove/>
              <span className="amount w-12 h-12 rounded-10 border-2 border-solid flex items-center justify-center mx-4">1</span>
              <Add/>
            </div>
            <button className="border-2 border-solid border-black hover:bg-black hover:text-white transition-all py-3 px-12 font-thin text-xl">ADD TO CART</button>
          </div>
        </div>
      </div>

      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Product
