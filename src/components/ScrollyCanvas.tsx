'use client';

import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import Overlay from './Overlay';

const FRAME_COUNT = 114;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameId = i.toString().padStart(3, '0');
            img.src = `/sequence/${frameId}.webp`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, []);

    // Draw frame on canvas
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0 || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        const img = images[index];

        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.width;
        const ih = img.height;

        const scale = Math.max(cw / iw, ch / ih);
        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    }, [images]);

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (isLoaded) {
            const frameIndex = Math.floor(latest);
            requestAnimationFrame(() => renderFrame(frameIndex));
        }
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
                canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
                // Force re-render of current frame
                if (isLoaded) {
                    const current = currentIndex.get();
                    renderFrame(Math.floor(current));
                }
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // init

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, currentIndex, renderFrame]);


    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block h-full w-full object-cover"
                />
                <Overlay scrollYProgress={scrollYProgress} />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50">
                        Loading Assets...
                    </div>
                )}
            </div>
        </div>
    );
}
