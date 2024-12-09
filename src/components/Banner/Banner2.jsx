import React from "react";
import BannerPng from "../../assets/banner.png";
import { LiaAirbnb } from "react-icons/lia";
import { FadeUp } from "../Hero/Hero"; // Ensure FadeUp is correctly defined
import { motion } from "framer-motion";

const Banner2 = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                {/*banner text*/}
                <motion.div
                initial={{opacity: 0, x: -50}} 
                whileInView={{opacity: 1, x: 0}}

                className="flex flex-col justify-center ">
                    <div className="text-center md:text-left space-y-4 lg-max-w-[450px]">
                        
                    
                    <h1 className="text-4xl font-bold !leading-snug">
                        join our community to start your journey</h1>
                    <p className="text-dark2">It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout
                        . The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here,
                        </p>
                        <a href=" " className="primary-btn !mt-8">
                            join now 
                        </a>
                        </div>
                    </motion.div>

                {/* banner image */}
                <div className="flex justify-center items-center">
                    <motion.img
                    initial={{ opacity: 0, x: 50}}
                    whileInView={{ opacity: 1, x: 0}}
                        src={BannerPng}
                        alt=""
                        className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
                    />
                </div>

                    
                        
                </div>
            
        </section>
    );
};

export default Banner2;
