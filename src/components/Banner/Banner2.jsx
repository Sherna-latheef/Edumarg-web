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
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    className="flex flex-col justify-center ">
                    <div className="text-center md:text-left space-y-4 lg-max-w-[450px]">


                        <h1 className="text-4xl font-bold !leading-snug font-body">
                            About Us</h1>


                        <p className="text-dark2"> India’s best Educational Consultancy

                            Edumarg is leading educational consultancy in India to facilitate admission between UGC/AICTE
                            approved Universities and aspiring students across India. We have currently partnered with 5+
                            UGC/AICTE approved universities to guide and facilitate the admission process of student folk
                            who would like to get admission for courses like UG, PG, Diploma and B Tech. We are located
                            in multiple cities across India and acts as the intermediator to keep the pace of rapid
                            development happening in the education sector.
                        </p>
                        <a href=" " className="primary-btn !mt-8">
                            join now
                        </a>
                    </div>
                </motion.div>

                {/* banner image */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
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
