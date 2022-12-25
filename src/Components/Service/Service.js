import React from 'react';

const Service = () => {
    return (
        <div>
            <section class="bg-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto h-40 max-w-screen-sm text-center">
                        <p class=" text-white font-bold md:text-lg">Our services</p>
                        <h2 class="mb-4 text-6xl font-bold leading-tight text-gray-900 dark:text-white">What We Do</h2>
                    </div>
                </div>
            </section>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-20 gap-y-6'>
                <div class="">
                    <img
                        alt="Lava"
                        src="https://demo.themefisher.com/novena/images/service/service-1.jpg"
                        class="h-60 w-80 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4 w-80">
                        <a href="/">
                            <h3 class="text-lg font-medium text-gray-900">
                                Child Care
                            </h3>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                        </p>
                    </div>
                </div>
                <div class="">
                    <img
                        alt="Lava"
                        src="https://demo.themefisher.com/novena/images/service/service-2.jpg"
                        class="h-60 w-80 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4 w-80">
                        <a href="/">
                            <h3 class="text-lg font-medium text-gray-900">
                                Personal Care
                            </h3>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                        </p>
                    </div>
                </div>
                <div class="">
                    <img
                        alt="Lava"
                        src="https://demo.themefisher.com/novena/images/service/service-3.jpg"
                        class="h-60 w-80 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4 w-80">
                        <a href="/">
                            <h3 class="text-lg font-medium text-gray-900">
                                CT Ccan
                            </h3>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                        </p>
                    </div>
                </div>
                <div class="">
                    <img
                        alt="Lava"
                        src="https://demo.themefisher.com/novena/images/service/service-4.jpg"
                        class="h-60 w-80 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4 w-80">
                        <a href="/">
                            <h3 class="text-lg font-medium text-gray-900">
                                Joint Replacement
                            </h3>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                        </p>
                    </div>
                </div>
                <div class="">
                    <img
                        alt="Lava"
                        src="https://demo.themefisher.com/novena/images/service/service-6.jpg"
                        class="h-60 w-80 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4 w-80">
                        <a href="/">
                            <h3 class="text-lg font-medium text-gray-900">
                                Examination & Diagnosis
                            </h3>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                        </p>
                    </div>
                </div>
                <div class="">
                    <img
                        alt="Lava"
                        src="https://demo.themefisher.com/novena/images/service/service-8.jpg"
                        class="h-60 w-80 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4 w-80">
                        <a href="/">
                            <h3 class="text-lg font-medium text-gray-900">
                                Alzheimer's Disease
                            </h3>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                        </p>
                    </div>
                </div>
            </div>

            {/* --------------------------- 2nd Section --------------------- */}
            <section class="bg-white">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-bold leading-none md:text-6xl xl:text-6xl text-black">We are Pleased to Offer you the Chance to Have the Healthy</h1>
                        <button class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full mt-10 bg-red-500 hover:bg-black dark:focus:ring-blue-900">
                            Get Appointment
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                        </button>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://thumbs.dreamstime.com/b/doctors-male-female-isolated-white-31610064.jpg" alt="mockup" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;