import { FaSlackHash } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import titleLogo from "../../assets/logo/web-logo2.png"

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer px-5 md:px-16 lg:px-28 py-10 bg-[#020202] text-white">
                <nav className="font-nunito text-lg">
                    <h6 className="footer-title font-montserrat text-lg md:text-xl">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="font-nunito text-lg">
                    <h6 className="footer-title font-montserrat text-lg md:text-xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="font-nunito text-lg">
                    <h6 className="footer-title font-montserrat text-lg md:text-xl">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title font-montserrat text-lg lg:text-xl">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white font-nunito text-lg md:text-xl">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@gamil.com" className="input input-bordered px-2 join-item font-nunito text-black" />
                            <button className="btn btn-primary  join-item font-montserrat">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer px-5 md:px-16 lg:px-28 py-6 border-t bg-[#020202] text-white border-base-300">
                <aside className="items-center grid-flow-col">
                    <FaSlackHash className="text-4xl" />
                    <p className="font-nunito text-lg md:text-xl">TripTastic Tour and travel Ltd. <br />Providing reliable tech since 2002</p>
                </aside>
                <img src={titleLogo} alt="" className="w-[150px] place-self-center" />
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><FaFacebookF /></a>
                        <a><FaInstagram /></a>
                        <a><FaXTwitter /></a>
                        <a><FaYoutube /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;