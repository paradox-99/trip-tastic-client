import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProv";
// import userLogo from "../../assets/user.png"
import { Tooltip } from "react-tooltip";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const routes = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/activities'}>Activities</NavLink></li>
        <li><NavLink to={'/profile'}>Profile</NavLink></li>
        {
            !user && <li><NavLink to={'/update-profile'}>Sign in</NavLink></li>
        }
        {
            !user && <li><NavLink to={'/update-profile'}>Sign up</NavLink></li>
        }

    </>

    return (
        <div>
            <div className="navbar p-0 bg-base-100 font-montserrat z-10">
                <NavLink to={'/'} className="text-2xl navbar-start lg:text-4xl font-extrabold orbitron text-nowrap font-orbitron text-primaryText">Indu Space</NavLink>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium lg:text-lg text-secondaryText">
                        {routes}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <img src={user.photoURL} alt="" className="hidden lg:flex mr-1 md:mr-3 w-12 h-12 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} />
                    }
                    {
                        user ? <Link onClick={() => logOut()} className="hidden md:flex btn bg-primaryBtn text-white hover:bg-primaryBtn font-montserrat lg:text-lg">Sign out</Link> : <Link to={'/login'} className="hidden md:flex btn bg-primaryBtn text-white hover:bg-primaryBtn font-montserrat lg:text-lg">Sign in</Link>
                    }
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn px-0 btn-ghost lg:hidden">
                            {
                                user ? <img src={user.photoURL} alt="" className="ml-1 md:ml-3 w-12 h-12 rounded-full" /> : <img src='' alt="" className="lg:hidden ml-3 w-12 h-12 rounded-full" />
                            }
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 font-medium lg:text-lg">
                            {routes}
                            {
                                user ? <li className="md:hidden"><NavLink onClick={() => logOut()} className="bg-primaryBtn text-white hover:bg-primaryBtn font-montserrat lg:text-lg">Sign out</NavLink></li> : <li className="md:hidden"><NavLink to={'/login'} className="bg-primaryBtn text-white hover:bg-primaryBtn font-montserrat lg:text-lg">Sign in</NavLink></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" style={{ backgroundColor: "#B3BFB8", color: "black" }} />
        </div>
    );
};

export default Navbar;