import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Achievement = () => {

    const achievements = [

        {
            imageUrl: "achievements1.png",
        },
        {
            imageUrl: "achievements2.png",
        },
        {
            imageUrl: "achievements3.png",
        },
        {
            imageUrl: "achievements4.png",
        }
    ];
    return (
        <>

            <div className="mx-auto py-16">


                <div className="flex justify-center items-center mt-1">
                    <h2 className="text-4xl font-bold text-black text-center">
                        Achievements  <span className="text-[#2eb8a2]">  & Awards</span>
                        <br />

                        <h4 className='text-sm font-normal mt-6 text-[#072B4A]'>
                            People know us for our top-notch work and great customer service, all of whom have expressed nothing <br /> but positive feedback about our services. Take a moment to see for yourself.</h4>
                    </h2>
                    <br />

                </div>


                <section className='rounded-lg  text-black w-auto h-[220px] max-w-7xl mx-auto'> 

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {achievements.map((achievements, index) => (
                            <div
                                key={index}
                                className="relative bg-white shadow-lg rounded-lg overflow-hidden  mt-12"
                            >
                                <img
                                    src={achievements.imageUrl}
                                    //   alt={service.title}
                                    className="w-auto h-[220px]  "
                                />


                            </div>
                        ))}
                    </div>






                </section>










            </div>


        </>
    )
}

export default Achievement
