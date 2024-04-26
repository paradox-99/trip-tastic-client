const AddSpots = () => {
    return (
        <div className="py-10 bg-add-spot bg-cover px-28 font-nunito font-semibold md:text-lg lg:text-xl">
            <h1 className="text-center font-montserrat text-3xl font-bold mb-10">Add New Spot</h1>
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="flex items-center gap-20">
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Your Name" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Your email" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                </div>
                <div className="flex items-center gap-20">
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Country</label>
                        <input type="text" name="country" placeholder="Country" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Spot name</label>
                        <input type="text" name="spot_name" placeholder="Spot Name" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                </div>
                <div className="flex items-center gap-20">
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Location</label>
                        <input type="text" name="spot_location" placeholder="Spot Location" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Cost</label>
                        <input type="text" name="cost" placeholder="Average cost" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                </div>
                <div className="flex items-center gap-20">
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Photo URL</label>
                        <input type="url" name="photo_url" placeholder="Photo URL" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Seasonality</label>
                        <input type="text" name="" placeholder="Ex- Summer, Winter" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                </div>
                <div className="flex items-center gap-20">
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Travel time</label>
                        <input type="text" name="travel_time" placeholder="Travel time" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Annual visitors</label>
                        <input type="text" name="annual_visitors" placeholder="Number of annual visitors" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-[680px]">
                    <label>Description</label>
                    <textarea name="description" cols="30" rows="10" placeholder="Give a short description" className="md:text-lg lg:text-xl rounded p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" ></textarea>
                </div>
                <div className="flex flex-col gap-1 w-[680px]">
                    <input type="submit" value="Add" className="btn bg-btnPrimary p-3 hover:bg-btnHover text-xl font-montserrat"/>
                </div>
            </div>
        </div>
    );
};

export default AddSpots;