import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {

    const place = useLoaderData();
    const [spots, setSpots] = useState(place);


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        console.log(spots._id);

        const name = e.target.name.value;
        console.log(name)

        const email = form.email.value;
        console.log(email)

        const country = form.country.value;
        console.log(country)

        const spot_name = form.spot_name.value;
        console.log(spot_name)

        const spot_location = form.spot_location.value;
        console.log(spot_location)

        const cost = form.cost.value;
        console.log(cost)

        const photo_url = form.photo_url.value;
        console.log(photo_url)

        const seasonality = form.seasonality.value;
        console.log(seasonality)

        const travel_time = form.travel_time.value;
        console.log(travel_time)

        const annual_visitors = form.annual_visitors.value;
        console.log(annual_visitors)

        const description = form.description.value;
        console.log(description)

        const data = { name, email, country, spot_name, spot_location, cost, photo_url, seasonality, travel_time, annual_visitors, description }

        fetch(`https://trip-tastic-server.vercel.app/updateSpot/${spots._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(feedback => {
                if (feedback?.modifiedCount === 1) {
                    toast.success('Successfully Updated!', {
                        duration: 3000,
                        position: 'top-center',
                        style: {
                            borderRadius: '4px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
                    setSpots(feedback);
                }
            })
    }

    return (
        <div className="py-5 md:py-7 lg:py-10 bg-add-spot bg-cover lg:px-28 font-nunito font-semibold md:text-lg lg:text-xl">
            <h1 className="text-center font-montserrat text-3xl font-bold mb-10">Update your Spot</h1>
            <form action="" onSubmit={handleUpdate}>
                <div className="flex flex-col items-center justify-center mb-10">
                    <img src={spots.photo_url} alt="" className="w-[300px] mb-4 rounded-xl" />
                    <div className="flex flex-col gap-1 w-[300px]">
                        <label>Photo URL</label>
                        <input type="url" name="photo_url" placeholder={spots.photo_url} defaultValue={spots.photo_url} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Name</label>
                            <input type="text" name="name" placeholder={spots.name} defaultValue={spots.name} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Email</label>
                            <input type="email" name="email" placeholder={spots.email} defaultValue={spots.email} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Country</label>
                            <input type="text" name="country" placeholder={spots.country} defaultValue={spots.country} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Spot name</label>
                            <input type="text" name="spot_name" placeholder={spots.spot_name} defaultValue={spots.spot_name} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Location</label>
                            <input type="text" name="spot_location" placeholder={spots.spot_location} defaultValue={spots.spot_location} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Cost</label>
                            <input type="text" name="cost" placeholder={spots.cost} defaultValue={spots.cost} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Seasonality</label>
                            <input type="text" name="seasonality" placeholder={spots.seasonality} defaultValue={spots.seasonality} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Travel time</label>
                            <input type="text" name="travel_time" placeholder={spots.travel_time} defaultValue={spots.travel_time} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20">
                        <div className="flex flex-col gap-1 w-[300px]">
                            <label>Annual visitors</label>
                            <input type="text" name="annual_visitors" placeholder={spots.annual_visitors} defaultValue={spots.annual_visitors} className="md:text-lg lg:text-xl rounded-sm p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:w-[680px]">
                        <label>Description</label>
                        <textarea name="description" cols="30" rows="10" defaultValue={spots.description} placeholder="Give a short description" className="md:text-lg lg:text-xl rounded p-2 w-full focus:outline-none focus:border-b-[3px] border-[#058C42]" ></textarea>
                    </div>
                    <div className="flex flex-col gap-1 md:w-[680px]">
                        <input type="submit" value="Update" className="btn bg-btnPrimary p-3 hover:bg-btnHover text-xl font-montserrat" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;