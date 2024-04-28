import { Outlet } from 'react-router-dom';
import Navbar from './components/headers/Navbar';
import Footer from './components/footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#D8FDE3]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;