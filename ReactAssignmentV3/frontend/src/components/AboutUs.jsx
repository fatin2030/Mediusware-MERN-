import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#f0f7ff] py-16"> {/* Light blue background with padding */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8"> {/* Responsive flexbox container for layout */}
        
        {/* Left Side - Image with play button */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto"> 
          <img 
            src="thirdPageImage.png" 
            alt="Team Working" 
            className="w-full h-full object-cover rounded-lg" 
          /> 
          <div className="absolute inset-0 flex justify-center items-center"> 
            <button className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 transition"> 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-blue-500"
              > {/* SVG Play Icon */}
                <path fillRule="evenodd" d="M4.5 3.75a.75.75 0 011.138-.644l13.5 8.25a.75.75 0 010 1.288l-13.5 8.25A.75.75 0 014.5 20.25V3.75z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2"> {/* Responsive text content container */}
          <h2 className="text-3xl font-bold mb-4">
            A Little Bit <span className="text-[#2EB8A2]">About Us</span>
          </h2> {/* Heading with colored 'About Us' */}
          
          <p className="text-gray-700 mb-6"> {/* Paragraph text */}
            Incepted in 2015, Mediusware Ltd. has been serving as a leading IT Solution provider in USA & Bangladesh. Our aim is to help businesses all around the world by providing the digital solutions according to their need. Serving a number of renowned companies from the USA, UK, and many other countries, we have already created a wide range of satisfied clients!
          </p>

          {/* Stats Section */}
          <div className="flex gap-4 mb-6"> {/* Flexbox for stats layout */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-center"> {/* Stat box 1 */}
              <h3 className="text-2xl font-bold text-[#2EB8A2]">800+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center"> {/* Stat box 2 */}
              <h3 className="text-2xl font-bold text-[#2EB8A2]">100+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center"> {/* Stat box 3 */}
              <h3 className="text-2xl font-bold text-[#2EB8A2]">1,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4"> {/* Flexbox for buttons */}
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"> {/* Primary button */}
              Contact Us
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"> {/* Secondary button */}
              Company Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
