import React from 'react';

const Service = () => {
  const services = [
    {
      title: "Software Development",
      description: "Relieve the Burden of software development and project management.",
      imgUrl: "photo1.jpg"
    },
    {
      title: "Web Development",
      description: "We offer One-Of-A-Kind web development solutions to businesses all around the world.",
      imgUrl: "photo2.jpg"
    },
    {
      title: "Mobile App Development",
      description: "Innovative solutions tailored to your needs, delivering seamless user experiences.",
      imgUrl: "photo3.jpg"
    },
    {
      title: "E-commerce Solution",
      description: "E-commerce websites need to be user-friendly, but attractive at the same time.",
      imgUrl: "photo4.jpg"
    },
    {
      title: "UI/UX Design",
      description: "Crafting interfaces that enhance user experiences, elevating brand engagement effortlessly.",
      imgUrl: "photo5.jpg"
    },
    {
      title: "API Integration",
      description: "Bridging platforms for effortless data flow, enabling enhanced operational efficiency.",
      imgUrl: "photo6.jpg"
    }
  ];

  return (
    <>
    <div className="container mx-auto py-8">
      <div className="flex justify-center items-center mt-14">
        <h2 className="text-4xl font-bold text-black text-center">
          Things We're <span className="text-[#2EB8A2]">Good At</span>
          <br />
        </h2>
      </div>

      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        
              <img 
                src={service.imgUrl} 
                alt={service.title} 
                className="w-full h-60 object-cover"
              />

       
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center  text-white p-4">
                <h3 className="text-xl font-semibold  mt-28">{service.title}</h3>
                <p className="text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">See All</button>
        </div>
      </section>
      </div>
    </>
  );
};

export default Service;
