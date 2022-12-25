import React from 'react';

const Department = () => {
    return (
        <div>
          <section class="bg-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto h-40 max-w-screen-sm text-center">
                        <p class=" text-white font-bold md:text-lg">All Department</p>
                        <h2 class="mb-4 text-6xl font-bold leading-tight text-gray-900 dark:text-white">All Department</h2>
                    </div>
                </div>
            </section>
            <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center mt-24">Award winning patient care</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl mt-10">Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br></br>molestias nostrum laudantium. Maiores porro cumque quaerat.</p>

            {/* ------------------------ Department-------------------------- */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-20 gap-y-6">
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://img.freepik.com/fotos-premium/quimicos-que-trabajan-laboratorio-mujeres-jovenes-uniformes-protectores-tubos-ensayo-haciendo-experimentos_359031-20190.jpg?w=2000"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department Of Medicine</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://bonnergeneral.org/wp-content/uploads/2019/12/Surgical-Services_BGH.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department of Surgery</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://umanitoba.ca/medicine/sites/medicine/files/styles/3x2_900w/public/2021-03/obstetrics-gynecology-reproductive-sciences-department.jpg?itok=_hg9e0rb"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department of Gynecology</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://www.emccochin.com/wp-content/uploads/2016/11/Cardiology-1.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department of Cardiology</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://muscatprivatehospital.com/wp-content/uploads/2019/11/Neurosciences-1.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department of Neurology</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://www.jnuhealthcare.com/images/uro.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department of Urology</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://www.sghshospitals.com/images/medical-specialist5.png"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department of Gastrology</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://template.inspiroxindia.in/sites/2022/1/IX20212022-00137/uploads/dental.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Dental Department</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
                <a href="/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home"src="https://healthlyplus.com/wp-content/uploads/2021/09/Orthopedic-Surgery.jpg"class="h-56 w-full rounded-md object-cover"/>
                    <div class="mt-2">                  
                            <div>
                                <h1 class="text-start font-bold text-xl">Department of Orthopedic</h1>
                                <p class="text-lg text-gray-500">Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium </p>
                            </div> 
                    </div>
                    <button  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full mt-6 bg-white hover:text-red-600">
                            Learn More 
                            <svg class="w-5 h-5 ml-2 -mr-1  bg-white " fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="black"></path> </svg>
                            </button>
                </a>
              
            </div>
        </div>
    );
};

export default Department;