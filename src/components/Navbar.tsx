'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const links = [
        { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Mail size={20} />, href: "mailto:tarunrathod00805@gmail.com", label: "Email" },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center md:justify-end md:pr-6 pt-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="pointer-events-auto min-w-max"
            >
                <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

                    {/* Name Brand */}
                    <a href="#" className="hidden md:block px-4 py-1.5 mr-2 text-sm font-medium text-white/90 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                        TR
                    </a>

                    <div className="h-4 w-[1px] bg-white/10 hidden md:block mx-1" />

                    {/* Links */}
                    <div className="flex items-center gap-1">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div className="h-4 w-[1px] bg-white/10 md:hidden block mx-1" />

                    {/* Mobile Resume Button (Optional) */}
                    <a href="#" className="md:hidden px-3 py-1.5 ml-1 text-xs font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
                        CV
                    </a>
                </div>
            </motion.nav>
        </div>
    );
}
