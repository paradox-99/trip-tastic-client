import { useLoaderData } from "react-router-dom";

const CountrySpot = () => {

    const countries = useLoaderData();

    console.log(countries);

    return (
        <div>
            
        </div>
    );
};

export default CountrySpot;