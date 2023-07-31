import React, { useState } from 'react';
import { Testimonies } from '../../dummyData';
import { CustomButton } from '../../CustomeBtn';
import { FaStar } from 'react-icons/fa';

const Testimony = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const totalItems = Testimonies.length;

  const handleLoadMore = () => {
    setItemsToShow((prevItems) => Math.min(prevItems + 3, totalItems));
  };

  return (
    <div className='p-6 bg-[#F49AC1]'>
      <h4 className='my-4 text-center font-poppins text-[22px] text-[#202020]'>What Our Clients Are Saying About Us</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Testimonies?.slice(0, itemsToShow)?.map((item, index) => (
          <div key={index} className='p-4 bg-white rounded-md h-[253px] '>
            <div className='flex justify-between items-center h-[30%]'>
              <h2 className='text-primary font-bold text-[12px] md:text-[14px] font-poppins'>{item?.title}</h2>
              <div className='flex'>
              <FaStar color='#FFCB45'/>
              <FaStar color='#FFCB45'/>
              <FaStar color='#FFCB45'/>
              <FaStar color='#FFCB45'/>
              <FaStar color='#FFCB45'/>
              </div>
            </div>
            <p className='text-[12px] md:text-[14px] h-[70%] text-[#3F3F3F] font-poppins'>{item?.message}</p>

          </div>
        ))}
      </div>
      {itemsToShow < totalItems && (
        <div className='flex justify-center my-2'>
          <CustomButton onClick={handleLoadMore}>Load More</CustomButton>
        </div>
      )}
    </div>
  );
};

export default Testimony;
