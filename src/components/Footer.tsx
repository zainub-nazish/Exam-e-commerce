import React from 'react'


const Footer = () => {
  return (
    <div>
      <div className="bg-gray-200 flex text-black mt-14 justify-evenly items-center h-[300px] sm:w-full">
            <div>
                <h1 className="text-2xl font-bold mb-10"> Hekto</h1>
                {/* sign up */}
                <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="border rounded-l-md px-3 py-1 focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-5 py-2  hover:bg-pink-600">
              Sign up
            </button>
          </div>
                <ul>

                    <li className="mt-4"> Contact Info</li>
                    <li className="mt-3">17 Princess Road, London, Greater London NW1 8JR, UK </li>
                    
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Catagories </h1>
                <ul>
                    <li className="mt-3"> Laptops & Computers </li>
                    <li className='mt-3'> Cameras & Photography  </li>
                    <li className="mt-3"> Smart Phones & Tablets</li>
                    <li className="mt-3"> Video Games & Consoles </li>
                    <li className='mt-3'> Waterproof Headphones</li>

                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Customer Care </h1>
                <ul>
                    <li className='mt-4'>My Account </li>
                    <li> Discount</li>
                    <li className="mt-4"> Returns</li>
                    <li className="mt-6">Orders History </li>
                    <li>Order Tracking </li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-6 ">Pages </h1>
                <ul>
                    <li className='mt-1'> Blog </li>
                    <li className="mt-1"> Browse the Shop</li>
                    <li className="mt-1"> Category</li>
                    <li className="mt-1">Pre-Built Pages </li>
                    <li className="mt-1">Visual Composer Elements  </li>
                    <li className="mt-1">WooCommerce Pages </li>
                </ul>

            </div>

            


             
            
        </div>
    </div>
  )
}

export default Footer

