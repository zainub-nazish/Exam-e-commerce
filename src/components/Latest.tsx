import React from 'react'
import Image from 'next/image'

const Latest = () => {
  return (
    <div>
      <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
        <div className="w-[80%] h-full">



          {/* Top Section */}
          <div>

            <div>

              <p className="text-3xl font-bold mt-5 text-center justify-center items-center">Leatest Products </p>

            </div>
            {/* link  */}

            <div>
              <ul className='flex gap-10 text-center justify-center items-center '>
                <li className='text-[#FB4997]'>New Arrival </li>
                <li>Best Seller </li>
                <li>Featured </li>
                <li> Special Offer</li>
              </ul>
            </div>
          </div>





          {/* Products Section */}
          <div className="flex flex-wrap sm:ml-20 sm:items-center sm:flex-col md:flex-row   justify-between items-center mt-7 gap-5">
            {/* Box 1 */}
            <div className="w-[30%] flex flex-col items-center">
              <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                <Image src="/images/brown.png" width={150} height={100} alt="product-1" />
              </div>
              <div className="flex-row">
                <p>Comfort Handy Craft</p>
                <a>$42.00</a>
                <a className='text-[#FB2448]'> $65.00</a>
              </div>

            </div>

            {/* Box 2 */}
            <div className="w-[30%] flex flex-col items-center">
              <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                <Image src="/images/yellow.png" width={150} height={100} alt="product-2" />
              </div>
              <div className="flex-row">
                <p>Comfort Handy Craft</p>
                <a>$42.00</a>
                <a className='text-[#FB2448]'> $65.00</a>

              </div>
            </div>

            {/* Box 3 */}
            <div className="w-[30%] flex flex-col items-center">
              <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                <Image src="/images/white.png" width={150} height={100} alt="product-3" />
              </div>
              <div className="flex-row">
                <p> Comfort Handy Craft</p>
                <a>$42.00</a>
                <a className='text-[#FB2448]'> $65.00</a>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Latest
