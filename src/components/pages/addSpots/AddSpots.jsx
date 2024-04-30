import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProv";

const AddSpots = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    const {email, displayName} = user;

    console.log(user);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const email = form.email.value;
        const country = form.country.value;
        const spot_name = form.spot_name.value;
        const spot_location = form.spot_location.value;
        const cost = form.cost.value;
        const photo_url = form.photo_url.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const annual_visitors = form.annual_visitors.value;
        const description = form.description.value;

        const data = { name, email, country, spot_name, spot_location, cost, photo_url, seasonality, travel_time, annual_visitors, description }

        fetch('https://trip-tastic-server.vercel.app/add-new-spot', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(feedback => {
                if (feedback?.insertedId) {
                    toast.success('Successfully added!', {
                        duration: 3000,
                        position: 'top-center',
                        style: {
                            borderRadius: '4px',
                            background: '#333',
                            color: '#fff',
                          },
                    })
                    form.reset();
                }
            })

    }

    return (
        <div className="py-5 md:py-7 lg:py-10 bg-add-spot bg-cover lg:px-28 font-nunito font-semibold md:text-lg lg:text-xl">
            <h1 className="text-center font-montserrat text-3xl font-bold mb-10">Add New Spot</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Name</label>
                            <input type="text" name="name" defaultValue={displayName} disabled className="md:text-lg bg-base-200 lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Email</label>
                            <input type="email" name="email" defaultValue={email} disabled className="md:text-lg lg:text-xl bg-base-200 rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Country</label>
                            <input type="text" name="country" placeholder="Country" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Spot name</label>
                            <input type="text" name="spot_name" placeholder="Spot Name" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Location</label>
                            <input type="text" name="spot_location" placeholder="Spot Location" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Cost</label>
                            <input type="text" name="cost" placeholder="Average cost" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Photo URL</label>
                            <input type="url" name="photo_url" placeholder="Photo URL" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Seasonality</label>
                            <input type="text" name="seasonality" placeholder="Ex- Summer, Winter" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Travel time</label>
                            <input type="text" name="travel_time" placeholder="Travel time" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Annual visitors</label>
                            <input type="text" name="annual_visitors" placeholder="Number of annual visitors" className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:w-[680px]">
                        <label>Description</label>
                        <textarea name="description" cols="30" rows="10" placeholder="Give a short description" className="md:text-lg lg:text-xl rounded p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" ></textarea>
                    </div>
                    <div className="flex flex-col gap-1 md:w-[680px]">
                        <input type="submit" value="Add" className="btn bg-btnPrimary p-3 hover:bg-btnHover text-xl font-montserrat" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddSpots;