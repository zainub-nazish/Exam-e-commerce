import React from 'react'
import Image from 'next/image'

const Paraimage = () => {
    return (

        <div className="w-full h-[277px]  flex justify-center mt-8">
            <div className=" bg-gray-400 h-full sm:w-full md:w-[80%] flex justify-between">
                {/* left */}



                <div>
                    <Image src={"/images/bluesofa.png"} width={250} height={200} alt="sofa"
                        className="ml-20"></Image>
                </div>




                {/*  */}

                <div className="ml-8 mt-14 mb-20 text-white">
                    
                 

                    {/* text */}

                    <div className="w-[550px] h-[550]">
                        <h1 className="text-2xl  font-bold ml-10 mb-[30px]"> Unique Features Of leatest &
                           <br/> Trending Poducts  </h1>
                       <ul className='mb-15'>
                        <li> All frames constructed with hardwood solids and laminates</li>
                        <li> Reinforced with double wood dowels, glue, screw - nails corner 
                        blocks and machine nails</li>
                        <li>Arms, backs and seats are structurally reinforced  </li>
                       </ul>
                        <button className="bg-[#FB2E86] font-bold ml-5 mb-14"> Add To Cart</button>
                      
                    </div>
                </div>
              




            </div>
        </div>



    )
}

export default Paraimage
