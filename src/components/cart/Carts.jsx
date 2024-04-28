import { useEffect, useState } from "react";
import Cart from "./Cart";

const Carts = () => {

    const [spots, setSpots] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/spots')
        .then(res => res.json())
        .then(spots => setSpots(spots))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-5 xl:grid-cols-3 xl:grid-rows-2 gap-6">
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