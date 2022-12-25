import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper';

const Support = () => {
    return (
        <div>
            <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center mt-24">Partners who support us</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br></br>molestias nostrum laudantium. Maiores porro cumque quaerat.</p>

            <>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay:4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className=""
        >

          <SwiperSlide>
          <div className='container mx-auto grid grid-cols-2 md:grid-cols-6 gap-3 mt-14 gap-y-6'>
                <img class="w-36 h-20" src="https://play-lh.googleusercontent.com/Kd4svZ1EvT4z4yRX9OSQ5OFZoGVkfXLwwc5TzFkTmdgiWOqNZBhdr3MhR2YFCaUea1Y=s256-rw" alt=" description"/>
                <img class="w-36 h-20" src="https://www.educatingforamericandemocracy.org/wp-content/uploads/2022/03/esri.png" alt=" description"/>
                <img class="w-36 h-20" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/y8ikqcpetg5oqhjoo7jx" alt=" description"/>
                <img class="w-36 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEWcdXueRUCqF6LJCj4oColiMmSEY4B80IA&usqp=CAU" alt=" description"/>
                <img class="w-36 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKWtvAwpYVG4JB_2P9OOIb2Pcx60G0Nqm7w&usqp=CAU" alt=" description"/>
                <img class="w-36 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Lj1syV8g4XRhQadXFVv4j1YLIQtdAYK2WA&usqp=CAU" alt=" description"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='container mx-auto grid grid-cols-2 md:grid-cols-6 gap-3 mt-14 gap-y-6'>
                <img class="w-36 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Lj1syV8g4XRhQadXFVv4j1YLIQtdAYK2WA&usqp=CAU" alt=" description"/>
                <img class="w-36 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtuu7BunTz0cwH_OoCwUl0DI_Edoqd8RXsw&usqp=CAU" alt=" description"/>
                <img class="w-36 h-20" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1406204426/ncsqnqmmtuw8pdbcghjy.jpg" alt=" description"/>
                <img class="w-36 h-20" src="https://globalinclusivegrowthsummit.com/wp-content/uploads/2021/09/logos_0001s_0000_CF-256x256.png" alt=" description"/>
                <img class="w-36 h-20" src="https://actgrants.in/wp-content/uploads/2022/09/medanta.png" alt=" description"/>
                <img class="w-36 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pk7AhFWxrx8Wqx3ks0KnKqCPPQeVFuY1K1JVaPtg4WQt3NveZo3Jv5Qdn_jp7Kp_9XE&usqp=CAU" alt=" description"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
            
        </div>
    );
};

export default Support;