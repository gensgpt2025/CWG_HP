"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // ページ読み込み完了後に少し余裕を持って終了させる
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2秒間表示

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050812]"
                >
                    <div className="relative flex flex-col items-center">
                        {/* ブランドロゴプレースホルダー */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1, 0.95, 1],
                                opacity: 1
                            }}
                            transition={{
                                duration: 2,
                                times: [0, 0.5, 0.8, 1],
                                ease: "easeOut"
                            }}
                            className="text-4xl md:text-6xl font-black tracking-tighter mb-8"
                        >
                            <span className="text-white">CWG</span>
                            <span className="text-gold">.</span>
                        </motion.div>

                        {/* ゴールドのプログレスバー */}
                        <div className="w-48 h-[1px] bg-white/10 overflow-hidden relative">
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "100%" }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                            />
                        </div>

                        {/* キャッチコピー（微かに点滅） */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="mt-6 text-gold/60 text-[10px] uppercase tracking-[0.5em] font-medium"
                        >
                            Crafting Your Future
                        </motion.p>
                    </div>

                    {/* 装飾用背景パターン（薄く表示） */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
