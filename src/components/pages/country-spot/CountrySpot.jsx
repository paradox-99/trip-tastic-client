import { useLoaderData } from "react-router-dom";
import Country from "./Country";

const CountrySpot = () => {

    const countries = useLoaderData();

    return (
        <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-10">Tourist spots in America</h1>
            <div className="grid place-content-center grid-flow-col mt-12 lg:mx-28 gap-10">
                {
                    countries.map(country => <Country
                        key={country._id}
                        Country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default CountrySpot;