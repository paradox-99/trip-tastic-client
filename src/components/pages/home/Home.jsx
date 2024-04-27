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

const Home = () => {
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
                    className="mySwiper"
                >
                    <SwiperSlide><div className=''><img src={banner1} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className=''><img src={banner2} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className=''><img src={banner3} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className=''><img src={banner4} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className=''><img src={banner5} alt="" /></div></SwiperSlide>
                </Swiper>
            </div>

            {/* enjoy adventures travel */}
            <div className='flex justify-center gap-20 mt-[100px]'>
                <div className='flex flex-col text-center w-64'>
                    <img src={forest} alt="" className='w-64 h-[250px] rounded-full' />
                    <h3 className='text-2xl mt-10 mb-5 font-montserrat font-semibold'>Forest Travel</h3>
                    <p className='text-lg font-nunito text-paragraph'>Through dense woods, where sunlight filters through the canopy, forest travel unveils nature`s hidden treasures, inviting exploration and serenity.</p>
                    <div className='flex grow justify-center items-stretch w-full'>
                        <button className='btn bg-btnPrimary font-montserrat text-xl self-end mt-4'>Enquire</button>
                    </div>
                </div>
                <div className='flex flex-col text-center w-64'>
                    <img src={climb} alt="" className='w-64 h-[250px] rounded-full' />
                    <h3 className='text-2xl mt-10 mb-5 font-montserrat font-semibold'>Climbing</h3>
                    <p className='text-lg font-nunito text-paragraph'>Ascending jagged peaks and sheer cliffs, climbing challenges adventurers to conquer nature`s heights, rewarding them with exhilarating views and a sense of triumph.</p>
                    <div className='flex grow justify-center items-stretch w-full'>
                        <button className='btn bg-btnPrimary font-montserrat text-xl self-end mt-4'>Enquire</button>
                    </div>
                </div>
                <div className='flex flex-col text-center w-64'>
                    <img src={boating} alt="" className='w-64 h-[250px] rounded-full' />
                    <h3 className='text-2xl mt-10 mb-5 font-montserrat font-semibold'>Boating</h3>
                    <p className='text-lg font-nunito text-paragraph'>Drifting along tranquil waters, boating offers a serene escape, where the rhythmic lapping of waves guides explorers to hidden coves and distant horizons.</p>
                    <div className='flex grow justify-center items-stretch w-full'>
                        <button className='btn bg-btnPrimary font-montserrat text-xl self-end mt-4'>Enquire</button>
                    </div>
                </div>
                <div className='flex flex-col text-center w-64'>
                    <img src={hiking} alt="" className='w-64 h-[250px] rounded-full' />
                    <h3 className='text-2xl mt-10 mb-5 font-montserrat font-semibold'>Hiking</h3>
                    <p className='text-lg font-nunito text-paragraph'>Step by step, amidst towering trees and rocky paths, hiking leads adventurers to breathtaking vistas and a deeper connection with the wilderness.</p>
                    <div className='flex grow justify-center items-stretch w-full'>
                        <button className='btn bg-btnPrimary font-montserrat text-xl self-end mt-4'>Enquire</button>
                    </div>
                </div>
            </div>

            {/* cart section */}
            <div>
                
            </div>
        </div>
    );
};

export default Home;