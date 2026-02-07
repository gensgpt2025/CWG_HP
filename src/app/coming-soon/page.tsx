"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ComingSoon() {
    return (
        <main className="min-h-screen bg-deep-navy flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container max-w-2xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 border border-white/10 p-12 md:p-20 rounded-3xl backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    >
                        <ShoppingBag className="text-gold w-10 h-10" />
                    </motion.div>

                    <h1 className="text-gold tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4">
                        ちゃとらAtelier GENS
                    </h1>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        COMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold bg-[length:200%_auto] animate-shimmer">SOON</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                        現在、オンラインショップの準備を進めています。<br /><br />
                        ひとつひとつ、<br />
                        ゆっくり整えています。
                    </p>

                    <Link href="/works">
                        <Button variant="outline" size="lg" className="group border-gold/20 text-gold hover:bg-gold hover:text-deep-navy">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            一覧へ戻る
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        </main>
    );
}
