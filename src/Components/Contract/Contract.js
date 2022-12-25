import React from 'react';

const Contract = () => {
    return (
        <div>
            <section class="bg-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto h-40 max-w-screen-sm text-center">
                        <p class=" text-white font-bold md:text-lg">Contact Us</p>
                        <h2 class="mb-4 text-6xl font-bold leading-tight text-gray-900 dark:text-white">Get In Touch</h2>
                    </div>
                </div>
            </section>

            <div className="container mx-11 grid grid-cols-1 md:grid-cols-3  mt-20">
                <div class="w-80 h-56 max-w-sm border-solid border-2 border-sky-500">
                    <div class="flex justify-center">

                        <div class="flex flex-col items-center mt-14 pr-3">
                            <img class="w-16 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZewkwJzwlLd3VIW5DFoDKEzNb59pqBfPmw&usqp=CAUicture-3.jpg" alt="Bonnie" />
                            <h5 class="mb-1 text-xl font-medium text-black">Call Us</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">+823-4565-13456r</span>
                        </div>
                    </div>
                </div>
                <div class="w-80 h-56 max-w-sm border-solid border-2 border-sky-500">
                    <div class="flex justify-center">

                        <div class="flex flex-col items-center mt-14 pr-3">
                            <img class="w-14 h-14" src="https://cdn.shopify.com/s/files/1/2032/9399/files/email_contact.png?v=1632926993" alt="Bonnie" />
                            <h5 class="mb-1 text-xl font-medium text-black">Email Us</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">contact@mail.com</span>
                        </div>
                    </div>
                </div>
                <div class="w-80 h-56 max-w-sm border-solid border-2 border-sky-500">
                    <div class="flex justify-center">

                        <div class="flex flex-col items-center mt-14 pr-3">
                            <img class="w-14 h-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhWl_5rNefSBKXHCgZ0z9ciOqDs1d3AV6Lw&usqp=CAU" alt="Bonnie" />
                            <h5 class="mb-1 text-xl font-medium text-black">Location</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">North Main Street,Brooklyn Australia</span>
                        </div>
                    </div>
                </div>
            </div>

            <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 text-center mt-24">Contact us</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl mt-3">Laboriosam exercitationem molestias beatae eos pariatur, similique,<br></br>excepturi mollitia sit perferendis maiores ratione aliquam</p>
            <div class="max-w-full mx-auto bg-white p-16">
                <form>
                    <div class="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <input type="text" placeholder="Your Full Name" class="input w-full h-16 p-2.5 bg-gray-50" />
                        </div>
                        <div>
                           
                        <input type="text" placeholder="Your Email Address" class="input w-full h-16 p-2.5 bg-gray-50" />
                        </div>
                        <div>
                            
                        <input type="text" placeholder="Your Phone Number" class="input w-full h-16 p-2.5 bg-gray-50" />
                        </div>
                        <div>
                            
                        <input type="text" placeholder="Your Query Topic" class="input w-full h-16 p-2.5 bg-gray-50" />
                        </div>        
                    </div>
                    <div class="mb-6">
                      
                        <textarea class="textarea textarea-bordered w-full h-56 bg-gray-50 text-black text-sm" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" class="text-white bg-black rounded-full h-12 text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contract;