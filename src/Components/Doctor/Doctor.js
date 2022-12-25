import React from 'react';
import { NavLink } from 'react-router-dom';

const Doctor = () => {
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

            {/* ------------------- Nested Nav ------------------------ */}
            <nav class="bg-white">
                <div class="container flex items-center justify-center p-6 mx-auto text-black capitalize">
                    <NavLink to="/doctor"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">All Department</a></NavLink>
                    <NavLink to="/cardiology"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Cardiology</a></NavLink>
                    <NavLink to="/medicine"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Medicine</a></NavLink>
                    <NavLink to="/dental"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Dental</a></NavLink>
                    <NavLink to="/neurology"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Neurology</a></NavLink>
                    <NavLink to="/pediatric"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Pediatric</a></NavLink>
                    <NavLink to="/traumatology"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Traumatology</a></NavLink>
                </div>
            </nav>

            {/* ------------- All Doctor ---------------------------------- */}

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 mt-20 gap-y-6">
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="http://st2.depositphotos.com/5906386/8938/i/450/depositphotos_89385676-beautiful-girl-doctor-in-a-white-coat-examines-X-ray-photo-of-the-patient-to-identify-the-problem.-Professional-conversation-consultation-of-doctors.-The-work-of-the-conference..jpg" alt="piña" />
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
                        <img class="w-full h-full object-cover rounded-t" src="https://previews.123rf.com/images/prashantzi/prashantzi1103/prashantzi110300003/9423649-indian-beautiful-female-doctor.jpg" alt="piña" />
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
                        <img class="w-full h-full object-cover rounded-t" src="https://st2.depositphotos.com/5653638/11526/i/950/depositphotos_115269298-stock-photo-beautiful-female-indian-doctor-looking.jpg" alt="piña" />
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
                        <img class="w-full h-full object-cover rounded-t" src="https://previews.123rf.com/images/megaflopp/megaflopp1612/megaflopp161200021/69671076-beautiful-smiling-female-doctor-hold-tablet-pc-and-point-in-touch-screen-with-finger-human-interacti.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/DLpC5tY/young-male-doctor-close-up-happy-looking-camera-56751540.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/r26c9QY/1000-F-95475232-v-Fzttq66-WPP0-H9-P2-FLPbece94c-En8b-It.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/4PvvQK2/photo-1612531386530-97286d97c2d2.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/F4bynjy/istockphoto-468613710-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/r3qWbqF/african-american-male-doctor-handsome-holding-ray-67659806.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/kDxqGzv/Dr-Nima-Moradian-at-Exer-Urgent-Care.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/JdWpCj4/istockphoto-510414344-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/84Ns39T/istockphoto-588364332-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/F3hZxgv/istockphoto-523086961-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/6JFqyNt/istockphoto-910148768-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/stXtHZx/istockphoto-945520256-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/dj7GJqD/stock-photo-beautiful-curly-hair-female-doctor-21046.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/rw4ZCmC/istockphoto-1187318087-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/26nwPZD/istockphoto-1189303662-612x612.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/6ZxFxWJ/depositphotos-540580786-stock-photo-smiling-friendly-millennial-cute-indian.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://i.ibb.co/XpZ1BC2/istockphoto-1201439096-170667a.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Rishat Ahmed</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;