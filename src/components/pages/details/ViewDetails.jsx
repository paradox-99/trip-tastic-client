import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const data = useLoaderData();

    const { annual_visitors, cost, country, description, email, name, photo_url, seasonality, spot_location, spot_name, travel_time } = data

    return (
        <div className="mt-10 px-28">
            <div className="flex justify-center">
                <img src={photo_url} alt="" className="w-full h-[500px]" />
            </div>
            <div className="flex justify-between mt-16">
                <div className="space-y-2">
                    <h1 className="text-4xl font-montserrat font-bold">{spot_name}</h1>
                    <h3 className="text-2xl font-montserrat font-semibold">Country: {country}</h3>
                    <p className="text-xl font-nunito text-subHeading font-medium">Location: {spot_location}</p>
                    <p className="text-xl font-nunito text-subHeading font-medium">Cost: ${cost}</p>
                    <p className="text-xl font-nunito text-subHeading font-medium">Seasonality: {seasonality}</p>
                    <p className="text-xl font-nunito text-subHeading font-medium">Travel Time: {travel_time}</p>
                    <p className="text-xl font-nunito text-subHeading font-medium">Annual Visitors: {annual_visitors}</p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-montserrat font-semibold">Provider</h1>
                    <h3 className="text-xl font-montserrat font-semibold">{name}</h3>
                    <p className="text-lg font-nunito font-medium">{email}</p>
                </div>
            </div>
            <p className="mt-4 text-lg font-nunito text-paragraph text-justify">{description}</p>
        </div>
    );
};

export default ViewDetails;