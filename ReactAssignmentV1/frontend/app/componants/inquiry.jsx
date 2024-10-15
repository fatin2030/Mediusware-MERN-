export default function Inquiry() {
    return (
        <>

            <html data-theme="light">

                <header>
                    <style>
                        {`
    .large-text {
    font-size: 2em;
}
    `}
                    </style>
                    <div>
                        <b>
                            <strong>
                                <span className="text-accent-content large-text">Drop Us a </span>
                                <span className="text-green-500 large-text">Line</span>
                            </strong>
                        </b>
                    </div>
                </header>






                <div>
                    <form>



                        <div className="flex w-full">

                            <br />

                            <label className="form-control w-full max-w-50">
                                <div className="label">
                                    <span className="label-text">
                                        <b>Name* </b>  :</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered input-success w-full max-w-50" required />

                                <div className="label">
                                </div>
                            </label>


                            <label className="form-control w-full max-w-50">
                                <div className="label">
                                    <span className="label-text">
                                        <b>Email* </b>  :</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered input-success w-full max-w-50" required />


                                <div className="label">
                                </div>
                            </label>


                        </div>


                        <div className="divider divider-horizontal"></div>

                        <div className="flex w-full">

                            <label className="form-control w-full max-w-50">
                                <div className="label">
                                    <span className="label-text">
                                        <b>Phone(Optional): </b> </span>
                                </div>


                                <input
                                    type="text"
                                    placeholder="Enter Your Phone Number"
                                    className="input input-bordered input-success w-full max-w-50" />


                                <div className="label">
                                </div>
                            </label>

                            <label className="form-control w-full max-w-50">
                                <div className="label">
                                    <span className="label-text">
                                        <b>Company Name(Optional):</b>    :</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter Your Company Name"
                                    className="input input-bordered input-success w-full max-w-50" />


                                <div className="label">
                                </div>
                            </label>


                        </div>


                        <b>Service You Need</b>
                        <br />


                        <button class="btn btn-outline btn-info" type="button" value="mobileDevelopment">Mobile Development</button>
                        <button class="btn btn-outline btn-info" type="button" value="webDevelopment">Web Developmet</button>
                        <button class="btn btn-outline btn-info" type="button" value="sqaSolution">SQA Solution</button>
                        <button class="btn btn-outline btn-info" type="button" value="UIux">Web UX/UI Design</button>
                        <button class="btn btn-outline btn-info" type="button" value="api">API Integration</button>
                        <br />
                        <button class="btn btn-outline btn-info" value="mobileUiUx">Mobile UX/UI Design </button>
                        <button class="btn btn-outline btn-info" value="softwareDevelopment">Software Developmet</button>
                        <button class="btn btn-outline btn-info" value="customServices">Custom Services</button>

                        <br />
                        <br />
                        <b>Your Budget(Optional)</b>
                        <br />
                        <button class="btn btn-outline btn-info" >Less than{'>'}$5,00</button>
                        <button class="btn btn-outline btn-info">$5,00-$1,000</button>
                        <button class="btn btn-outline btn-info">$1,001-$1500</button>
                        <button class="btn btn-outline btn-info">$1501-$2,000</button>

                        <br />
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
                            className="file-input file-input-bordered file-input-success w-full max-w-xs" placeholder="a brief, idea, branding guideline, old design.."/>

                        <br />
                        <br />

                        <button class="btn btn-info" type="submit">Success{'>>'}</button>

                    </form>

                </div>

            </html>


        </>
    )
}