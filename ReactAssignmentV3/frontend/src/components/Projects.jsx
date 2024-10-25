import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Projects = () => {
    const projects = [
        {
            title: "GoThruhike Website Redesign",
            description: "Thruhike is the ultimate platform for discovering and sharing your favorite places and products.  Inspire new experiences.",
            imageUrl: "projects1.jpg"
        },
        {
            title: "Gamezone Game Launcher",
            description: "Gamezone is a game launcher that connects you with your favorite games, friends, and gaming communities.                                                                ",
            imageUrl: "projects2.jpg"

        },
        {
            title: "Learn Here",
            description: "LearnHere is the platform that presents all the lessons from Beginner to Expert Level with live and recorded classes.",
            imageUrl: "projects3.jpg"

        }
    ];
    return (
        <>

            <div className="mx-auto py-16">


                <div className="flex justify-center items-center mt-1">
                    <h2 className="text-4xl font-bold text-black text-center">
                        Projects We’d Hang on <span className="text-[#2eb8a2]">  Our Refrigerator</span>
                        <br />

                        <h4 className='text-sm font-thin mt-6'>
                            Discover our latest work, showcasing innovative solutions and successful collaborations that highlight our expertise in delivering high-quality software development projects.</h4>
                    </h2>
                    <br />

                    <div className="flex justify-center mt-8 px-10">
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            See All ➡️
                        </button>
                    </div>
                </div>

                <section>

                    <div className='rounded-lg  text-black h-[484px] max-w-7xl mx-auto'>
                        <Swiper

                            slidesPerView={1}
                            spaceBetween={30}
                            //  loop={true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    //  spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    //  spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    //  spaceBetween: 50,
                                },
                            }}

                            className="mt-10"
                            modules={[Pagination]}
                        >

                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className='bg-white'>
                                        <div className="relative">
                                            <img src={project.imageUrl} alt={project.title} className="w-full h-[300px] object-cover rounded-md mb-4" />


                                            <button className=" p-4 rounded-full shadow-lg flex absolute inset-0 items-center justify-center">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="48" height="48" rx="24" fill="#F2FBF9" fill-opacity="0.4" />
                                                    <path d="M19.2163 13.7092C17.275 12.5956 15.7012 13.5078 15.7012 15.7451V32.2548C15.7012 34.4942 17.275 35.4053 19.2163 34.2928L33.6467 26.0171C35.5886 24.9032 35.5886 23.0984 33.6467 21.9847L19.2163 13.7092Z" fill="white" />
                                                </svg>

                                            </button>
                                        </div>
                                        <h3 className="text-sm font-bold text-[#072B4A] mt-6">{project.title}</h3>


                                        <h3 className=" text-justify text-sm  mt-5 text-[#1E293B] ">{project.description}</h3>
                                        <p className='py-6'> <a href="" className='text-sm font-bold text-[#0C98EB] '>View Project {'>'}</a></p>
                                        {/* <p className=" text-gray-600">{feedback.designation}</p> */}
                                        {/* <a href={project.link} className="text-blue-500 mt-4 inline-block"></a> */}

                                    </div>



                                </SwiperSlide>
                            ))}
                        </Swiper>



                    </div>



                </section>


            </div>


        </>
    )
}

export default Projects
