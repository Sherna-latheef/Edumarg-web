import React from "react";
import { AiFillBank } from "react-icons/ai";
import BgImage from "../../assets/bg.jpg";
import { motion } from "framer-motion"; // Corrected the import

const bgStyle = {
  backgroundImage: `url(${BgImage})`, // Fixed with backticks
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}

        style={bgStyle} className="container py-24 md:py-48">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}


          className="flex flex-col justify-center">

          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              450k students are learning from us
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
              It has survived not only five centuries,
            </p>
            <a href="" className="primary-btn !mt-8 inline-flex items-center  gap-4 group">
              Subscribe Now
              <AiFillBank className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
