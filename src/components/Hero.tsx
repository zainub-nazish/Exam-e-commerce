import React from 'react'
import Image from 'next/image'
import Images from 'next/image'

const Hero = () => {
    return (

        <div>

            <main className="w-full h-[450px] sm:mt-[48px] flex justify-center items-center pr-60px  ">
                <div className="flex w-[80%] flex-col sm:flex-col-reverse md:flex-row justify-between items-center ml-40 mt-20">
                    {/* left */}
                    <div className="space-y-5">
                         {/* <Image src={"/images/bell.png"} width={20} height={20} alt='bell' className='w-[100px] h-[100px] ml-20px '></Image> */}
                        <p> Best Furniture For Your Castle....</p>
                        <h1 className="font-extrabold text-3xl size-53px lh-[81.98px] font-josefin Sans"> New Furniture Collection <br/> Trends in 2020 </h1>
                        <p className='font-lato size-16px w-[644px] h-[140px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.

                        </p>
                        <button className="mb-30 bg-[#FB2E86] sm:mb-[20px] m-4 p-4"> Shop Now</button>

                    </div>

                    {/* right */}
                    <div className="flex md:w-[90%] h-[50%] bg-repeat-round  justify-between items-end p-3">
                        <Image src={"/images/chair1.png"}
                            width={100}
                            height={100}
                            alt="hero"
                            className="w-[270px] h-[270px] pl-3"
                        ></Image>
                    </div>
                </div>
            </main>


            {/* card [Featured Products]  11*/}
            {/* parent div */}



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
                                <Image src={"/images/kursi1.png"} width={100} height={100} alt="cc"></Image>
                            </div>
                            {/* title */}
                            <div className="flex flex-col pt-3">
                                <span className=" font-bold"> Cantilever chair</span>
                                <p>Code - Y523201 </p>
                                <span className="font-bold">$42.00 </span>
                            </div>
                        </div>
                        {/*  stop */}

                        {/* start */}

                        <div>
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src={"/images/kursi2.png"} width={150} height={100} alt="game"></Image>
                            </div>

                            <div>
                                {/* title */}
                                <div className="flex flex-col pt-3">
                                    <span className=" font-bold">Cantilever chair </span>
                                    <p>Code - Y523201  </p>
                                    <span className="font-bold">$42.00  </span>
                                </div>
                            </div>

                        </div>

                        {/* stop */}

                        {/* start */}

                        <div>
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src={"/images/kursi3.png"} width={150} height={100} alt="game"></Image>
                            </div>
                            <div>
                                {/* title */}
                                <div className="flex flex-col pt-3">
                                    <span className=" font-bold"> Cantilever chair</span>
                                    <p> Code - Y523201  </p>
                                    <span className="font-bold"> $42.00 </span>
                                </div>
                            </div>
                        </div>

                        {/* stop */}



                        {/* start */}

                        <div>
                            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                                <Image src={"/images/kursi4.png"} width={150} height={100} alt="game"></Image>
                            </div>
                            <div>
                                {/* title */}
                                <div className="flex flex-col pt-3">
                                    <span className=" font-bold"> Cantilever chair</span>
                                    <p>Code - Y523201  </p>
                                    <span className="font-bold"> $42.00 </span>
                                </div>
                            </div>
                        </div>

                        {/* stop  featured product*/}
                        




                    </div>

                </div>


            </div>

            



            
        </div>

    )
}

export default Hero
