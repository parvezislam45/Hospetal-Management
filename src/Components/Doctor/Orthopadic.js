import React from 'react';
import { NavLink } from 'react-router-dom';

const Orthopadic = () => {
    return (
        <div>
             <section class="bg-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto h-40 max-w-screen-sm text-center">
                        <p class=" text-white font-bold md:text-lg">All Doctors</p>
                        <h2 class="mb-4 text-6xl font-bold leading-tight text-gray-900 dark:text-white">Specalized Doctors</h2>
                    </div>
                </div>
            </section>
            <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center mt-24">Doctors</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">We provide a wide range of creative services adipisicing elit. Autem maxime <br></br>rem modi eaque, voluptate. Beatae officiis neque</p>

            <nav class="bg-white">
                <div class="container flex items-center justify-center p-6 mx-auto text-black capitalize">
                    <NavLink to="/doctor"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">All Department</a></NavLink>
                    <NavLink to="/orthopadic"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Orthopadic</a></NavLink>
                    <NavLink to="/cardiology"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Cardiology</a></NavLink>
                    <NavLink to="/medicine"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Medicine</a></NavLink>
                    <NavLink to="/dental"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Dental</a></NavLink>
                    <NavLink to="/neurology"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Neurology</a></NavLink>
                    <NavLink to="/pediatric"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Pediatric</a></NavLink>
                    <NavLink to="/traumatology"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Traumatology</a></NavLink>
                </div>
            </nav>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 mt-20 gap-y-6">
            <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg" alt="pi??a" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Aurthohin Parvez</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Neurology Surgeon</p>
                    </div>
                </div>
            <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://previews.123rf.com/images/megaflopp/megaflopp1612/megaflopp161200021/69671076-beautiful-smiling-female-doctor-hold-tablet-pc-and-point-in-touch-screen-with-finger-human-interacti.jpg" alt="pi??a" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://assets.lybrate.com/img/documents/doctor/dp/b81b3dcbd15b4332b343cb69d52ffd85/ChinthuMadeswaran-c6a205.jpg" alt="pi??a" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Jolly Drone</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBHxnMZGjXrxcxpsUPAc7GeGHho5E14WIIhW24RSRsi8U9umF7rBpYCmz8w7h_ARliGM&usqp=CAU" alt="pi??a" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Asha Moni</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orthopadic;