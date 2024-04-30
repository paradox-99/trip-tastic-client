import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import banner1 from '../../../assets/banner/rsz_1grand-canyon.png'
import banner2 from '../../../assets/banner/hiking.png'
import banner3 from '../../../assets/banner/miami-beach.png'
import banner4 from '../../../assets/banner/forest-trip.png'
import banner5 from '../../../assets/banner/water-fall.png'
import forest from '../../../assets/images/2147683224.jpg'
import climb from '../../../assets/images/362.jpg'
import boating from '../../../assets/images/41277.jpg'
import hiking from '../../../assets/images/2150562965.jpg'
import Carts from '../../cart/Carts';
import { Link, useLoaderData } from 'react-router-dom';
import { Fade, Zoom, JackInTheBox } from "react-awesome-reveal";
import { SlDirections } from "react-icons/sl";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { RiPoliceCarLine } from "react-icons/ri";
import { GiSchoolBag } from "react-icons/gi";
import { PiPathBold } from "react-icons/pi";

const Home = () => {

    const countries = useLoaderData()
    console.log(countries);

    return (
        <div>
            {/* banner */}
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    <SwiperSlide className=''>
                        <div className='absolute flex flex-col top-[10%] md:top-[25%] xl:top-0 text-white xl:h-[600px] justify-center text-center items-center w-full'>
                            <Zoom cascade fraction={0.8} damping={0.8}>
                                <h3 className='font-pacifico md:text-2xl lg:text-3xl font-semibold  md:mb-3 lg:mb-5'>Explore the world</h3>

                                <h1 className='text-2xl md:text-3xl lg:text-5xl font-montserrat font-bold'>Grand Canyon: Nature`s Majesty</h1>
                                <p className='md:mt-4 lg:mt-8 text-sm md:text-xl lg:text-2xl font-nunito lg:w-[600px]'>Immerse Yourself in the Grandeur of the Grand Canyon - A Spectacular Wonder Carved by Time</p>
                            </Zoom>
                        </div>
                        <div className='flex justify-center'>
                            <img src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute flex flex-col md:left-4 lg:left-8 xl:left-16 top-[4%] md:top-[10%] lg:top-[15%] xl:top-0 text-heading xl:h-[600px] justify-center items-start w-full'>
                            <Fade cascade fraction={0.8} damping={0.8}>
                                <h3 className='font-pacifico md:text-2xl lg:text-3xl font-semibold md:mb-3 lg:mb-5'>Explore the world</h3>
                                <h1 className='text-2xl md:text-3xl lg:text-5xl font-montserrat font-bold'>Into the Wilderness- <br /> Explore, Discover, Adventure</h1>
                                <p className='md:mt-4 lg:mt-8 text-sm md:text-xl lg:text-2xl font-nunito md:w-[550px] lg:w-[600px]'>Embark on a journey through the heart of nature. From lush forests to rugged trails, let every step bring you closer to the wonders of the wild.</p>
                            </Fade>
                        </div>
                        <div className='flex justify-center'>
                            <img src={banner2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute flex flex-col md:top-[10%] lg:top-[15%] xl:top-0 text-white xl:h-[600px] justify-center items-center w-full text-center'>
                            <JackInTheBox cascade fraction={0.8} damping={0.8}>
                                <h3 className='font-pacifico md:text-2xl lg:text-3xl font-semibold md:mb-3 lg:mb-5'>Explore the world</h3>
                                <h1 className='text-2xl md:text-3xl lg:text-5xl font-montserrat font-bold'>Serenity Shores- Where Tranquility Meets the Sea</h1>
                                <p className='md:mt-4 lg:mt-8 text-sm md:text-xl lg:text-2xl font-nunito md:w-[550px] lg:w-[600px]'>Escape to the tranquil embrace of Serenity Shores, where golden sands meet azure waters, and the gentle rhythm of the waves whispers tales of serenity and peace.</p>
                            </JackInTheBox>
                        </div>
                        <div className='flex justify-center'>
                            <img src={banner3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute flex flex-col top-[5%] md:top-[18%] lg:top-[25%] xl:top-0 text-white xl:h-[600px] justify-center text-center items-center w-full'>
                            <Zoom cascade fraction={0.8} damping={0.8}>
                                <h3 className='font-pacifico md:text-2xl lg:text-3xl font-semibold md:mb-3 lg:mb-5'>Explore the world</h3>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold'>Into the Wild- Exploring Nature`s Sanctuary</h1>
                                <p className='md:mt-4 lg:mt-8 text-sm md:text-xl lg:text-2xl font-nunito md:w-[550px] lg:w-[600px]'>Embark on an Adventure Through Enchanted Forests. Discover Serenity, Discover Yourself.</p>
                            </Zoom>
                        </div>
                        <div className='flex justify-center'>
                            <img src={banner4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute flex flex-col top-[10%] md:top-[18%] lg:top-[25%] xl:top-0 text-white xl:h-[600px] justify-center items-center w-full '>
                            <Fade cascade fraction={0.8} damping={0.8}>
                                <h3 className='font-pacifico md:text-2xl lg:text-3xl font-semibold md:mb-3 lg:mb-5'>Explore the world</h3>
                                <h1 className='text-2xl md:text-3xl lg:text-5xl font-montserrat font-bold text-center'>Grand Canyon: Nature`s Majesty</h1>
                                <p className='md:mt-4 lg:mt-8 text-sm md:text-xl lg:text-2xl font-nunito md:w-[550px] lg:w-[600px] text-white text-center'>Embark on an Adventure Through Enchanted Forests. Discover Serenity, Discover Yourself.</p>
                            </Fade>
                        </div>
                        <img src={banner5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* enjoy adventures travel */}
            <div className='mt-10 md:mt-14 lg:mt-20 xl:mt-[100px]'>
                <div>
                    <Zoom cascade>
                        <h4 className='text-xl md:text-2xl lg:text-3xl font-pacifico font-semibold text-center text-heading mb-2'>Enjoy</h4>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-extrabold text-center text-heading mb-8'>Adventures Travels</h1>
                    </Zoom>
                </div>
                <div className='flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20 mx-3'>
                    <Fade cascade fraction={0.5} damping={0.8} triggerOnce >
                        <div className='flex flex-col justify-center items-center text-center md:w-64'>
                            <Zoom cascade >
                                <img src={forest} alt="" className='w-48 md:w-64 md:h-[250px] rounded-full' />
                                <h3 className='text-2xl mt-3 md:mt-5 lg:mt-8 mb-2 md:mb-5 font-montserrat font-semibold text-heading'>Forest Travel</h3>
                                <p className='text-lg font-nunito text-paragraph'>Through dense woods, where sunlight filters through the canopy, forest travel unveils nature`s hidden treasures, inviting exploration and serenity.</p>
                                <div className='flex grow justify-center items-stretch w-full'>
                                    <button className='btn bg-black text-white font-montserrat md:text-lg lg:text-xl self-end mt-4'>Enquire</button>
                                </div>
                            </Zoom>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center md:w-64'>
                            <Zoom cascade >
                                <img src={climb} alt="" className='w-48 h-48 md:w-64 md:h-[250px] rounded-full' />
                                <h3 className='text-2xl mt-3 md:mt-5 lg:mt-8 mb-2 md:mb-5 font-montserrat font-semibold text-heading'>Climbing</h3>
                                <p className='text-lg font-nunito text-paragraph'>Ascending jagged peaks and sheer cliffs, climbing challenges adventurers to conquer nature`s heights, rewarding them with exhilarating views.</p>
                                <div className='flex grow justify-center items-stretch w-full'>
                                    <button className='btn bg-black text-white font-montserrat md:text-lg lg:text-xl self-end mt-4'>Enquire</button>
                                </div>
                            </Zoom>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center md:w-64'>
                            <Zoom cascade >
                                <img src={boating} alt="" className='w-48 h-48 md:w-64 md:h-[250px] rounded-full' />
                                <h3 className='text-2xl mt-3 md:mt-5 lg:mt-8 mb-2 md:mb-5 font-montserrat font-semibold text-heading'>Boating</h3>
                                <p className='text-lg font-nunito text-paragraph'>Drifting along tranquil waters, boating offers a serene escape, where the rhythmic lapping of waves guides explorers to hidden coves and distant horizons.</p>
                                <div className='flex grow justify-center items-stretch w-full'>
                                    <button className='btn bg-black text-white font-montserrat md:text-lg lg:text-xl self-end mt-4'>Enquire</button>
                                </div>
                            </Zoom>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center md:w-64'>
                            <Zoom cascade >
                                <img src={hiking} alt="" className='w-48 h-48 md:w-64 md:h-[250px] rounded-full' />
                                <h3 className='text-2xl mt-3 md:mt-5 lg:mt-8 mb-2 md:mb-5 font-montserrat font-semibold text-heading'>Hiking</h3>
                                <p className='text-lg font-nunito text-paragraph'>Step by step, amidst towering trees and rocky paths, hiking leads adventurers to breathtaking vistas and a deeper connection with the wilderness.</p>
                                <div className='flex grow justify-center items-stretch w-full'>
                                    <button className='btn bg-black text-white font-montserrat md:text-lg lg:text-xl self-end mt-4'>Enquire</button>
                                </div>
                            </Zoom>
                        </div>
                    </Fade>
                </div>
            </div>

            {/* countries section */}
            <div className='mt-10 md:mt-14 lg:mt-20 xl:mt-[100px]'>
                <div>
                    <Swiper
                        watchSlidesProgress={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1025: {
                                slidesPerView: 4,
                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper">
                        <SwiperSlide >
                            <Fade cascade fraction={0.5} damping={0.5} >
                                <div className='flex flex-col justify-center items-center h-[407px] md:h-[487px] bg-white'>
                                    <h4 className='text-2xl lg:text-3xl font-pacifico font-semibold text-center text-heading mb-2'>Explore and Enjoy <br />the beauty of</h4>
                                    <h1 className='text-3xl lg:text-4xl xl:text-6xl font-montserrat font-extrabold text-center text-heading mb-8'>America</h1>
                                </div>
                            </Fade>
                        </SwiperSlide>
                        {
                            countries.map(country => <SwiperSlide key={country._id}>
                                <Fade cascade fraction={0.5} damping={0.5}>
                                    <div className="card card-compact md:w-[370px] rounded-none h-full bg-white">
                                        <Link to={`/country-details/${country.name}`}>
                                            <figure><img src={country.image} alt="Shoes" className='h-[220px] md:h-[300px] w-full' /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title font-montserrat text-heading">{country.name}</h2>
                                                <p className='font-nunito text-base text-justify h-[115px] text-subHeading line-clamp-5'>{country.description}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>

            {/* cart section */}
            <div className='mt-10 md:mt-14 lg:mt-20 xl:mt-[100px]'>
                <div>
                    <Zoom cascade>
                        <h4 className='text-xl md:text-2xl lg:text-3xl font-pacifico font-semibold text-center text-heading mb-2'>Enjoy</h4>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-extrabold text-center text-heading mb-8'>Our Popular Destinations</h1>
                    </Zoom>
                </div>
                <Carts></Carts>
            </div>

            {/* extra section */}
            <div className='mt-10 md:mt-14 lg:mt-20 xl:mt-[100px] bg-extra-section bg-no-repeat bg-cover w-full h-[800px] flex flex-col justify-center items-center'>
                <div>
                    <Zoom cascade>
                        <h4 className='text-xl md:text-2xl lg:text-3xl font-pacifico font-semibold text-center text-white mb-2'>Enjoy</h4>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-extrabold text-center text-white mb-8'>Our Offer the Best</h1>
                    </Zoom>
                </div>
                <Fade fraction={0.5}>
                    <div className='flex flex-col gap-7 lg:gap-14  xl:gap-20 justify-center mt-10 items-center'>
                        <Zoom cascade>
                            <div className='flex gap-7 lg:gap-14 xl:gap-20 flex-col md:flex-row text-white text-2xl lg:text-3xl font-nunito'>
                                <div className='flex flex-col gap-1 justify-center items-center'>
                                    <SlDirections className='text-4xl' />
                                    <h2>Various Adventures</h2>
                                </div>
                                <div className='flex flex-col gap-1 justify-center items-center'>
                                    <FaMapMarkedAlt className='text-4xl' />
                                    <h2>Adventures Trails</h2>
                                </div>
                                <div className='flex flex-col gap-1 justify-center items-center'>
                                    <BsFillPersonCheckFill className='text-4xl' />
                                    <h2>Professional Guide</h2>
                                </div>
                            </div>
                            <div className='flex gap-7 lg:gap-14 xl:gap-20 flex-col md:flex-row text-white text-2xl lg:text-3xl font-nunito w-full justify-center'>
                                <div className='flex flex-col gap-1 justify-center items-center'>
                                    <RiPoliceCarLine  className='text-4xl' />
                                    <h2>Family Trip</h2>
                                </div>
                                <div className='flex flex-col gap-1 justify-center items-center'>
                                    <GiSchoolBag className='text-4xl' />
                                    <h2>Custom Package</h2>
                                </div>
                                <div className='flex flex-col gap-1 justify-center items-center'>
                                    <PiPathBold className='text-4xl' />
                                    <h2>Complete Guide</h2>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </Fade>
            </div>
        </div >
    );
};

export default Home;