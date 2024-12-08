import React from 'react'
import Image from 'next/image'
const Box = () => {
    return (
        <div>
            <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
                <div className="w-[80%] h-full">
                    {/* Top Section */}


                    {/* Products Section */}
                    <div className="flex flex-wrap  sm:ml-20 sm:items-center sm:flex-col md:flex-row  justify-between items-center mt-7 gap-5">
                        {/* Box 1 */}
                        <div className="w-[30%] flex flex-col items-center">
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src="/images/bbbwt.png" width={150} height={100} alt="product-1" />
                            </div>
                            <div className="flex-row">
                                <p> Comfort Handy Craft</p>
                                <a>$42.00</a>
                                <a className='text-[#FB2448]'> $65.00</a>

                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="w-[30%] flex flex-col items-center">
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src="/images/bbblack.png" width={150} height={100} alt="product-2" />
                            </div>
                            <div className="flex-row">
                                <p> Comfort Handy Craft</p>
                                <a>$42.00</a>
                                <a className='text-[#FB2448]'> $65.00</a>

                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="w-[30%] flex flex-col items-center">
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src="/images/bbbw.png" width={150} height={100} alt="product-3" />
                            </div>
                            <div className="flex-row">
                            <p> Comfort Handy Craft</p>
                                <a>$42.00</a>
                                <a className='text-[#FB2448]'> $65.00</a>

                            </div>
                        </div>

                    </div>



                    {/* Heading  start*/}

                    <h1 className='text-center justify-center items-center  font-bold text-3xl mt-5 text-[#151875]'>What Shopex Offer! </h1>

                    {/* Heading end */}
                </div>
            </div>

        </div>
    )
}

export default Box
