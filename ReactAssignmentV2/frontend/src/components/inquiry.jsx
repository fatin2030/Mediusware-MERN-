import React from 'react'


const Inquiry = () => {
    return (
        <>
            <div className="max-w-screen-lg   mx-auto p-8 bg-gray-100 ">
                <h2 className="text-3xl font-bold mb-6">Drop Us a <span className=" text-green-500">Line</span></h2>
                <form className='bg-gray-100'>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <b>Name* </b> :
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered input-success w-full"
                                required
                            />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <b>Email* </b> :
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="input input-bordered input-success w-full"
                                required
                            />
                        </label>
                    </div>

                    <div className="divider divider-horizontal"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">
                                    <b>Phone(Optional): </b> </span>
                            </div>


                            <input
                                type="text"
                                placeholder="Enter Your Phone Number"
                                className="input input-bordered input-success w-full " />


                            <div className="label">
                            </div>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <b>Company Name(Optional):</b>    :</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Your Company Name"
                                className="input input-bordered input-success w-full " />


                            <div className="label">
                            </div>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">
                            Services You Need (You can choose multiple)
                        </label>


                        {/* First line with 5 buttons */}
                        <div className="flex flex-wrap gap-1">
                            <label className="flex items-center">
                                <input type="checkbox" name="mobileDevelopment" className="btn btn-outline btn-info" aria-label="Mobile Development" value="mobileDevelopment" id="mobileDevelopment" />
                            </label>

                            <label className="flex items-center">
                                <input type="checkbox" name="webDevelopment" className="btn btn-outline btn-info" aria-label="Web Development" value="webDevelopment" id="webDevelopment" />

                            </label>

                            <label className="flex items-center">
                                <input type="checkbox" name="sqaSolution" className="btn btn-outline btn-info" aria-label="SQA Solution" value="sqaSolution" id="sqaSolution" />

                            </label>

                            <label className="flex items-center">
                                <input type="checkbox" name="UIux" className="btn btn-outline btn-info" aria-label="Web UX/UI Design" value="UIux" id="UIux" />
                            </label>

                            <label className="flex items-center">
                                <input type="checkbox" name="api" className="btn btn-outline btn-info" aria-label="API Integration" value="api" id="api" />
                            </label>
                        </div>

                        {/* Second line with 3 buttons */}
                        <div className="flex flex-wrap gap-1 mt-2">
                            <label className="flex items-center">
                                <input type="checkbox" name="mobileUiUx" className="btn btn-outline btn-info" aria-label="Mobile UX/UI Design" value="MobileUXUI" id="mobileUiUx" />
                            </label>

                            <label className="flex items-center">
                                <input type="checkbox" name="services" className="btn btn-outline btn-info" aria-label="Software Development" value="softwareDevelopment" id="softwareDevelopment" />
                            </label>

                            <label className="flex items-center">
                                <input type="checkbox" name="services" className="btn btn-outline btn-info" aria-label="Custom Services" value="customServices" id="customServices" />
                            </label>
                        </div>
                    </div>
                    <br />

                    <label className="block font-medium mb-2"> Your Budget(Optional)</label>

                    <div class="space-x-2">
                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="Less than &gt; $500" value="lessThan500" id="lessThan500" />

                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="$500-$1000" value="500to1000" id="500to1000" />

                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="$1001-$1500" value="1001to1500" id="1001to1500" />

                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="$1501-$2000" value="1501to2000" id="1501to2000" />
                    </div>


                    <br />


                    <label className="form-control">
                        <div className="label">
                            <label className="block font-medium mb-2"> Deep Details About Your Query(Optional)  </label>

                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Tell Us more about your query"></textarea>

                    </label>
                    <br />




                    <div className="mb-6">
                        <label className="block font-medium mb-1">Add Attachments (Optional)</label>
                        <div className="border border-gray-300 rounded-lg p-2 flex justify-between items-center focus-within:ring-2 focus-within:ring-primary">
                            <span className="text-gray-500 text-sm pl-1">(a brief, idea, branding guideline, old design,...)</span>
                            <button className="btn btn-outline bg-green-600 flex items-center">
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6017 7.26634L7.59127 13.2768C6.22443 14.6436 4.00836 14.6436 2.64152 13.2768C1.27469 11.9099 1.27469 9.69384 2.64152 8.327L8.65193 2.3166C9.56315 1.40537 11.0405 1.40537 11.9518 2.3166C12.863 3.22782 12.863 4.7052 11.9518 5.61643L6.17705 11.3911C5.72144 11.8467 4.98275 11.8467 4.52714 11.3911C4.07153 10.9355 4.07153 10.1968 4.52714 9.74122L9.59474 4.67362" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="ml-2">Add File (5MB)</span>
                                <input type="file" className="hidden" />
                            </button>
                        </div>
                    </div>


                    <button type="submit" class="focus:outline-none">
                        <img src="logoButton.png" alt="Send Inquiry Button" class="block" />
                    </button>



                </form>

            </div>

        </>
    )
}

export default Inquiry
