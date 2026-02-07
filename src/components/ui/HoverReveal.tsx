"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    category: string;
    src: string;
    year: string;
}

const projects: Project[] = [
    { id: 1, title: "Neon Horizon Dashboard", category: "Digital Product", src: "/web_design_dashboard_ui.png", year: "2024" },
    { id: 2, title: "Handmade Leather Craft", category: "Atelier GENS", src: "/handmade_leather_wallet.png", year: "2023" },
    { id: 3, title: "Futsal League Match", category: "Sports Management", src: "/futsal_match_action.png", year: "2024" },
    { id: 4, title: "Future Concept Art", category: "AI Creative", src: "/web_design_dashboard_ui.png", year: "2025" },
];

export default function HoverReveal() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the image
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const navX = useSpring(mouseX, springConfig);
    const navY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="py-24 px-6 bg-deep-navy relative z-20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Selected <span className="text-neon-cyan">Projects</span>
                    </h2>
                    <p className="text-gray-400">
                        リストにカーソルを合わせると、プロジェクトの世界観が浮かび上がります。
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="group relative flex items-center justify-between border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <span className="text-gray-500 text-sm font-mono">{project.year}</span>
                                <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-gold transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-neon-cyan transition-colors hidden md:block">
                                    {project.category}
                                </span>
                                <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating Image Container */}
                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, x: 20, y: 20 }} // Offset slightly from cursor
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{
                                position: "fixed",
                                left: navX,
                                top: navY,
                                pointerEvents: "none",
                                zIndex: 50,
                            }}
                            className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-lg overflow-hidden border-2 border-gold/50 shadow-2xl hidden md:block" // Hidden on mobile
                        >
                            {(() => {
                                const img = projects.find(p => p.id === hoveredProject);
                                return img ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent flex items-end p-4">
                                            <span className="text-white font-bold">{img.category}</span>
                                        </div>
                                    </div>
                                ) : null;
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
