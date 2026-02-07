"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Instagram, ShoppingBag, Youtube, Twitter, Globe } from "lucide-react";
import Gallery from "@/components/ui/Gallery";
import Image from "next/image";
import { cn } from "@/lib/utils";
const works = [
    {
        id: "atelier",
        title: "ちゃとらAtelier GENS",
        subtitle: "Handmade Crafts",
        titleColor: "text-[#3D1F07]",
        description: "貴方だけの「たからもの」を創りお届けします。",
        achievements: [
            "革製品",
            "布製品",
            "オリジナルグッズ"
        ],
        color: "from-[#F5F5DC] via-[#EADCB8] to-[#D4AF37]",
        emblem: "/assets/logos/cag_emblem02.png",
        links: [
            { name: "Instagram", url: "https://www.instagram.com/chatora_atelier_gens/", icon: Instagram },
            { name: "Online Shop", url: "/coming-soon", icon: ShoppingBag },
        ]
    },
    {
        id: "digital",
        title: "Create Web GENS",
        subtitle: "Digital Creative & Operation",
        titleColor: "text-white",
        description: "お気軽にお問い合わせください。",
        achievements: [
            "デジタルコンテンツ作成",
            "WEBデザイン",
            "SNS運用代行"
        ],
        color: "from-neon-cyan to-blue-600",
        emblem: "/assets/logos/cwg_emblem.png",
        links: [
            { name: "FC Lazo Instagram", url: "https://www.instagram.com/fc_lazo_official/", icon: Instagram },
        ]
    },
    {
        id: "sports",
        title: "GENS ICHIHARA",
        subtitle: "Sports Management",
        titleColor: "text-white",
        description: "千葉県フットサルリーグ参戦中",
        achievements: [
            "Swith Zero,Fight Hard.",
            "献身・誠実・尊重・感謝",
            "本気の先へ"
        ],
        color: "from-red-950 via-red-800 to-red-950",
        emblem: "/assets/logos/gens_emblem01.png",
        links: [
            { name: "Official Website", url: "https://gensichihara.cwgworks.com/", icon: Globe },
            { name: "Instagram", url: "https://www.instagram.com/gens_ichihara_futsal/", icon: Instagram },
            { name: "YouTube", url: "https://www.youtube.com/@GENSICHIHARA", icon: Youtube },
            { name: "X (Twitter)", url: "https://x.com/GENS_ICHIHARA", icon: Twitter },
        ]
    },
];

export default function Works() {
    return (
        <main className="min-h-screen bg-deep-navy selection:bg-gold selection:text-deep-navy">
            <Header />

            <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                {/* Background Decorative */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            All <span className="text-gold">Works</span> & Links
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Craft Works GENSが展開する全事業と、関連リンクをご覧いただけます。
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {works.map((work, index) => (
                            <motion.div
                                key={work.id}
                                id={work.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors duration-500">

                                    {/* Visual Side */}
                                    <div className="lg:col-span-5 order-first lg:order-none relative h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-80 mix-blend-multiply`} />
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            {work.emblem ? (
                                                <div className="relative w-full h-full rounded-2xl overflow-hidden drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                                    <Image
                                                        src={work.emblem}
                                                        alt={`${work.title} Emblem`}
                                                        fill
                                                        className={cn(
                                                            "object-contain",
                                                            work.id === "atelier" && "mix-blend-lighten"
                                                        )}
                                                    />
                                                </div>
                                            ) : (
                                                <h3 className="text-4xl font-bold text-white/20 uppercase tracking-widest break-words text-center">
                                                    {work.subtitle}
                                                </h3>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:col-span-7 space-y-8">
                                        <div>
                                            <span className={cn(
                                                "inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r mb-4",
                                                work.color,
                                                work.titleColor
                                            )}>
                                                {work.subtitle}
                                            </span>
                                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                                {work.title}
                                            </h2>
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {work.description}
                                            </p>

                                            {work.achievements && (
                                                <ul className="mt-4 space-y-2 text-gray-400">
                                                    {work.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            {work.links.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.url}
                                                    target={link.url !== "#" ? "_blank" : undefined}
                                                    rel={link.url !== "#" ? "noopener noreferrer" : undefined}
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="gap-2 border-white/20 hover:border-gold hover:bg-gold/10 hover:text-gold"
                                                    >
                                                        <link.icon className="w-4 h-4" />
                                                        {link.name}
                                                    </Button>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20">
                        <Gallery />
                    </div>



                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-20"
                    >
                        <p className="text-gray-500">
                            Other links coming soon...
                        </p>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
