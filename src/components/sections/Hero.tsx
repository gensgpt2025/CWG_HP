"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deep-navy/50 radial-gradient-mask" />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-gold tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                            Craft Works Gens
                        </h2>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold bg-[length:200%_auto] animate-shimmer">Craft</span><br />
                            <span className="relative inline-block mt-2">
                                Your Future
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                            </span>
                        </h1>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl md:text-2xl lg:text-[34px] font-bold text-white/85 tracking-tight"
                        >
                            つくる場所は、ひとつじゃない。
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        手仕事の温もりから、最先端のAIデジタル、そしてスポーツの熱狂まで。<br />
                        CWGは、多角的なクリエイティブであなたの世界を広げます。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10"
                    >
                        <Link href="#portfolio">
                            <Button size="lg" className="w-64 group">
                                事業内容を見る
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button variant="outline" size="lg" className="w-64">
                                お問い合わせ
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </section>
    );
}
