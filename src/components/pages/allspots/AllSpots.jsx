import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const AllSpots = () => {

    const spots = useLoaderData();
    // console.log(spots);

    return (
        <div className="grid md:grid-cols-2 justify-items-center xl:grid-cols-3 mt-12 lg:mx-28 gap-10">
            {
                spots.map(spot => <Spot
                    key={spot._id}
                    spot={spot}
                ></Spot>)
            }
        </div>
    );
};

export default AllSpots;