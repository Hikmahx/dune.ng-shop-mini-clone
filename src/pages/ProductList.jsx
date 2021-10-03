import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-center font-bold text-2xl mt-20">Products</h1> 
      <div className="wrapper mt-8 md:mt-0 px-12 md:px-0 flex flex-col md:flex-row gap-6 justify-between">
        <div className="md:m-20 filter">
          <span className="font-bold text-xl mr-10">Filter  Products:</span>
          <select className="p-2 bg-gray-200">
            <option className="bg-white">products</option>
            <option className="bg-white">Milk Chocolate</option>
            <option className="bg-white">55% Cocoa Dark Chocolate</option>
            <option className="bg-white">70% Cocoa Dark Chocolate</option>
          </select>
          </div>
        <div className="md:m-20 sort">
          <span className="font-bold text-xl mr-10">Sort Products:</span>
          <select className="p-2 bg-gray-200" name='sortBy'>
            <option className="bg-white">Alphabetically, A-Z</option>
            <option className="bg-white">Alphabetically, Z-A</option>
            <option className="bg-white">Price, low-high</option>
            <option className="bg-white">Price, high-low</option>
          </select>
          </div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList
