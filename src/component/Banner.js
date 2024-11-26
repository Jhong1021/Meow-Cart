import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14">
            {/* Animated Text */}
            <motion.div
                className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5"
                initial={{ opacity: 0, x: -100 }} // Initial state when out of view
                whileInView={{ opacity: 1, x: 0 }} // State when in view
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is in view
                transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
            >
                <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold text-[#BEB7A4]">
                    Boost your cat's health, energy, and shiny coat with essential vitamins!
                </h1>
            </motion.div>

            {/* Animated Image */}
            <motion.div
                className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10"
                initial={{ opacity: 0, y: 100 }} // Initial state when out of view
                whileInView={{ opacity: 1, y: 0 }} // State when in view
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is in view
                transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
            >
                <img
                    className="rounded-3xl w-80"
                    src="https://i.pinimg.com/736x/01/3a/d9/013ad9f852df4dc5c8b7f6b9ccce4d70.jpg"
                    alt="Hero Image"
                />
            </motion.div>
        </div>
    );
};

export default Banner;
