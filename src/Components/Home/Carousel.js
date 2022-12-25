import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://www.khudiramhospital.com/wp-content/uploads/2022/02/ipd-banner-img4.jpg" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://previews.123rf.com/images/chagin/chagin1904/chagin190400097/120594638-portrait-of-happy-successful-female-doctor-horizontal-image-.jpg" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://www.manipalhospitals.com/oldairportroad/uploads/page-banners/palliative-care-centres-old-airport-road.jpeg" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://i.pinimg.com/originals/1f/c3/6e/1fc36e8e50d19bea745e240aedc264f5.jpg" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 -mt-44 gap-y-6'>
                <div class="relative bg-white py-10 px-10 rounded-3xl w-96 my-8 shadow-xl">
                    <div class=" text-white flex items-start w-12">
                        <img src="https://static.thenounproject.com/png/50115-200.png" alt="" />
                    </div>
                    <p className="text-md mt-2">24 Hour Service</p>
                    <h1 className='text-xl font-bold'>Online Appointment</h1>
                    <p className="mt-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                    <button class="btn btn-sm rounded-full h-12 mt-6 hover:bg-red-500">Make A Appointment</button>
                </div>
                <div class="relative bg-white py-10 px-10 rounded-3xl w-96 my-8 shadow-xl">
                    <div class=" text-white flex items-start w-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahNAgdLVeUPUTMVCEDkZ_ZrBFac4Yyl1BOjuh8HSKTXl3SY5BrtIfVD7pRAhFb9489IU&usqp=CAU" alt="" />
                    </div>
                    <p className="text-md mt-3">Timing schedule</p>
                    <h1 className='text-xl font-bold'>Working Hours</h1>
                    <div className='flex justify-between mt-6'>
                        <div>
                            <p className='text-lg font-semibold'>Sun - Wed :</p>
                            <p className='text-lg font-semibold'>Thu - Fri :</p>
                            <p className='text-lg font-semibold'>Sat - sun :</p>
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>8:00 - 17:00</p>
                            <p className='text-lg font-semibold'>9:00 - 17:00</p>
                            <p className='text-lg font-semibold'>10:00 - 17:00</p>
                           
                        </div>
                    </div>
                </div>
                <div class="relative bg-white py-10 px-10 rounded-3xl w-96 my-8 shadow-xl">
                    <div class=" text-white flex items-start w-10">
                        <img src="https://www.shareicon.net/data/256x256/2016/01/26/709413_help_512x512.png" alt="" />
                    </div>
                    <p className="text-md mt-3">Emegency Cases</p>
                    <h1 className='text-xl font-bold'>1-800-700-6200</h1>
                    <p className="mt-4">Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Carousel;