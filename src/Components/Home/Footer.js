import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer items-center p-4 text-neutral-content mt-5 bg-white">
                <div class="items-center grid-flow-col mx-auto">
                    <p className='text-lg text-black'>Copyright © 2022,Designed & Developed by <span className='font-bold'>David Parvez</span></p>
                </div>
                <div class="">
                    <div class="newslatter ml-10">
                        <form>
                            <input type="email" name="email" id="mail" placeholder="Your Email Address"/>
                                <input className='px-4' type="submit" name="submit" value="Subscribe"/>
                                </form>
                            </div>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;