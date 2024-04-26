import { Outlet } from 'react-router-dom';
import Navbar from './components/headers/Navbar';

const Root = () => {
    return (
        <div className='bg-[#D8FDE3]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;