import React from 'react'
import Image from 'next/image'

const Trending = () => {
  return (
    
      

      <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
                <div className="w-[80%] h-full">
                    {/* top side */}
                    <div>

                        <h2 className='text-4xl text-center '>Featured Products </h2>
                    </div>
                    {/* products */}
                    {/* container boxes */}
                    <div className="flex sm:ml-20 sm:items-center sm:flex-col md:flex-row justify-between mt-7">
                        {/*  */}
                        <div>
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src={"/images/tttw.png"} width={100} height={100} alt="cc"></Image>
                            </div>
                            {/* title */}
                            <div className="flex flex-col pt-3">
                                <span className=" font-bold"> Cantilever chair</span>
                              
                                <span className="font-bold">$26.00 </span>
                            </div>
                        </div>
                        {/*  stop */}

                        {/* start */}

                        <div>
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src={"/images/ttrr.png"} width={150} height={100} alt="game"></Image>
                            </div>

                            <div>
                                {/* title */}
                                <div className="flex flex-col pt-3">
                                    <span className=" font-bold">Cantilever chair </span>
                                   
                                    <span className="font-bold">$26.00  </span>
                                </div>
                            </div>

                        </div>

                        {/* stop */}

                        {/* start */}

                        <div>
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src={"/images/ttrw.png"} width={150} height={100} alt="game"></Image>
                            </div>
                            <div>
                                {/* title */}
                                <div className="flex flex-col pt-3">
                                    <span className=" font-bold"> Cantilever chair</span>
                                 
                                    <span className="font-bold"> $26.00 </span>
                                </div>
                            </div>
                        </div>

                        {/* stop */}



                        {/* start */}

                        <div>
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src={"/images/ttbr.png"} width={150} height={100} alt="game"></Image>
                            </div>
                            <div>
                                {/* title */}
                                <div className="flex flex-col pt-3">
                                    <span className=" font-bold"> Cantilever chair</span>
                                   
                                    <span className="font-bold"> $26.00 </span>
                                </div>
                            </div>
                        </div>

                        {/* stop  featured product*/}
                        




                    </div>

                </div>


            </div>



    
  )
}

export default Trending
