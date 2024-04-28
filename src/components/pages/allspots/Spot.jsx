import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Spot = ({ spot }) => {

    const { _id, spot_name, cost, photo_url, seasonality, travel_time, annual_visitors } = spot;

    return (
        <div>
            <div className="card card-compact max-w-96 h-full bg-white rounded-t-none rounded-b-lg">
                <figure><img src={photo_url} alt="Shoes" className='h-80' /></figure>
                <div className="card-body font-nunito">
                    <h1 className="card-title text-2xl font-montserrat">{spot_name}</h1>
                    <p className='text-lg'>Average cost:  ${cost}</p>
                    <p className='text-lg'>Seasonality: {seasonality}</p>
                    <p className='text-lg'>Travel time: {travel_time} days</p>
                    <p className='text-lg'>Total visitors per year: {annual_visitors}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/view-details/${_id}`} className="btn bg-heading text-white text-lg">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Spot.propTypes = {
    spot: PropTypes.object.isRequired
}

export default Spot;