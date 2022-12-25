import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar">
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-center flex justify-center">   
                        <Link> <li className='hover:none'><a href="/" class="text-black  dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 text-sm font-bold">Drop</a></li></Link>
                        <li><a>Parent</a>
                            <ul class="">
                                <Link> <li className='hover:bg-secondary-focus'><a href="/" class="text-black  dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 text-sm font-bold">Drop</a></li></Link>
                                <Link> <li><a href="/" class="text-black  dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-2 focus:border-b-2-violet-300 text-sm font-bold">Drop</a></li></Link>
                            </ul>
                        </li>
                        <li><a class="link link-hover">I'm a simple link</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;