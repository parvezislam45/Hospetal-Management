import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Autoplay } from 'swiper';

const Info = () => {
  return (
    <div>
      <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center mt-24">We served over 5000+ <br></br>Patients</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br></br>molestias nostrum laudantium. Maiores porro cumque quaerat.</p>

      <>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
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
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-28">
              <div class="px-5 py-4 bg-white shadow rounded-lg max-w-lg">
                <div class="flex mb-4">
                  <img class="w-24 h-24 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-6 mt-6">
                    <span class="block font-medium text-black">Loyce Kuvalis</span>
                    <span class="block text-sm text-black">16 December at 08:25</span>
                  </div>
                </div>
                <p class="text-black md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div class="flex justify-between items-center mt-5">
                  <div class="flex ">

                    <span class="ml-1 text-white font-light">8</span>
                  </div>
                  <div class="ml-1 text-whitefont-light"><img className='w-16 h-16' src="https://mpng.subpng.com/20201127/ty/transparent-quotation-mark-icon-basic-application-icon-quotati-5fc09f13492225.6052890816064591552996.jpg" alt="" /></div>
                </div>
              </div>
              <div class="px-5 py-4 bg-white shadow rounded-lg max-w-lg">
                <div class="flex mb-4">
                  <img class="w-24 h-24 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-6 mt-6">
                    <span class="block font-medium text-black">Loyce Kuvalis</span>
                    <span class="block text-sm text-black">16 December at 08:25</span>
                  </div>
                </div>
                <p class="text-black md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div class="flex justify-between items-center mt-5">
                  <div class="flex ">

                    <span class="ml-1 text-white font-light">8</span>
                  </div>
                  <div class="ml-1 text-whitefont-light"><img className='w-16 h-16' src="https://mpng.subpng.com/20201127/ty/transparent-quotation-mark-icon-basic-application-icon-quotati-5fc09f13492225.6052890816064591552996.jpg" alt="" /></div>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-28">
              <div class="px-5 py-4 bg-white shadow rounded-lg max-w-lg">
                <div class="flex mb-4">
                  <img class="w-24 h-24 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-6 mt-6">
                    <span class="block font-medium text-black">Loyce Kuvalis</span>
                    <span class="block text-sm text-black">16 December at 08:25</span>
                  </div>
                </div>
                <p class="text-black md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div class="flex justify-between items-center mt-5">
                  <div class="flex ">

                    <span class="ml-1 text-white font-light">8</span>
                  </div>
                  <div class="ml-1 text-whitefont-light"><img className='w-16 h-16' src="https://mpng.subpng.com/20201127/ty/transparent-quotation-mark-icon-basic-application-icon-quotati-5fc09f13492225.6052890816064591552996.jpg" alt="" /></div>
                </div>
              </div>
              <div class="px-5 py-4 bg-white shadow rounded-lg max-w-lg">
                <div class="flex mb-4">
                  <img class="w-24 h-24 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-6 mt-6">
                    <span class="block font-medium text-black">Loyce Kuvalis</span>
                    <span class="block text-sm text-black">16 December at 08:25</span>
                  </div>
                </div>
                <p class="text-black md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div class="flex justify-between items-center mt-5">
                  <div class="flex ">

                    <span class="ml-1 text-white font-light">8</span>
                  </div>
                  <div class="ml-1 text-whitefont-light"><img className='w-16 h-16' src="https://mpng.subpng.com/20201127/ty/transparent-quotation-mark-icon-basic-application-icon-quotati-5fc09f13492225.6052890816064591552996.jpg" alt="" /></div>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-28">
              <div class="px-5 py-4 bg-white shadow rounded-lg max-w-lg">
                <div class="flex mb-4">
                  <img class="w-24 h-24 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-6 mt-6">
                    <span class="block font-medium text-black">Loyce Kuvalis</span>
                    <span class="block text-sm text-black">16 December at 08:25</span>
                  </div>
                </div>
                <p class="text-black md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div class="flex justify-between items-center mt-5">
                  <div class="flex ">

                    <span class="ml-1 text-white font-light">8</span>
                  </div>
                  <div class="ml-1 text-whitefont-light"><img className='w-16 h-16' src="https://mpng.subpng.com/20201127/ty/transparent-quotation-mark-icon-basic-application-icon-quotati-5fc09f13492225.6052890816064591552996.jpg" alt="" /></div>
                </div>
              </div>
              <div class="px-5 py-4 bg-white shadow rounded-lg max-w-lg">
                <div class="flex mb-4">
                  <img class="w-24 h-24 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-6 mt-6">
                    <span class="block font-medium text-black">Loyce Kuvalis</span>
                    <span class="block text-sm text-black">16 December at 08:25</span>
                  </div>
                </div>
                <p class="text-black md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div class="flex justify-between items-center mt-5">
                  <div class="flex ">

                    <span class="ml-1 text-white font-light">8</span>
                  </div>
                  <div class="ml-1 text-whitefont-light"><img className='w-16 h-16' src="https://mpng.subpng.com/20201127/ty/transparent-quotation-mark-icon-basic-application-icon-quotati-5fc09f13492225.6052890816064591552996.jpg" alt="" /></div>
                </div>
              </div>            
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>

  );

};

export default Info;