import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Appointment = () => {
    return (
        <div>
            <section class="bg-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto h-40 max-w-screen-sm text-center">
                        <p class=" text-white font-bold md:text-lg">Book your Seat</p>
                        <h2 class="mb-4 text-6xl font-bold leading-tight text-gray-900 dark:text-white">Appointment</h2>
                    </div>
                </div>
            </section>

            <div class="container mx-auto bg-white p-4 lg:p-12">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div class="overflow-hidden rounded-2xl ">
                        <div class="flex items-center text-blue-500 ">
                            <div class="">
                                <img className='w-28 h-28' src="https://images.squarespace-cdn.com/content/v1/5c341e3f96d455b78c0b6b47/1566528657627-IIKV36I2XIKGUL0OVR1X/marketing+consulting" alt="" />
                            </div>
                            
                        </div>
                        <h1 className='text-2xl font-bold mt-1'>Call for an Emergency Service!</h1>
                        <h1 className="text-5xl font-bold mt-2">+84 789 1256</h1>
                    </div>
                    <div class="overflow-hidden rounded-2xl">
                        <h2 class="text-4xl font-extrabold text-gray-700 text-start">Book an Appoinment</h2>
                        <p class="text-md font-normal text-black text-start mt-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                        <div>
                            <div class="flex -mx-3 mt-4">
                                <div class="w-1/2 px-3 mb-5">
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <select class="select select-bordered w-64 h-14 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-50 outline-none focus:border-indigo-500">
                                            <option disabled selected>Choose Department</option>
                                            <option>Software Design</option>
                                            <option>Development Cycle</option>
                                            <option>Software Development</option>
                                            <option>Maintenance</option>
                                            <option>Process Query</option>
                                            <option>Cost & Duration</option>
                                            <option>Model Delivery</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="w-1/2 px-3 mb-5">
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <select class="select select-bordered w-64 h-14 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-50 outline-none focus:border-indigo-500">
                                            <option disabled selected>Select Doctor</option>
                                            <option>Software Design</option>
                                            <option>Development Cycle</option>
                                            <option>Software Development</option>
                                            <option>Maintenance</option>
                                            <option>Process Query</option>
                                            <option>Cost & Duration</option>
                                            <option>Model Delivery</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-1/2 px-3 mb-5">
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-64 h-14 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-50 outline-none focus:border-indigo-500" placeholder="dd/mm/yy" />
                                    </div>
                                </div>
                                <div class="w-1/2 px-3 mb-5">
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-64 h-14 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-50 outline-none focus:border-indigo-500" placeholder="Time" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-1/2 px-3 mb-5">
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-64 h-14 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-50 outline-none focus:border-indigo-500" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div class="w-1/2 px-3 mb-5">
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-64 h-14 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-50 outline-none focus:border-indigo-500" placeholder="Phone Number" />
                                    </div>

                                </div>

                            </div>
                            <textarea class="textarea textarea-bordered w-full h-40 px-6 mb-5 bg-gray-50" placeholder="Your Massage"></textarea>
                            <button class="btn btn-sm rounded-full h-12">Make A Appointment</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;