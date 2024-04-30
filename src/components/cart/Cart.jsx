import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Cart = ({ spot }) => {

    const { _id, spot_name, spot_location, cost, photo_url } = spot;

    return (
        <Fade direction='up'>
            <div className='relative font-montserrat'>
                <img src={photo_url} alt="" className='lg:h-[550px]' />
                <div className='absolute w-full h-[200px] md:h-[400px] bottom-0 bg-cartImage'>
                    <div className='relative w-full h-[200px] md:h-[400px]'>
                        <h1 className='text-white bottom-16 left-3 text-2xl font-semibold absolute'>{spot_name}</h1>
                        <h2 className='text-white bottom-9 left-3 text-xl absolute'>{spot_location}</h2>
                        <h3 className='text-white text-xl absolute bottom-2 left-3'>${cost}</h3>
                        <Link to={`/view-details/${_id}`} className='bg-white text-black px-4 py-2 rounded-md absolute right-3 bottom-3'>Details</Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

Cart.propTypes = {
    spot: PropTypes.object.isRequired
}

export default Cart;