import React, { useState } from "react";
import { motion } from "framer-motion";
import Login from "./Login"; // Import Login component
import clickSound from "../assets/sounds/kitty.mp3"; // Adjust the path to your sound file

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sound effect instance
    const playSound = () => {
        const audio = new Audio(clickSound); // Load the sound
        audio.play(); // Play the sound
    };

    // Toggle modal visibility with sound
    const toggleModal = () => {
        playSound(); // Play sound on toggle
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {/* Navbar with Framer Motion animation */}
            <motion.header
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white bg-opacity-50 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
                initial={{ opacity: 0, y: -50 }} // Initial state: hidden and moved up
                animate={{ opacity: 1, y: 0 }} // Final state: fully visible and at normal position
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
            >
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a
                                aria-current="page"
                                className="flex items-center"
                                href="/"
                                onClick={playSound} // Add sound effect
                            >
                                <img
                                    className="h-7 w-auto"
                                    src="https://parspng.com/wp-content/uploads/2023/01/catpng.parspng.com_.png"
                                    alt="Website Title"
                                />
                            </a>
                            <span className="ml-3 font-semibold">Meow</span>
                            <span className="ml-1 font-semibold text-[#BEB7A4]">Mart</span>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <a
                                aria-current="page"
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#home"
                                onClick={playSound} // Add sound effect
                            >
                                Home
                            </a>
                            <a
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#products"
                                onClick={playSound} // Add sound effect
                            >
                                Product
                            </a>
                            <a
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#contact"
                                onClick={playSound} // Add sound effect
                            >
                                Contact
                            </a>
                            <a
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#blog"
                                onClick={playSound} // Add sound effect
                            >
                                Blog
                            </a>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <button
                                className="inline-flex items-center justify-center rounded-xl bg-[#BEB7A4] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                onClick={toggleModal} // Toggle modal and play sound
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Modal for Login */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 z-40 flex justify-center items-center bg-transparent"
                    initial={{ opacity: 0, scale: 0.9 }} // Initial modal state
                    animate={{ opacity: 1, scale: 1 }} // Animation for modal
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="min-h-screen flex justify-center items-center">
                        <button
                            className="absolute top-2 right-2 text-gray-500"
                            onClick={toggleModal} // Close modal and play sound
                        >
                            &times;
                        </button>
                        <Login /> {/* Display Login component inside modal */}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
