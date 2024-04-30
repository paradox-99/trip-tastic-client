import { FaSlackHash } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import titleLogo from "../../assets/logo/web-logo2.png"
import { Fade, Zoom } from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className=" mt-10">
            <Fade damping={1} fraction={0.1}>
                <footer className="footer place-items-center lg:place-items-start px-5 md:px-6 lg:px-16 xl:pt-28 py-10 bg-[#020202] text-white">
                    <Zoom damping={0.7}>
                        <nav className="font-nunito flex flex-col items-center md:items-start text-lg">
                            <h6 className="footer-title place-items-center font-montserrat text-lg md:text-xl">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className="font-nunito flex flex-col items-center md:items-start text-lg">
                            <h6 className="footer-title font-montserrat text-lg md:text-xl">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className="font-nunito flex flex-col items-center md:items-start text-lg">
                            <h6 className="footer-title font-montserrat text-lg md:text-xl">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                        <form className="flex flex-col items-center md:items-start">
                            <h6 className="footer-title font-montserrat text-lg lg:text-xl">Newsletter</h6>
                            <fieldset className="form-control md:w-80">
                                <label className="label">
                                    <span className="label-text text-white font-nunito text-lg md:text-xl">Enter your email address</span>
                                </label>
                                <div className="border-collapse flex items-center">
                                    <input type="text" placeholder="username@gamil.com" className="input input-bordered rounded-r-none border-r-0 px-2 join-item font-nunito text-black" />
                                    <button className="btn btn-primary border-l-0 text-white rounded-l-none join-item font-montserrat">Submit</button>
                                </div>
                            </fieldset>
                        </form>
                    </Zoom>
                </footer>
                <footer className="footer place-items-center lg:place-items-start px-5 lg:px-16 xl:px-28 py-6 border-t bg-[#020202] text-white border-base-300">
                    <Zoom>
                        <aside className="items-center grid-flow-col">
                            <FaSlackHash className="text-4xl" />
                            <p className="font-nunito text-lg md:text-xl">TripTastic Tour and travel Ltd. <br />Providing reliable tech since 2002</p>
                        </aside>
                        <img src={titleLogo} alt="" className="w-[150px] place-self-center" />
                        <nav className="md:place-self-center md:justify-self-end">
                            <div className="flex gap-4 text-2xl">
                                <a><FaFacebookF /></a>
                                <a><FaInstagram /></a>
                                <a><FaXTwitter /></a>
                                <a><FaYoutube /></a>
                            </div>
                        </nav>
                    </Zoom>
                </footer>
            </Fade>
        </div >
    );
};

export default Footer;