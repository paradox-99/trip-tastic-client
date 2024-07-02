import { useEffect, useState } from "react";
import Cart from "./Cart";
import axios from "axios";

const Carts = () => {

    const [spots, setSpots] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/spots-home')
        .then(spots => setSpots(spots.data))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-6">
            {
                spots.map(spot => <Cart
                key={spot._id}
                spot={spot}
                ></Cart>)
            }
        </div>
    );
};

export default Carts;