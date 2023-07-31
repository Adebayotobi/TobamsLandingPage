import React, {useState, useEffect} from 'react'
import { Hotels } from '../../dummyData'
import location from "../assets/location.png"
import Love from "../assets/love.png"
import ArrowRight from "../assets/rightarrow.png"
import ArrowLeft from "../assets/leftarrow.png"
import { CustomButton } from '../../CustomeBtn'
import { getInitialCardsToShow } from '../../services'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from 'react-icons/fa';
import { formatToPounds } from '../../utilis';  


const AvailableHotels =()=>  {
    const [hotelsToShow, setHotelsToShow] = useState(getInitialCardsToShow);
     const [showAllCards, setShowAllCards] = useState(false); 
     const [imageIndex, setImageIndex] = useState({});
     useEffect(() => {

        const initialImageIndex = Hotels.reduce((acc, hotel, index) => {
          acc[index] = 0;
          return acc;
        }, {});
        setImageIndex(initialImageIndex);
        AOS.init({ duration: 2000 });
      }, []);

    const handleShowAllHotels = () => {
        setHotelsToShow({
            largeScreen: Hotels.length,
            mediumScreen: Hotels.length,
            smallScreen: Hotels.length,
        });
    };

    useEffect(() => {
        const handleWindowResize = () => {
            const windowWidth = window.innerWidth;
            setHotelsToShow({
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
          [index]: (prevState[index] + 1) % Hotels[index]?.images.length,
        }));
      };
    
      const handlePreviousImage = (index) => {
        setImageIndex((prevState) => ({
          ...prevState,
          [index]: (prevState[index] - 1 + Hotels[index]?.images.length) % Hotels[index]?.images.length,
        }));
      };

  return (
         <div className='p-6 bg-[#F6F6FA]'>
            <h2 className='text-[22px] md:text-[28px] font-poppins'>Available Hotel Spaces</h2>
            <p className='text-[12px] text-[#3F3F3F] my-2 font-poppins'>Unlock Your Creative Haven: get Your Dream Space Today</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ' data-aos="fade-right">
               {Hotels?.slice(0, hotelsToShow.largeScreen)?.map((data, index) => (
                    <div className='bg-white p-4 shadow-md w-full md:w-[90%] h-[250px] cursor-pointer' key={index}>
                        <div className='relative h-[60%] w-full'>
                            <img   src={data?.images[imageIndex[index]] || data?.images[0]} alt="No image" className='h-full w-full shadow-md rounded-t-md' />
                            <img src={Love} alt="" className='absolute top-[8%] right-[4%] cursor-pointer h-6 w-6' />
                            <div className='absolute top-[50%] right-[3%] h-6 w-6 bg-gray-200 rounded-[50%] flex items-center justify-center cursor-pointer'
                                 onClick={() => handleNextImage(index)}
                            >
                                <img src={ArrowRight} alt="" className=' w-2 h-2'/>
                            </div>
                            <div className='absolute top-[50%] left-[3%] h-6 w-6 bg-gray-200 rounded-[50%] flex items-center justify-center cursor-pointer'
                             onClick={() => handlePreviousImage(index)}
                            >
                                <img src={ArrowLeft} alt="" className='w-2 h-2' />
                            </div>
                        </div>
                        <h4 className='text-[14px] font-semibold my-1 font-poppins'>{data?.name}</h4>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                            <img src={location} alt="" className='w-4 h-4 mr-2'/>
                        <h6 className='text-[10px] font-poppins'>{data?.location}</h6>
                        </div>
                        <p className='flex items-center'> <FaStar color='#FFCB45'/> <span className='text-[12px] text-[#575757] ml-1'>4.5</span></p>
                        </div>
                  
                        <h6 className='text-primary text-[12px] my-1 italic font-poppins'>{data?.availabilty}</h6>
                        <p className=' text-[#494848] text-[12px] font-poppins'> From <span className=' font-bold font-poppins'>{formatToPounds(data?.amount)}</span>/day</p>
                    </div>
                ))}
            </div>
            {!showAllCards && ( 
        <div className='flex justify-end my-2 pr-6'>
          <CustomButton onClick={handleShowAllHotels} />
        </div>
      )}
        </div>
  )
}

export default AvailableHotels