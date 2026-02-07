"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CompanyInfo() {
    return (
        <main className="min-h-screen bg-[#050812] text-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href="/">
                        <Button variant="ghost" className="text-gray-400 hover:text-gold mb-12 group p-0">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            HOME
                        </Button>
                    </Link>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-gold/10 border border-gold/20 rounded-xl">
                            <Building2 className="text-gold w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
                            COMPANY <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">INFO</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-12 mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] opacity-80">屋号</h2>
                            <p className="text-2xl md:text-3xl font-bold text-white">Craft Works GENS（CWG）</p>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] opacity-80">概要</h2>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                アナログな手仕事、デジタルクリエイティブ、スポーツマネジメントを横断し、制作・企画・運営を行っています。
                            </p>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] opacity-80">拠点</h2>
                            <div className="flex items-center gap-4">
                                <span className="text-xl md:text-2xl font-bold text-white">日本 (Japan)</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-widest border border-white/5">Global Operations</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] opacity-80">お問い合わせ</h2>
                            <p className="text-lg text-gray-400">
                                <Link href="/#contact" className="text-gold hover:underline transition-all">Contactページ</Link>よりご連絡ください。
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/5 text-center">
                        <p className="text-gray-500 text-sm">
                            © 2025 Craft Works GENS. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
