import React from 'react'

const Query = () => {
    return (
        <>
            <div className='mx-auto py-16'>

                <div className='flex justify-center items-center'>

                    <section className='rounded-lg  bg-[#072B4A] w-auto h-[220px] max-w-7xl mx-auto'>

                        <div>
                            <h2 className='text-4xl font-bold text-white text-center'>
                                Want to know what we are up to?

                                <label class="input input-bordered flex items-end bg-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    class="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" class="grow" placeholder="Email" />
                            </label>
                                <br />
                                <h4 className='text-sm font-thin mt-6 text-white'>
                                    Subscribe to our newsletter.
                                </h4>
                            </h2>

                      
                        </div>


                    </section>


                </div>


            </div>
        </>
    )
}

export default Query
