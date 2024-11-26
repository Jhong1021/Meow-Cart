import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import backgroundImage from "../assets/images/catt_upscayl_2x_realesrgan-x4plus.png";

const Home = () => {
    // Use the intersection observer to track when the content is visible
    const [ref, inView] = useInView({
        triggerOnce: false, // Animation triggers every time it enters the viewport
        threshold: 0.2,    // Percentage of the element that needs to be visible (20%)
    });

    return (
        <main
            id="home"
            className="relative overflow-hidden h-screen"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <motion.div
                ref={ref} // Attach the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }} // Starting state: invisible and moved down
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on inView
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
                className="flex flex-col justify-end items-center h-full text-center text-black px-6 z-20 relative pb-20 sm:mt-10"
            >
                {/* Heading */}
                <h1 className="font-bebas-neue text-6xl sm:text-8xl font-black leading-none mb-6 text-[#BEB7A4]">
                    Feline Fitness Starts Here!
                </h1>

                {/* Paragraph */}
                <h3 className="text-sm sm:text-base mb-8 text-[#BEB7A4]">
                    Boost your cat's health with essential vitamins for a shiny coat, strong immune system, and overall vitality.
                </h3>

                {/* Button Group */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4 sm:space-y-0">
                    <a
                        href="#products"
                        className="text-white font-bold bg-[#BEB7A4] hover:bg-blue-500 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group"
                        aria-label="Buy now"
                    >
                        <span>Buy now</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="group-hover:translate-x-1 transition-transform ease duration-200"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                            />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </main>
    );
};

export default Home;
