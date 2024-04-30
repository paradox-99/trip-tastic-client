import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";
import { useEffect, useState } from "react";

const AllSpots = () => {

    const [spots, setSpots] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        setSpots(data)
    }, [data])

    const handleSort = (value) => {
        fetch(`https://trip-tastic-server.vercel.app/sort-by/${value}`)
        .then(res => res.json())
        .then(data => setSpots(data))
    }

    return (
        <div>
            <div className="flex justify-center mt-12">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn bg-btnPrimary border-0 mb-1 text-heading font-montserrat text-lg hover:bg-btnHover">Sort by average cost</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-btnHover rounded-md w-52 font-nunito text-lg">
                        <li><button onClick={() => handleSort(1)}>Sort by Ascending</button></li>
                        <li><button onClick={() => handleSort(-1)}>sort by descending</button></li>
                    </ul>
                </div>
            </div>
            <div className="grid md:grid-cols-2 justify-items-center xl:grid-cols-3 mt-12 lg:mx-28 gap-10">
                {
                    spots.map(spot => <Spot
                        key={spot._id}
                        spot={spot}
                    ></Spot>)
                }
            </div>
        </div>
    );
};

export default AllSpots;