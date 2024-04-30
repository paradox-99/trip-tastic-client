import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({Country}) => {

    const { _id, spot_name, spot_location, cost, photo_url, seasonality, country, description } = Country;

    return (
        <div>
            <div className="card card-compact max-w-[450px] h-full bg-white rounded-t-none rounded-b-lg">
                <figure><img src={photo_url} alt={spot_name} className='md:h-80' /></figure>
                <div className="card-body font-nunito">
                    <h1 className="card-title text-2xl font-montserrat">{spot_name}</h1>
                    <p className='text-lg font-medium'>Country: {country} </p>
                    <p className='text-lg'>Location: {spot_location}</p>
                    <p className='text-lg'>Average cost:  ${cost}</p>
                    <p className='text-lg'>Seasonality: {seasonality}</p>
                    <p className='text-lg line-clamp-6'><span className='font-bold'>Description:</span> {description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/view-details/${_id}`} className="btn bg-heading text-white text-lg">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Country.propTypes = {
    Country: PropTypes.object.isRequired
}

export default Country;