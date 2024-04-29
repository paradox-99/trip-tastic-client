import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProv";
import titleLogo from "../../assets/logo/web-logo2.png"
import { Tooltip } from "react-tooltip";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineMail, HiMenuAlt2 } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const routes = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-spots'}>Tourist Spots</NavLink></li>
        <li><NavLink to={'/add-spot'}>Add Spot</NavLink></li>
        {
            user && <li><NavLink to={'/my-list'}>My List</NavLink></li>
        }
    </>

    return (
        <div>
            <div className="bg-[#64F790] px-4 md:px-6 lg:px-10 py-2 lg:text-xl font-nunito flex justify-between text-paragraph">
                <div className="flex gap-5 md:gap-10">
                    <div className="flex gap-2 items-center">
                        <TfiHeadphoneAlt />
                        <p className="text-base hidden md:flex">(+880) 1234567890</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <HiOutlineMail />
                        <p className="text-base hidden md:flex">trip.tastic.tourism@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaXTwitter />
                    <FaYoutube />
                </div>
            </div>
            <div className="navbar px-2 md:px-4 xl:px-28 font-montserrat z-10 sticky top-0">
                <div className="dropdown dropdown-start navbar-start w-[30%] md:w-1/2 lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost px-1 lg:hidden text-2xl">
                        <HiMenuAlt2 />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 font-medium lg:text-lg">
                        {routes}
                    </ul>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:font-semibold xl:font-medium xl:text-lg">
                        {routes}
                    </ul>
                </div>
                <NavLink to={'/'} className="navbar-center md:ml-20"><img src={titleLogo} alt="" className="w-[150px] md:w-[200px]" /></NavLink>
                <div className="navbar-end">
                    {
                        user && <img src={user.photoURL} alt="" className="hidden lg:flex mr-1 md:mr-3 w-12 h-12 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} />
                    }
                    {
                        user && <button onClick={logOut} className="btn bg-inherit px-0 md:px-4 border-none shadow-none hover:bg-[#16DB65] text-lg">Sign out</button>
                    }
                    {
                        !user && <NavLink to={'/sign-in'} className="btn bg-inherit border-none shadow-none hover:bg-[#16DB65] lg:font-semibold xl:font-medium xl:text-lg hidden lg:flex">Sign in</NavLink>
                    }
                    {
                        !user && <NavLink to={'/sign-up'} className="btn bg-inherit border-none shadow-none hover:bg-[#16DB65] lg:font-semibold xl:font-medium xl:text-lg hidden lg:flex">Sign up</NavLink>
                    }
                    {
                        !user && <NavLink to={'/sign-up'} className="btn p-1 bg-inherit border-none shadow-none hover:bg-[#16DB65] text-2xl lg:hidden" data-tooltip-id="my-tooltip" data-tooltip-content={"Sign in"}><IoLogInOutline /></NavLink>
                    }
                    <div className="dropdown dropdown-end">
                        {/* <div tabIndex={0} role="button" className="btn px-0 btn-ghost lg:hidden">
                            {
                                user && <img src={user.photoURL} alt="" className="ml-1 md:ml-3 w-12 h-12 rounded-full" />
                            }
                        </div> */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 font-medium lg:text-lg">
                            {routes}
                        </ul>
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" style={{ backgroundColor: "#0D2818", color: "white" }} />
        </div>
    );
};

export default Navbar;