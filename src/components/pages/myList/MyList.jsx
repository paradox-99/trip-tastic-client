import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProv";
import { Link } from "react-router-dom";

const MyList = () => {

    const { user } = useContext(AuthContext);
    const { displayName } = user;

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/find-spots/${displayName}`)
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/spot-delete/${id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        const remaining = spots.filter(spot => spot._id !== id);
        setSpots(remaining);
    }

    return (
        <div>
            <div className="overflow-x-auto px-28 mt-10 md:mt-14 lg:mt-20 xl:mt-[100px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-montserrat text-heading">
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Location</th>
                            <th>Cost</th>
                            <th>Seasonality</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spots.map(spot => <tr key={spot._id}>
                                <th className="text-base"><img src={spot.photo_url} alt="" className="w-28 h-28 rounded-md" /></th>
                                <th>{spot.spot_name}</th>
                                <th>{spot.country}</th>
                                <th>{spot.spot_location}</th>
                                <th>{spot.cost}</th>
                                <th>{spot.seasonality}</th>
                                <th><Link to={`/update/${spot._id}`} className="btn bg-textGreen mr-4" >Update</Link><button className="btn bg-textGreen" onClick={() => handleDelete(spot._id)}>Delete</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;