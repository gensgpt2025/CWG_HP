"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-deep-navy relative overflow-hidden">
            {/* 装飾的な背景要素 */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold tracking-[0.2em] text-sm font-semibold uppercase mb-4">
                            About Us
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            境界を越え、<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                                感動を創り出す。
                            </span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Craft Works GENS（CWG）は、アナログな手仕事の温もり、最先端のデジタルクリエイティブ、そして魂を揺さぶるスポーツマネジメントを融合させたクリエイティブ集団です。
                        </p>
                        <div className="space-y-6">
                            {[
                                { num: "01", title: "Authenticity", desc: "一点ものに込める想いと妥協のない品質。", color: "text-gold", border: "hover:border-gold/30" },
                                { num: "02", title: "Innovation", desc: "デジタルとAIを駆使し、表現の限界を拡張する。", color: "text-neon-cyan", border: "hover:border-neon-cyan/30" },
                                { num: "03", title: "Passion", desc: "スポーツを通じて、挑戦の価値を世界へ示す。", color: "text-neon-purple", border: "hover:border-neon-purple/30" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.num}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className={cn(
                                        "flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 group",
                                        item.border
                                    )}
                                >
                                    <div className={cn("text-2xl font-black italic tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity", item.color)}>
                                        {item.num}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group bg-white/5">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-neon-cyan/20 opacity-30 group-hover:opacity-60 transition-opacity duration-700 z-10" />
                            <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/assets/logos/cwg-about_2.png"
                                        alt="CWG About Visual"
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-0 w-full text-center z-30">
                                <div className="text-xl font-bold text-white tracking-widest drop-shadow-lg">CRAFT YOUR FUTURE</div>
                            </div>
                            {/* 装飾的な角のデザイン */}
                            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40 z-30" />
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-neon-cyan/40 z-30" />
                        </div>

                        {/* 浮遊するスタッツ */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-[#0a0f1e] border border-white/10 p-6 rounded-xl shadow-2xl"
                        >
                            <div className="text-3xl font-bold text-gold">3+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-tighter">Core Business Domains</div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block relative">
                        <p className="text-[18px] md:text-[22px] font-bold text-white/85 tracking-widest relative z-10">
                            つくる場所は、ひとつじゃない。<br className="md:hidden" />
                            だから、私たちは境界を越える。
                        </p>
                        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
