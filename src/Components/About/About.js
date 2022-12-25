import React from 'react';


const About = () => {
    return (
        <div>
            <section class="bg-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto h-40 max-w-screen-sm text-center">
                        <p class=" text-white font-bold md:text-lg">About Us</p>
                        <h2 class="mb-4 text-6xl font-bold leading-tight text-gray-900 dark:text-white">About Us</h2>
                    </div>
                </div>
            </section>
            {/* ------------------------- Section care---------------------- */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 mt-20 gap-y-6">
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://demo.themefisher.com/novena/images/about/about-1.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Healthcare for Kids</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://demo.themefisher.com/novena/images/about/about-2.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Medical Counseling</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://demo.themefisher.com/novena/images/about/about-3.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Modern Equipments</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://demo.themefisher.com/novena/images/about/about-4.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Qualified Doctors</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                </a>
            </div>

            {/* ------------------------- about---------------------- */}
            <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center mt-24">Meet Our Specialist</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Today’s users expect effortless experiences. Don’t let essential people and <br></br>processes stay stuck in the past. Speed it up, skip the hassles quaerat.</p>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 mt-20 gap-y-6">
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://demo.themefisher.com/novena/images/team/1.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">John Marshal</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Internist, Emergency Physician</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://demo.themefisher.com/novena/images/team/2.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Marshal Root</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Surgeon, Сardiologist</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://demo.themefisher.com/novena/images/team/3.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Siamon john</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Internist, General Practitioner</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://demo.themefisher.com/novena/images/team/4.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
            </div>

            {/* --------------------------------Say About------------------- */}
            <div class="w-full max-w-5xl rounded bg-white mx-auto text-gray-800 relative md:text-left">
                <div class="md:flex items-center -mx-16">
                    <div class="w-full md:w-1/2">
                        <div class="relative">
                            <img src="https://komed-health.com/wp-content/uploads/elementor/thumbs/90030369_xl-copy-scaled-op44cp8pep533rw9hh5p4rrmjfoyrilm4hhx4qvzls.jpg" class="w-full relative z-10" alt="" />

                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-20">
                        <div class="mb-10">
                            <h1 class="font-bold text-5xl mb-5">What they say about us</h1>
                            <div class="px-5 py-4 bg-whit max-w-lg">
                                <div class="h-96 carousel carousel-vertical rounded-box">
                                    <div class="carousel-item h-80" id="item1">
                                        <div class="flex mb-16">
                                            <div class="ml-2 mt-20">
                                                <h1 class="block font-bold text-xl leading-snug text-black">Modern Service!</h1>
                                                <p class="text-black font-bold leading-snug md:leading-normal">Kolis Muller</p>
                                                <p class="text-black leading-snug md:leading-normal">Lorem ipsum dolor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqup</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-80" id="item2">
                                        <div class="flex mb-16">
                                            <div class="ml-2 mt-20">
                                                <h1 class="block font-bold text-xl leading-snug text-black">Modern Service!</h1>
                                                <p class="text-black font-bold leading-snug md:leading-normal">Muller Sarth</p>
                                                <p class="text-black leading-snug md:leading-normal">Lorem ipsum dolor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-80" id="item3">
                                        <div class="flex mb-16">
                                            <div class="ml-2 mt-20">
                                                <h1 class="block font-bold text-xl leading-snug text-black">Modern Service!</h1>
                                                <p class="text-black font-bold leading-snug md:leading-normal">David Parvez</p>
                                                <p class="text-black leading-snug md:leading-normal">Lorem ipsum dolor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-80" id="item4">
                                        <div class="flex mb-16">
                                            <div class="ml-2 mt-20">
                                                <h1 class="block font-bold text-xl leading-snug text-black">Modern Service!</h1>
                                                <p class="text-black font-bold leading-snug md:leading-normal">Aurthohin Parvez</p>
                                                <p class="text-black leading-snug md:leading-normal">Lorem ipsum dolor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-80" id="item5">
                                        <div class="flex mb-16">
                                            <div class="ml-2 mt-20">
                                                <h1 class="block font-bold text-xl leading-snug text-black">Modern Service!</h1>
                                                <p class="text-black font-bold leading-snug md:leading-normal">Nusrat Jahan</p>
                                                <p class="text-black leading-snug md:leading-normal">Lorem ipsum dolor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="flex justify-center w-full py-2 gap-2">
                                    <a href="#item1" class="btn btn-xs">1</a>
                                    <a href="#item2" class="btn btn-xs">2</a>
                                    <a href="#item3" class="btn btn-xs">3</a>
                                    <a href="#item4" class="btn btn-xs">4</a>
                                    <a href="#item5" class="btn btn-xs">5</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;