"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PrivacyPolicy() {
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
                            <ShieldCheck className="text-gold w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            PRIVACY <span className="text-gold">POLICY</span>
                        </h1>
                    </div>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <p>
                                Craft Works GENS（CWG）（以下「当方」）は、当サイトにおいて取得した個人情報を、以下の目的の範囲内で適切に取り扱います。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-l-2 border-gold pl-4">個人情報の利用目的</h2>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>お問い合わせへの対応</li>
                                <li>必要なご連絡</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-l-2 border-gold pl-4">個人情報の管理</h2>
                            <p>
                                取得した個人情報は、適切に管理し、法令に基づく場合を除き、第三者に開示または提供することはありません。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-l-2 border-gold pl-4">外部サービスについて</h2>
                            <p>
                                当サイトでは、利便性向上のため外部サービスを利用する場合があります。各サービスにおける個人情報の取り扱いについては、それぞれのプライバシーポリシーをご確認ください。
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-l-2 border-gold pl-4">プライバシーポリシーの変更</h2>
                            <p>
                                本ポリシーの内容は、必要に応じて予告なく変更されることがあります。
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
