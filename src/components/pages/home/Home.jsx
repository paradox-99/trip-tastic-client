import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';
import banner1 from '../../../assets/banner/rsz_1grand-canyon.png'
import banner2 from '../../../assets/banner/hiking.png'
import banner3 from '../../../assets/banner/miami-beach.png'
import banner4 from '../../../assets/banner/forest-trip.png'
import banner5 from '../../../assets/banner/water-fall.png'

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
            <div>
                <div className=''>
                    <img src="" alt="" />
                </div>
                <div className=''>
                    <img src="" alt="" />
                </div>
                <div className=''>
                    <img src="" alt="" />
                </div>
                <div className=''>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;