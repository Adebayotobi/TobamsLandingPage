import React, { useState, useEffect } from 'react'
import { Brands } from '../../dummyData'
import ArrowRight from "../assets/rightarrow.png"
import ArrowLeft from "../assets/leftarrow.png"
import Arrow from "../assets/Arrow.svg"
import { handleTruncateText } from '../../utilis'
import Brand from "../assets/MeetBrand.png"
import { CustomButton } from '../../CustomeBtn'
import { getInitialCardsToShow } from '../../services'
import AOS from "aos";
import "aos/dist/aos.css";

const TrendingBrands = () => {

    const [brandsToShow, setBrandsToShow] = useState(getInitialCardsToShow);
    const [showAllCards, setShowAllCards] = useState(false);
    const [imageIndex, setImageIndex] = useState({});
    useEffect(() => {

        const initialImageIndex = Brands.reduce((acc, brand, index) => {
            acc[index] = 0;
            return acc;
        }, {});
        setImageIndex(initialImageIndex);
        AOS.init({ duration: 2000 });
    }, []);

    const handleShowAllBrands = () => {
        setBrandsToShow({
            largeScreen: Brands.length,
            mediumScreen: Brands.length,
            smallScreen: Brands.length,
        });
        setShowAllCards(true);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            const windowWidth = window.innerWidth;
            setBrandsToShow({
                largeScreen: windowWidth >= 1024 ? 8 : windowWidth >= 768 ? 4 : 2,
                mediumScreen: windowWidth >= 768 ? 4 : 2,
                smallScreen: 2,
            });
        };
        window.addEventListener('resize', handleWindowResize);
    }, []);

    const handleNextImage = (index) => {
        setImageIndex((prevState) => ({
            ...prevState,
            [index]: (prevState[index] + 1) % Brands[index]?.image.length,
        }));
    };

    const handlePreviousImage = (index) => {
        setImageIndex((prevState) => ({
            ...prevState,
            [index]: (prevState[index] - 1 + Brands[index]?.image.length) % Brands[index]?.image.length,
        }));
    };
    return (
        <div className='p-6 bg-[#F6F6FA]' >
            <div data-aos="zoom-in">
                <h2 className='text-[22px] md:text-[28px] font-poppins'>Trending Brands</h2>
                <p className='text-[12px] text-[#3F3F3F] my-2 font-poppins'>Everything looks good with confidence and that confidence is what our brands give, a better you.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {Brands?.slice(0, brandsToShow.largeScreen)?.map((data, index) => (
                        <div className='bg-white p-4 shadow-md w-full md:w-[90%] h-[250px] cursor-pointer' key={index}>
                            <div className='relative h-[60%] w-full'>
                                <img
                                    src={data?.image[imageIndex[index]] || data?.image[0]}
                                    alt="No image" className='h-full w-full shadow-md rounded-t-md' />
                                <div className='absolute top-[50%] right-[3%] h-6 w-6 bg-gray-200 rounded-[50%] flex items-center justify-center cursor-pointer'
                                    onClick={() => handleNextImage(index)}
                                >
                                    <img src={ArrowRight} alt="" className=' w-2 h-2' />
                                </div>
                                <div className='absolute top-[50%] left-[3%] h-6 w-6 bg-gray-200 rounded-[50%] flex items-center justify-center cursor-pointer'
                                    onClick={() => handlePreviousImage(index)}
                                >
                                    <img src={ArrowLeft} alt="" className='w-2 h-2' />
                                </div>
                            </div>
                            <h4 className='text-[13px] font-semibold font-poppins my-2'>{data?.title}</h4>
                            <h6 className='text-[10px] font-poppins'>{handleTruncateText(data?.description)}</h6>
                        </div>
                    ))}
                </div>
                {!showAllCards && (
                    <div className='flex justify-end my-2 pr-6'>
                        <CustomButton onClick={handleShowAllBrands} />
                    </div>
                )}
            </div>
            <div className='mt-10 ' data-aos="zoom-in">
                <h2 className='text-[22px] md:text-[28px] my-6 font-poppins'>Meet Our Verified Exclusive Brands</h2>
                <div className='flex flex-col md:flex-row h-[450px]'>
                    <div className='w-full md:w-[50] h-[450px] md:h-full'>
                        <img src={Brand} alt="" className='w-full h-full bg-contain' />
                    </div>
                    <div className='w-full md:w-[50] h-full md:h-full bg-[#FFEFF6] pl-4 md:pl-20 flex flex-col justify-center'>
                        <h4 className='text-[12px] md:text-[14px] font-poppins'>Exceptional Brands</h4>
                        <h4 className='my-2 text-[12px] md:text-[14px] font-poppins'>Exclusive Brands</h4>
                        <h4 className='text-[12px] md:text-[14px] font-poppins'>Verified for Quality Services</h4>
                        <div className='bg-white w-[130px] flex p-2 cursor-pointer mt-2 rounded-md'>
                        <button className='mr-2 text-[12px] font-poppins'> Learn More</button>
                        <img src={Arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingBrands