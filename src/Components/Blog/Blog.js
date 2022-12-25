import React from 'react';

const Blog = () => {
    return (
        <div >
            <section class="bg-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto h-40 max-w-screen-sm text-center">
                        <p class=" text-white font-bold md:text-lg">Our Blogs</p>
                        <h2 class="mb-4 text-6xl font-bold leading-tight text-gray-900 dark:text-white">Blog Articles</h2>
                    </div>
                </div>
            </section>
            {/* --------------------------- Section 2 ------------------------ */}
            <section class="bg-white text-black">
                <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white">
                        <div class="flex flex-col justify-center col-span-12 align-middle bg-no-repeat lg:col-span-7 lg:h-auto">
                            <div class="flex flex-col items-center p-8 py-12 text-center">
                                <img src="https://demo.themefisher.com/novena/images/blog/blog-1.jpg" alt="" class="object-cover w-full rounded" />
                                <h1 class="py-4 text-4xl font-semibold text-start">Choose quality service over cheap service all type of things</h1>
                                <p class="pb-6 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                            </div>
                            <button class="inline-flex items-center justify-center px-5 py-3 mr-3 w-44 h-12 text-base font-medium text-center text-white rounded-full -mt-12 bg-black hover:bg-red-500 dark:focus:ring-blue-900 mx-8">
                                Read More
                                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </button>
                        </div>

                        <div class=" p-6 space-y-2 lg:col-span-5">
                            <button type="button" class="text-2xl font-bold -mt-14">Search Here</button>
                            <div class="flex flex-col divide-y">
                                <input type="text" id="first_name" class="bg-white border border-gray-600 text-sm  block w-96 p-2.5  dark:text-white" placeholder="Search" />

                                <div class="flex px-1 py-4">
                                    <button type="button" class=" text-2xl font-bold mt-2">Popular Post</button>
                                </div>
                                <div class="flex flex-col mt-2">
                                    <p class=" text-sm text-black">03 Mar 2018</p>
                                    <h1 className="font-bold text-black text-lg mt-2 hover:text-red-600">Thoughtful living los Angeles</h1>
                                </div>
                                <div class="flex flex-col mt-3">
                                    <p class=" text-sm text-black">03 Mar 2018</p>
                                    <h1 className="font-bold text-black text-lg mt-2 hover:text-red-600">Vivamus molestie gravida turpis.</h1>
                                </div>
                                <div class="flex flex-col mt-6">
                                    <p class=" text-sm text-black">03 Mar 2018</p>
                                    <h1 className="font-bold text-black text-lg mt-2 hover:text-red-600">Fusce lobortis lorem at ipsum semper sagittis</h1>
                                </div>
                                <div class="flex px-1 py-4 mt-12">
                                    <button type="button" class=" text-2xl font-bold mt-2">Categories</button>
                                </div>
                                <div class="flex flex-col mt-1">
                                    <p class=" text-md text-black">Medicine <span className='mx-1 text-lg'>(14)</span></p>
                                    <p class=" text-md text-black mt-2">Equipments <span className='mx-1 text-lg'>(2)</span></p>
                                    <p class=" text-md text-black mt-2">Heart <span className='mx-1 text-lg'>(10)</span></p>
                                    <p class=" text-md text-black mt-2">Free counselling  <span className='mx-1 text-lg'>(5)</span></p>
                                    <p class=" text-md text-black mt-2">Lab test <span className='mx-1 text-lg'>(8)</span></p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-white text-black">
                <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white">
                        <div class="flex flex-col justify-center col-span-12 align-middle bg-no-repeat lg:col-span-7 lg:h-auto -mt-8">
                            <div class="flex flex-col items-center p-8 py-12 text-center">
                                <img src="https://demo.themefisher.com/novena/images/blog/blog-2.jpg" alt="" class="object-cover w-full h-full  rounded lg:col-span-7" />
                                <div class="flex mb-4">
                                </div>
                                <h1 class="py-4 text-4xl font-semibold text-start mt-14">All test cost 25% in always in our laboratory</h1>
                                <p class="pb-6 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                            </div>
                            <button class="inline-flex items-center justify-center px-5 py-3 mr-3 w-44 h-12 text-base font-medium text-center text-white rounded-full -mt-12 bg-black hover:bg-red-500 dark:focus:ring-blue-900 mx-8">
                                Read More
                                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </button>
                        </div>

                        <div class=" p-6 space-y-2 lg:col-span-5">
                            <div class="flex flex-col divide-y">
                                <div class="flex px-1 py-4">
                                    <button type="button" class=" text-2xl font-bold -mt-16">Tags</button>
                                </div>
                                <div class="flex gap-3">
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600w-32 h-10 w-28">DOCTORS</button>
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs  text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-10">AGENCY</button>
                                </div>
                                <div class="flex gap-3 mt-1">
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-10">COMPANY</button>
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-11">MEDICINE</button>
                                </div>
                                <div class="flex gap-3 mt-1">
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-10">SERGERY</button>
                                    <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-10">MARKETING</button>
                                </div>
                                <div class="flex gap-3 mt-1">
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-11">SOCIAL MEDIA</button>
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-10">BRANDING</button>
                                </div>
                                <div class="flex gap-3 mt-1">
                                    <button type="button" class="py-2.5 px-5 mr-2 text-xs text-white focus:outline-none bg-gray-200 rounded-full hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:text-gray-600 dark:border-gray-600 w-32 h-10">LABORATORY</button>
                                </div>
                            </div>
                            <div class="flex flex-col bg-gray-50 w-80 h-80">
                                <div class="flex px-4 py-4 mt-10">
                                    <button type="button" class=" text-2xl font-bold -mt-4">Time Schedule</button>
                                </div>
                                <div class="flex gap-10 mx-auto">
                                    <h1 className='text-md text-start'>Monday To Friday</h1>
                                    <h1 className='text-md text-start'>09.00 - 17.00</h1>
                                </div>
                                <div class="flex gap-24 mx-auto mt-5">
                                    <h1 className='text-md text-start'>Saturday</h1>
                                    <h1 className='text-md text-start'>09.00 - 17.00</h1>
                                </div>
                                <div class="flex gap-28 mx-8 mt-5">
                                    <h1 className='text-md text-start'>Sunday</h1>
                                    <h1 className='text-md text-start'>Closed</h1>
                                </div>
                                <h1 className='text-md text-start mx-8 mt-7'>Need Urgent Help?</h1>
                                <h1 className='text-2xl text-start mx-8 mt-1 font-bold'>+23-4565-65768</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-white text-black">
                <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white">
                        <div class="flex flex-col justify-center col-span-12 align-middle bg-no-repeat lg:col-span-7 lg:h-auto -mt-8">
                            <div class="flex flex-col items-center p-8 py-12 text-center">
                                <img src="https://demo.themefisher.com/novena/images/blog/blog-4.jpg" alt="" class="object-cover w-full h-full  rounded lg:col-span-7" />
                                <div class="flex mb-4">
                                </div>
                                <h1 class="py-4 text-4xl font-semibold text-start mt-14">Get Free consultation from our special surgeon and doctors</h1>
                                <p class="pb-6 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>

                            </div>
                            <button class="inline-flex items-center justify-center px-5 py-3 mr-3 w-44 h-12 text-base font-medium text-center text-white rounded-full -mt-12 bg-black hover:bg-red-500 dark:focus:ring-blue-900 mx-8">
                                Read More
                                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
        </div >
    );
};

export default Blog;