import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
    return (
        <article id="blog" className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
            {/* Blog Heading with Scroll Animation */}
            <motion.div
                className="p-5 md:w-full md:p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    The Benefits of Cats Taking Vitamins: Why Your Feline Friend Might Need Them
                </h1>
            </motion.div>

            {/* First Section with Scroll Animation */}
            <motion.div
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
            >
                <div className="p-5 md:w-4/6 md:p-8">
                    <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl text-left">
                        Supports a Healthy Coat and Skin
                    </p>
                    <p className="mt-3 text-gray-600 text-left">
                        One of the most visible signs of a healthy cat is its fur. A shiny, soft coat often indicates that your cat is in great shape. Vitamins like omega-3 fatty acids (found in fish oil) and biotin help promote a healthy coat and skin, reducing the risk of dryness, itchiness, or excessive shedding. If your cat suffers from skin conditions or dull fur, adding vitamins might improve its overall appearance.
                    </p>

                    <button className="mt-9 mr-2 flex items-center justify-start rounded-md bg-[#BEB7A4] px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-[#A79E8D]">
                        Read More
                    </button>
                </div>

                <div className="mx-auto flex items-center px-5 md:flex md:p-8">
                    <img
                        className="rounded-md shadow-lg w-72 h-72 object-cover"
                        src="https://i.pinimg.com/736x/2f/c6/38/2fc638ea23641e0c3bfc98b11ea40edd.jpg"
                        alt="Shop image"
                    />
                </div>


            </motion.div>

            {/* Second Section with Reverse Flex and Scroll Animation */}
            <motion.div
                className="flex flex-col md:flex-row-reverse"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
            >
                <div className="p-5 md:w-4/6 md:p-8">
                    <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl text-left">
                        Promotes Strong Bones and Teeth
                    </p>
                    <p className="mt-3 text-gray-600 text-left">
                        Just like in humans, proper nutrition is critical for maintaining strong bones and teeth in cats. Calcium, phosphorus, and Vitamin D are essential for bone health, while Vitamin A helps keep their teeth healthy and prevents dental diseases. If your cat is getting older or has a diet that lacks certain nutrients, vitamins can support their skeletal health and reduce the risk of joint problems.
                    </p>

                    {/* Move the button to the right */}
                    <div className="flex justify-end mt-9">
                        <button className="flex items-center justify-center rounded-md bg-[#BEB7A4] px-8 py-2 text-center text-white duration-150 hover:translate-y-1 hover:bg-[#A79E8D]">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="mx-auto flex items-center px-5 md:flex md:p-8">
                    <img
                        className="rounded-md shadow-lg w-72 h-72 object-cover" // 18rem by 18rem
                        src="https://i.pinimg.com/736x/e5/48/df/e548dfd03949b0dfeaca176cb033fd66.jpg"
                        alt="Shop image"
                    />
                </div>
            </motion.div>

            {/* Third Section with Scroll Animation */}
            <motion.div
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
            >
                <div className="p-5 md:w-4/6 md:p-8">
                    <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl text-left">
                        Supports Digestive Health
                    </p>
                    <p className="mt-3 text-gray-600 text-left">
                        A healthy digestive system is essential for your cat's overall well-being. Vitamins like B-complex vitamins (such as B12 and folic acid) support digestion and help your cat absorb nutrients efficiently. Adding fiber supplements to their diet can also help regulate their digestive system and prevent issues like constipation.
                    </p>

                    <button className="mt-9 mr-2 flex items-center justify-start rounded-md bg-[#BEB7A4] px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-[#A79E8D]">
                        Read More
                    </button>
                </div>

                <div className="mx-auto flex items-center px-5 md:flex md:p-8">
                    <img
                        className="rounded-md shadow-lg w-72 h-72 object-cover" // 18rem by 18rem
                        src="https://i.pinimg.com/736x/43/5f/58/435f58e4e23bc0b625b3c33fe3412ecb.jpg"
                        alt="Shop image"
                    />
                </div>
            </motion.div>
        </article>
    );
};

export default Blog;
