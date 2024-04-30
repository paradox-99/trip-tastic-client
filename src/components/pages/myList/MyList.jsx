import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProv";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

    const { user } = useContext(AuthContext);
    const { displayName } = user;

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`https://trip-tastic-server.vercel.app/find-spots/${displayName}`)
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://trip-tastic-server.vercel.app/spot-delete/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            const remaining = spots.filter(spot => spot._id !== id);
                            setSpots(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        else{
                            Swal.fire({
                                title: "Failed!",
                                text: "Something happened wrong. Unable to delete.",
                                icon: "error"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto lg:px-28 mt-10 md:mt-14 lg:mt-20 xl:mt-[100px]">
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
                                <th><Link to={`/update/${spot._id}`} className="btn w-full md:w-auto bg-textGreen mr-4" >Update</Link><button className="btn w-full md:w-auto bg-textGreen" onClick={() => handleDelete(spot._id)}>Delete</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;