import React, { useEffect } from "react";
import backgroundImage from "../assets/Hero.png";
import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="h-[450px] lg:h-[70vh] w-full bg-center bg-no-repeat flex items-center justify-center p-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex flex-col justify-center items-center w-full " data-aos="slide-down">
                <h2 className="text-white font-bold text-[18px] md:text-[24px] text-center font-poppins">FIND A HOME FOR YOUR DESIGNS</h2>
                <p className="text-white text-[11px] md:text-[12px] my-2 text-center font-poppins">pop ups in top class hotels around the world</p>

                <div className="w-full flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Find a space"
                            className="w-[60%] md:w-[30%] h-[40px] px-4 text-[12px] text-[#666666]"
                    />
                    <select name="duration" id="" className="text-[#666666] h-[40px] px-2 md:px-8 border-l-2 bg-white">
                        <option value="duration" defaultValue={"duration"} >duration</option>
                        <option value="2weeks">2 weeks</option>
                        <option value="4weeks">4 weeks</option>
                        <option value="3months">3 months</option>
                    </select>
                    <div className="bg-primary p-3 ml-2 w-10 flex items-center justify-center cursor-pointer">
                    <FaSearch size={"18"} color="white" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
