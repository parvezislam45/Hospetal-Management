import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/'> <a href="/" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Home</a></NavLink>
                            <NavLink to='/'> <a href="/about" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">About</a></NavLink>
                            <NavLink to='/service'> <a href="/" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Service</a></NavLink>
                            <NavLink to='/appointment'> <a href="/" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Appointment</a></NavLink>
                            <NavLink to='/doctor'> <a href="/" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Doctors</a></NavLink>
                            <NavLink to='/department'> <a href="/" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Department</a></NavLink>
                            <NavLink to='/blog'> <a href="/" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Blog</a></NavLink>
                            <NavLink to='/contract'> <a href="/" class="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 ease-in duration-300 text-sm font-bold">Contract</a></NavLink>

                        </ul>
                    </div>
                    <img src="https://i.ibb.co/TqSFXRQ/Screenshot-2022-11-27-000533.jpg"className='w-14 h-14' alt="" />
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal justify-items-center">
                        <div className='text-center flex justify-center'>
                            <NavLink to='/'> <a href="/" class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600 ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">Home</a></NavLink>
                            <NavLink to='/about'><p class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">About</p>

                            </NavLink>
                            <NavLink to='/service'> <a href="/" class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600 ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">Service</a></NavLink>
                            <NavLink to='/appointment'> <a href="/" class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600 ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">Appointment</a></NavLink>
                            <NavLink to='/doctor'><a href="/" class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600 ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">Doctors</a></NavLink>
                            <NavLink to='/department'> <a href="/" class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600 ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">Department</a></NavLink>
                            <NavLink to='/blog'> <a href="/" class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600 ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">Blog</a></NavLink>
                            <NavLink to='/contract'> <a href="/" class="text-black transition-colors transform dark:text-black border-red-700 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-red-600 ease-in duration-300 text-sm font-bold flex items-center px-4 -mb-1">Contract</a></NavLink>
                        </div>

                    </ul>
                </div>

                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

            </div>
        </div >
    );
};

export default Nav;