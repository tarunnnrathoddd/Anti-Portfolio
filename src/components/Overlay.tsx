'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {

    // Section 1
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);

    // Section 3
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center">
            {/* Section 1: Center */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center text-center"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                        Tarun Rathod
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                        Creative Developer & <br className="md:hidden" /> Frontend Engineer
                    </p>
                </div>
            </motion.div>

            {/* Section 2: Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-12 md:px-24"
            >
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                        Crafting scalable <br />
                        <span className="text-blue-500">digital solutions.</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-400 max-w-md">
                        Specializing in React, Next.js, and modern UI/UX principles.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-12 md:px-24"
            >
                <div className="max-w-xl text-right">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                        Bridging native performance <br />
                        and <span className="text-purple-500">web technologies.</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-400 ml-auto max-w-md">
                        From Hackathons to Production.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
