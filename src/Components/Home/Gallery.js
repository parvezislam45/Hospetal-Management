import React from 'react';
import CountUp from 'react-countup';

const Gallery = () => {
    return (
        <div>
            {/* <div class="">
                <div class="flex-col items-center lg:flex-row-reverse  bg-indigo-900">
                    <div class="stats shadow">

                        <div class="stat place-items-center bg-indigo-900">
                            <div class="stat-title">Downloads</div>
                            <div class="stat-value  text-white text-6xl">58</div>
                            <div class="stat-desc text-white">Happy People</div>
                        </div>
                        <div class="stat place-items-center bg-indigo-900">
                            <div class="stat-title">Downloads</div>
                            <div class="stat-value  text-white text-6xl">58</div>
                            <div class="stat-desc text-white">Happy People</div>
                        </div>
                        <div class="stat place-items-center bg-indigo-900">
                            <div class="stat-title">Downloads</div>
                            <div class="stat-value  text-white text-6xl">58</div>
                            <div class="stat-desc text-white">Happy People</div>
                        </div>
                        <div class="stat place-items-center bg-indigo-900">
                            <div class="stat-title">Downloads</div>
                            <div class="stat-value  text-white text-6xl">58</div>
                            <div class="stat-desc text-white">Happy People</div>
                        </div>

                       

                    </div>

                </div>
            </div> */}
            <div class="">
          
<main class="profile-page">
  <section class="">
    <div class="container mx-auto px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-blue-900 w-full mb-6 shadow-xl rounded-lg">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 ' >
                <div class="mr-10 p-10 text-center">
                  <span class="text-8xl font-bold block uppercase tracking-wide text-white"><CountUp end={22} /></span><span class="text-md text-white font-semibold">Happy People</span>
                </div>
                <div class="mr-10 p-10 text-center">
                  <span class="text-8xl font-bold block uppercase tracking-wide text-white"><CountUp end={10} /></span><span class="text-sm text-white font-semibold">Surgery Completed</span>
                </div>
                <div class="lg:mr-10 p-10 text-center">
                  <span class="text-8xl font-bold block uppercase tracking-wide text-white"><CountUp end={89} /></span><span class="text-sm text-white font-semibold">Expert Doctors</span>
                </div>
                <div class="lg:mr-10 p-10 text-center">
                  <span class="text-8xl font-bold block uppercase tracking-wide text-white"><CountUp end={60} /></span><span class="text-sm text-white font-semibold">Worldwide Branch</span>
                </div>
                </div>
                
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  </section>
</main>
</div>
        </div>
    );
};

export default Gallery;