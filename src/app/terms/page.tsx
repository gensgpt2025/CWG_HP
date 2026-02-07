"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function TermsOfService() {
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
                            <FileText className="text-gold w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            TERMS <span className="text-gold">OF SERVICE</span>
                        </h1>
                    </div>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <p>
                                当サイト（CWG）をご利用いただくにあたり、以下の内容をご理解・ご了承のうえご利用ください。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-l-2 border-gold pl-4">免責事項</h2>
                            <p>
                                当サイトに掲載する情報については、正確性や安全性の確保に努めていますが、その内容を保証するものではありません。当サイトの利用により生じた損害について、当方は一切の責任を負いません。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-l-2 border-gold pl-4">著作権について</h2>
                            <p>
                                当サイトに掲載されている文章・画像・デザイン等の著作物は、当方または正当な権利者に帰属します。無断での使用・転載を禁止します。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-l-2 border-gold pl-4">サイト内容の変更</h2>
                            <p>
                                当サイトの内容は、予告なく変更または削除される場合があります。
                            </p>
                        </section>
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
