import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const data = useLoaderData();

    const { annual_visitors, cost, country, description, email, name, photo_url, seasonality, spot_location, spot_name, travel_time } = data;

    return (
        <div className="mt-10 md:px-10 lg:px-20 xl:px-28">
            <div className="flex justify-center">
                <img src={photo_url} alt="" className="w-full lg:h-[500px]" />
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-5 mt-5 md:mt-10 lg:mt-16 px-2 md:px-0">
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold">{spot_name}</h1>
                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold">Country: {country}</h3>
                    <p className="text-lg md:text-xl font-nunito text-subHeading font-medium">Location: {spot_location}</p>
                    <p className="text-lg md:text-xl font-nunito text-subHeading font-medium">Cost: ${cost}</p>
                    <p className="text-lg md:text-xl font-nunito text-subHeading font-medium">Seasonality: {seasonality}</p>
                    <p className="text-lg md:text-xl font-nunito text-subHeading font-medium">Travel Time: {travel_time}</p>
                    <p className="text-lg md:text-xl font-nunito text-subHeading font-medium">Annual Visitors: {annual_visitors}</p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-montserrat font-semibold">Provider-</h1>
                    <h3 className="text-lg md:text-xl font-montserrat font-semibold">{name}</h3>
                    <p className="md:text-lg font-nunito font-medium">{email}</p>
                </div>
            </div>
            <p className="text-xl font-montserrat font-semibold md:hidden mt-8 px-2 md:px-0">Description</p>
            <p className="mt-2 md:mt-4 text-lg font-nunito text-paragraph text-justify px-2 md:px-0">{description}</p>
        </div>
    );
};

export default ViewDetails;