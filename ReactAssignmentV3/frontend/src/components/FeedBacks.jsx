import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';  // Correct import
import 'swiper/css/pagination';

const FeedBacks = () => {

  const feedbacks = [
    {
      title: "Mediusware renewed our trust in outsourcing IT development in the USA.",
      name: "Jenny Wilson",
      designation: "CEO, Wilson & Co.",
      imageUrl: "feedbacks1.jpg"

    },
    {
      title: "Banking the unbanked with the help of Mediusware developers..",
      name: "Courtney Herry",
      designation: "CTO, Herry & Co.",
      imageUrl: "feedbacks2.jpg"

    },
    {
      title: "Our Digital Transformation Journey Fueled by Top-Tier IT Solutions by Mediousware Ltd",
      name: "Kristin Watson",
      designation: "Director, Watson & Co.",
      imageUrl: "feedbacks3.jpg"

    }
  ];
  return (
    <>
      <div className="mx-auto py-16">

        <div className="flex justify-center items-center mt-1">
          <h2 className="text-4xl font-bold text-black text-center">
            What the People <span className="text-[#2eb8a2]"> Are saying</span>
            <br />
            <h4 className='text-sm font-thin'>
              Explore success stories from clients across a range of industries, spanning from techpreneurs and start-ups to established enterprises.</h4>
          </h2>
          <br />
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

              {feedbacks.map((feedback, index) => (
                <SwiperSlide key={index}>
                  <div className='bg-white'>
                    <div className="relative">
                      <img src={feedback.imageUrl} alt={feedback.title} className="w-full h-[300px] object-cover rounded-md mb-4" />


                      <button className=" p-4 rounded-full shadow-lg flex absolute inset-0 items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="24" fill="#F2FBF9" fill-opacity="0.4" />
                          <path d="M19.2163 13.7092C17.275 12.5956 15.7012 13.5078 15.7012 15.7451V32.2548C15.7012 34.4942 17.275 35.4053 19.2163 34.2928L33.6467 26.0171C35.5886 24.9032 35.5886 23.0984 33.6467 21.9847L19.2163 13.7092Z" fill="white" />
                        </svg>

                      </button>
                    </div>
                    <h3 className="text-sm font-bold text-[#072B4A] mt-6">{feedback.title}</h3>


                    <h3 className="text-sm font-bold mt-3 text-[#1E293B]">{feedback.name}</h3>
                    <p className=" text-gray-600">{feedback.designation}</p>
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

export default FeedBacks
