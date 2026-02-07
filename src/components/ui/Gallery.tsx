"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
    id: number;
    src: string;
    category: string;
    title: string;
    description: string;
    objectFit?: "cover" | "contain";
    objectPosition?: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        src: "/handmade_leather_wallet_2.png",
        category: "Atelier",
        title: "Handmade Leather Wallet",
        description: "職人による手作業の極み。シンプルながらも細部までこだわり抜いた、長く愛用できるレザーウォレットです。"
    },
    {
        id: 2,
        src: "/handmade_leather_tray.png",
        category: "Atelier",
        title: "Handmade Leather Tray",
        description: "デスク周りや玄関を上品に演出。経年変化を楽しめる上質なレザーを使用した小物入れです。"
    },
    {
        id: 3,
        src: "/handmade_cat_bag.png",
        category: "Atelier",
        title: "Hidden Cat Bag",
        description: "猫が中に隠れている、遊び心あふれるオリジナルバッグ。ちゃとらAtelier GENSらしい、温かみと驚きのある一品です。"
    },
    {
        id: 4,
        src: "/handmade_cat_Tshirt.png",
        category: "Atelier",
        title: "Atelier Graphic T-shirt",
        description: "オリジナルのグラフィックが映える、着心地にこだわったアトリエ限定のTシャツです。"
    },
    {
        id: 5,
        src: "/switch_zero_fight_hard.PNG",
        category: "Digital",
        title: "Switch Zero Fight Hard Web Design",
        description: "エネルギッシュで力強いタイポグラフィとカラーリングが特徴のWebデザイン。Create Web GENSの独創的なデジタル表現を形にしました。"
    },
    {
        id: 6,
        src: "/handmade_teamgoods.png",
        category: "Atelier",
        title: "Original Team Goods",
        description: "想いをカタチにする、チームのためのオリジナルプロダクト。手仕事の温もりと誇りを込めた、一体感を育む特別なアイテムです。"
    },
];

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedItem = galleryItems.find((item) => item.id === selectedId);

    return (
        <section className="py-24 px-6 bg-[#050812]">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        GENS <span className="text-gold">Gallery</span>
                    </h2>
                    <p className="text-gray-400">
                        アナログ・デジタル・スポーツ、境界を越えた私たちの足跡。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <motion.div
                            layoutId={`card-container-${item.id}`}
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{ once: true }}
                            className="cursor-pointer relative group rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className={cn(
                                    "transition-transform duration-700 group-hover:scale-110",
                                    item.objectFit === "contain" ? "object-contain" : "object-cover"
                                )}
                                style={{ objectPosition: item.objectPosition || "center" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                                <motion.div
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <span className="inline-block text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2 px-2 py-1 bg-gold/10 border border-gold/20 rounded">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white font-bold text-2xl drop-shadow-2xl">
                                        {item.title}
                                    </h3>
                                    <div className="w-8 h-0.5 bg-gold mt-2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && selectedItem && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-6">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            />

                            {/* Modal Card */}
                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="relative bg-[#0a0f1e] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 z-10"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-6 right-6 z-20 p-3 bg-black/60 rounded-full text-white hover:bg-gold hover:text-deep-navy transition-all border border-white/10"
                                >
                                    <X size={20} />
                                </button>

                                <div className="grid grid-cols-1 lg:grid-cols-12">
                                    <div className="lg:col-span-7 relative aspect-video lg:aspect-square">
                                        <Image
                                            src={selectedItem.src}
                                            alt={selectedItem.title}
                                            fill
                                            className={selectedItem.objectFit === "contain" ? "object-contain" : "object-cover"}
                                            style={{ objectPosition: selectedItem.objectPosition || "center" }}
                                        />
                                    </div>

                                    <div className="lg:col-span-5 p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#0a0f1e] to-[#020617]">
                                        <div className="space-y-6">
                                            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest border border-gold/20">
                                                {selectedItem.category}
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedItem.title}</h2>
                                            <div className="w-12 h-1 bg-gold rounded-full" />
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {selectedItem.description}
                                            </p>

                                            <div className="pt-8 flex gap-4">
                                                <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5">
                                                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter mb-1">Project</div>
                                                    <div className="text-sm text-white font-medium">Concept Case</div>
                                                </div>
                                                <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5">
                                                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter mb-1">Year</div>
                                                    <div className="text-sm text-white font-medium">2025</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

