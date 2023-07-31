import React from 'react'
// import CopyRight from "../assets/CopyRight.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='p-10 flex flex-col md:flex-row justify-between'>
                <div className='w-full md:[20%]'>
                    <h2 className='text-primary my-4 text-[20px]'>Helpful Tips</h2>
                    <p className='text-[14px] cursor-pointer text-[#202020]'>How it Works</p>
                    <p className='my-4 text-[14px] text-[#202020] cursor-pointer'>Rent Space</p>
                    <p className='text-[14px] text-[#202020] cursor-pointer'>Hotels Dashboard</p>
                    <p className='my-4 text-[14px] text-[#202020] cursor-pointer'>Trending Hotels</p>
                    <p className='text-[14px] text-[#202020] cursor-pointer'>Verified Brands</p>
                </div>
                <div className='my-6 md:my-0 w-full md:[20%]'>
                    <h2 className='text-primary my-4 text-[20px]'>Quicklinks</h2>
                    <p className='text-[14px] cursor-pointer text-[#202020]'>About Us</p>
                    <p className='my-4 text-[14px] text-[#202020] cursor-pointer'>FAQs</p>
                    <p className='text-[14px] text-[#202020] cursor-pointer'>Terms of Service</p>
                    <p className='my-4 text-[14px] text-[#202020] cursor-pointer'>Privacy Policy</p>
                    <p className='text-[14px] text-[#202020] cursor-pointer'>Cookie Policy</p>
                </div>
                <div className='w-full md:[10%]'>
                    <h2 className='text-primary my-4 text-[20px]'>Discover</h2>
                    <p className='text-[14px] cursor-pointer text-[#202020]'>City Guide</p>
                    <p className='my-4 text-[14px] text-[#202020] cursor-pointer'>Blog</p>
                    <p className='text-[14px] text-[#202020] cursor-pointer'>Reviews</p>
                    <p className='my-4 text-[14px] text-[#202020] cursor-pointer'>Events</p>
                </div>
                <div className='flex flex-col  mt-6 md:mt-0 w-full md:[50%]'>
                    <h4 className='text-[12px] lg:text-[13px]  '>Get updates about available spaces, weekly digest of our most important activities and more in your email</h4>
                    <div className='flex flex-col md:flex-row py-4'>
                        <input
                            type="text"
                            placeholder='Enter Your Email Address'
                            className='p-2 w-[100%] text-[12px] mr-1 border border-[#666] h-[30px]'
                        />
                        <button className='bg-primary w-[100px] text-white p-2 h-[30px] flex items-center text-[12px] mt-2 md:mt-0'>
                            Subscribe
                        </button>
                    </div>
                    <div className='flex flex-col w-full md:[50%]'>
                        <a href='mailto:theteam@hotelsfashion.com' className='flex items-center text-[12px] my-2'>
                        mailto:theteam@hotelsfashion.com
                        </a>
                        <div className='flex mt-3'>
                        <FaFacebookF className='mr-6 cursor-pointer' size={24} color='black' />
                        <FaLinkedinIn className='mr-6 cursor-pointer' size={24} color='black'/>
                            <FaInstagram className='mr-6 cursor-pointer' size={24} color='black' />
                            <FaTwitter className='mr-4 cursor-pointer' size={24} color='black'/>
                        </div>
                    </div>


                </div>
            </div>

            <p className='text-white text-[10px] md:text-[12px] bg-black px-10 py-2 lg:py-4'>
                <span className='mr-4'>Hotels Fashion</span>
                &copy; {new Date().getFullYear()}. All Rights Reserved
            </p>

        </>
    )
}

export default Footer