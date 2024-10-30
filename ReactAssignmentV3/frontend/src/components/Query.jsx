import React from 'react'

const Query = () => {
    return (
        <>
            <div className='mx-auto py-16'>

                <div className='flex justify-center items-center'>

                    <div className='rounded-lg  bg-[#072B4A] w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>

                        <div>
                            <h2 className='text-2xl font-bold text-white text-center'>
                                Want to know what we are up to?

                              
                            
                                <h4 className='text-sm font-thin mt-4 text-white'>
                                    Subscribe to our newsletter.
                                </h4>
                            </h2>
                        </div>

                        <div className='mt-4 ml-28 '>
                            <form action=""className=''>

                        <input type="text" className="bg-white px-6 py-3"  placeholder="Enter Your Email" />


                        <button className="px-6 py-3 ml-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"> Subscribe </button>

                        </form>
                        
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Query
