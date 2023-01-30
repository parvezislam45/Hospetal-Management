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
                    <NavLink to="/orthopadic"><a href="/" class="text-black transition-colors transform dark:text-black border-red-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Orthopadic</a></NavLink>
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
            <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg" alt="piña" />
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
                        <img class="w-full h-full object-cover rounded-t" src="https://previews.123rf.com/images/prashantzi/prashantzi1103/prashantzi110300003/9423649-indian-beautiful-female-doctor.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Marshal Root</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Medicine Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://st2.depositphotos.com/5653638/11526/i/950/depositphotos_115269298-stock-photo-beautiful-female-indian-doctor-looking.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Siamon john</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Pediatric Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
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
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://st2.depositphotos.com/1518767/6901/i/950/depositphotos_69013841-stock-photo-doctor-thinking-with-hand-on.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Androw Herry</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Cardiology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://watermark.lovepik.com/photo/20211201/large/lovepik-male-doctor-thinking-picture_501367380.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Alex Adam</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Neurology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3WVxsgNCIetxM1Ial__TM0ens93WEwr59izL6FXbsBMSjbrTO8y_Os1IU3f6GmQadgA&usqp=CAU" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Danly Seol</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Dental Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://st3.depositphotos.com/2719405/14492/i/1600/depositphotos_144927887-stock-photo-doctor-thinking-on-prescription.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Robert Hson</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Medicine Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://img.freepik.com/free-photo/medical-working-remotely-computer-serious-cute-smart-doctor-lab-coat-thinking-something_140725-167044.jpg?w=2000" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">John Leon</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Pediatric Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://assets.lybrate.com/img/documents/doctor/dp/b81b3dcbd15b4332b343cb69d52ffd85/ChinthuMadeswaran-c6a205.jpg" alt="piña" />
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
                        <img class="w-full h-full object-cover rounded-t" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYea0QbYM19SmFx5Gv947JvEh046TIlS0Oq0yr8czEfVcCSEZ19SUZ-gwfyiT6v_vRy_8&usqp=CAU" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">pat Jhonson</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Traumatology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFh31P-dlC18hiCViojk6l7f6-U7NZTTk7bsmEHQw3pPF4hjoeT4tGT5RgwetmjN-0E_I&usqp=CAU" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Carrey Fanandez</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Cardiology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://img.freepik.com/premium-photo/male-doctor_101945-639.jpg?w=2000" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Johnson Leo</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Medicine Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg" alt="piña" />
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
                        <img class="w-full h-full object-cover rounded-t" src="https://img.freepik.com/premium-photo/female-doctor-smiling-background-with-patient-bed-two-doctors_665183-13430.jpg?w=360" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Vanus Willey</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Dental Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://www.seekpng.com/png/detail/32-324179_lady-doctor-png-lady-doctor-images-png.png" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Ramisa Anjum</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Dental Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBHxnMZGjXrxcxpsUPAc7GeGHho5E14WIIhW24RSRsi8U9umF7rBpYCmz8w7h_ARliGM&usqp=CAU" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Asha Moni</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Orthopedic Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://st.depositphotos.com/4218696/54058/i/600/depositphotos_540580786-stock-photo-smiling-friendly-millennial-cute-indian.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Sadia Afrin</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Traumatology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJW5IT4O0Q4vhItGr2QSdzZh22Ft5HZRYe2g-SWEdxlV1I9aKcYJ4z2NxsOKPu-GNrFJU&usqp=CAU" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Jos Wood</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Pediatric Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=170667a&w=0&k=20&c=g1hStRH0gEQ7jkBw__y3EJ4tyTC3ak4fErRmmIvBj5I=" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Alison Baker</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Medicine Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://t4.ftcdn.net/jpg/02/20/90/19/360_F_220901940_V26RzCNGgJrZBNBScQEWdTe6ix6f52vQ.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Merry Henry</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Traumatology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://t3.ftcdn.net/jpg/02/74/03/26/360_F_274032618_OhzkPv4gkPC7pIumPDQYlILKH6eB28WH.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Alex Flora</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Traumatology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSdvi2ds3yejmk8mhvxYr1OpdVTrSM.jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Dolley Jhon</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Pediatric Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/8376152/pexels-photo-8376152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">Wilimson Jenly</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Neurology Surgeon</p>
                    </div>
                </div>
                <div class="bg-white w-72 h-96 m-3 mx-auto">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="http://st2.depositphotos.com/5906386/8938/i/450/depositphotos_89385676-beautiful-girl-doctor-in-a-white-coat-examines-X-ray-photo-of-the-patient-to-identify-the-problem.-Professional-conversation-consultation-of-doctors.-The-work-of-the-conference..jpg" alt="piña" />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="/" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-bold uppercase tracking-wide ">John Marshal</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Cardiology Surgeon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;