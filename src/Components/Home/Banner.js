import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="flex flex-row ">
                    <div class="container">
                    <section class="">
                            <div class="flex flex-wrap px-10 mx-auto">
                                <div class="px-10">
                                    <div class="mb-8"><img class="rounded shadow-md w-80 h-full" src="https://demo.themefisher.com/novena/images/about/img-1.jpg" alt="" /></div>
                                    <div class="mb-8"><img class="rounded shadow w-80 h-full" src="https://demo.themefisher.com/novena/images/about/img-2.jpg" alt="" /></div>
                                </div>
                                <div class=" md:block mt-14">
                                    <img className='h-5/6 w-96 px-4' src="https://demo.themefisher.com/novena/images/about/img-3.jpg" alt="" />

                                </div>
                            </div>
                        </section>

                    </div>
                    <div className='mt-32'>
                        <h1 class="text-5xl font-bold">Personal care
                            <br></br>& healthy living</h1>
                        <p class="py-6">We provide best leading medicle service Nulla<br></br> perferendis veniam deleniti ipsum officia dolores repellat laudantium .</p>
                        <button class="btn bg-red-500 text-white rounded-full h-12 w-44 mt-6 hover:bg-black">Services </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;