import React from 'react'


const Inquiry = () => {
    return (
        <>





            <div>
                <form>



                    <div className="flex w-full space-x-4"> 
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

                    <div className="flex w-full space-x-4">

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


                    <b>Service You Need</b>
                    <br />

                    <div class="space-y-2">
                        <div class="space-x-2">
                          

                            <input type="radio" name="mobileDevelopment" class="btn btn-outline btn-info" aria-label="Mobile Development" value="mobileDevelopment" id="mobileDevelopment" />

                            <input type="radio" name="webDevelopment" class="btn btn-outline btn-info" aria-label="Web Development" value="webDevelopment" id="webDevelopment" />

                            <input type="radio" name="sqaSolution" class="btn btn-outline btn-info" aria-label="SQA Solution" value="sqaSolution" id="sqaSolution" />

                            <input type="radio" name="UIux" class="btn btn-outline btn-info" aria-label="Web UX/UI Design" value="UIux" id="UIux" />

                            <input type="radio" name="api" class="btn btn-outline btn-info" aria-label="API Integration" value="api" id="api" />
                        </div>
                        <div class="space-x-2">
                            <input type="radio" name="mobileUiUx" class="btn btn-outline btn-info" aria-label="Mobile UX/UI Design" value="Mobile UX/UI Design" id="mobileUiUx" />
                            <input type="radio" name="softwareDevelopment" class="btn btn-outline btn-info" aria-label="Software Development" value="Software Development" id="softwareDevelopment" />
                            <input type="radio" name="customServices" class="btn btn-outline btn-info" aria-label="Custom Services" value="Custom Services" id="customServices" />


                        </div>
                    </div>
                    <br />

                    <b>Your Budget(Optional)</b>
                    <br />
                    <div class="space-x-2">
                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="Less than $500" value="lessThan500" id="lessThan500" />

                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="$500-$1000" value="500to1000" id="500to1000" />

                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="$1001-$1500" value="1001to1500" id="1001to1500" />

                        <input type="radio" name="priceRange" class="btn btn-outline btn-info" aria-label="$1501-$2000" value="1501to2000" id="1501to2000" />
                    </div>


                    <br />


                    <label className="form-control">
                        <div className="label">
                            <span className="label-text"><b>Deep Details About Your Query(Optional)</b></span>

                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Tell Us more about your query"></textarea>

                    </label>
                    <br />

                    <b>Attach Files(Optional)</b>
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-success w-full max-w-xs" placeholder="a brief, idea, branding guideline, old design.." />


                    <br />


                    <button class="btn btn-info" type="submit">Success{'>>'}</button>

                </form>

            </div>



        </>
    )
}

export default Inquiry
