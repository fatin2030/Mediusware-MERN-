import React from 'react';

const Contact = () => {
  return (
    <div className="mx-auto py-16 px-6 md:px-16 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="ceoPhoto.png"
            className="h-[228px] w-[228px] "
            alt="CEO"
          />
          <div className="bg-[#A5EADA4D] ml-2 ">
            <h2 className="text-2xl font-semibold text-gray-900">
              Md. Shahinur Rahman
            </h2>
            <p className="text-gray-600">Managing Director, Mediusware Ltd</p>
          </div>
          <p className="text-gray-600 text-center md:text-left">
            I'd be excited to talk with you about your projects or what you need.
            Fill in the form or send us an email to 
            <a href="mailto:info@mediusware.com" className="text-blue-500 ml-1">
              info@mediusware.com
            </a>.
          </p>
          <p className="text-gray-600 font-bold">Talk to you in less than 24 hours.</p>
          <div className="bg-[#F5FAFF] p-4 rounded-md">
            <h3 className="font-semibold">Book a call</h3>
            <p>Feel free to select a time at your convenience!</p>
            <a href="#book-call" className="text-blue-500 underline">Let’s Talk →</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="mt-8 md:mt-0 md:w-1/2 bg-[#F5FAFF] p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Got an idea? We’ve got the skills.</h2>
          <p className="text-gray-600 mb-6">
            Fill out our contact form and we’ll get in touch!
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border bg-white border-gray-300 rounded-md p-2"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 bg-white">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                placeholder="Enter Your Company Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="query" className="block text-gray-700">
                Deep details about your query (Optional)
              </label>
              <textarea
                id="query"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                rows="4"
                placeholder="Tell us more about your query"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
