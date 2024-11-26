import React from "react";

const Footer = () => {
    return (
        <footer className="relative mt-20 bg-[#BEB7A4] px-4 pt-20">
            <nav
                aria-label="Footer Navigation"
                className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
            >
                <a href="#" className="font-medium text-white">
                    Demo
                </a>
                <a href="#" className="font-medium text-white">
                    Support
                </a>
                <a href="#" className="font-medium text-white">
                    Privacy Policy
                </a>
                <a href="#" className="font-medium text-white">
                    Terms & Conditions
                </a>
            </nav>
            <p className="py-10 text-center text-white">
                © 2024 Joene Tuban | All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
