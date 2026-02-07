"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "ちゃとらAtelier GENS",
        category: "Handmade Crafts",
        categoryColor: "text-gold",
        description: <>革・布小物・オリジナルグッズの企画・製作・販売。<br />手仕事ならではの温もりと「一生もの」の品質を追求し、貴方だけのたからものを創り上げます。</>,
        color: "from-[#F5F5DC] via-[#EADCB8] to-[#D4AF37]",
        tags: ["Leather Craft", "Custom Made", "Artisan"],
        emblem: "/assets/logos/cag_emblem02.png",
        href: "#",
    },
    {
        id: 2,
        title: "Create Web GENS",
        category: "Digital Solutions",
        categoryColor: "text-gold",
        description: <>WEBデザイン、システム開発、SNS運用代行からAI活用コンサルティングまで。<br />最新技術とクリエイティブを融合させ、ビジネスの可能性を最大化します。</>,
        color: "from-neon-cyan to-blue-600",
        tags: ["Web Design", "AI Integration", "Marketing"],
        emblem: "/assets/logos/cwg_emblem.png",
        href: "https://www.instagram.com/fc_lazo_official/",
    },
    {
        id: 3,
        title: "GENS ICHIHARA",
        category: "Sports Management",
        categoryColor: "text-gold",
        description: <>千葉県フットサルリーグに参戦するフットサルクラブの運営。<br />「本気の先へ」を掲げ、スポーツを通じた地域活性化と夢の実現をサポートします。</>,
        color: "from-red-950 via-red-800 to-red-950",
        tags: ["Futsal Club", "Community", "Victory"],
        emblem: "/assets/logos/gens_emblem01.png",
        href: "https://gensichihara.cwgworks.com/",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-deep-navy relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-gold">Businesses</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        アナログからデジタル、スポーツまで。CWGが展開する主要事業をご紹介します。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-[#0a0f1e] rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                        >
                            <div className="h-48 w-full relative overflow-hidden bg-white/5">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:scale-105 transition-transform duration-500 z-0`} />
                                <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
                                    <div className="relative w-32 h-32 transform group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={project.emblem}
                                            alt={project.title}
                                            fill
                                            className={cn(
                                                "object-contain",
                                                project.id === 1 && "mix-blend-lighten"
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className={cn("text-xs font-medium mb-2 uppercase tracking-wider", project.categoryColor)}>
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">{tag}</span>
                                    ))}
                                </div>

                                <Link href={`/works#${project.id === 1 ? 'atelier' : project.id === 2 ? 'digital' : 'sports'}`} className="block w-full">
                                    <Button variant="outline" size="sm" className="w-full group-hover:bg-gold group-hover:text-deep-navy">
                                        詳細・リンクへ <ExternalLink className="ml-2 h-3 w-3" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
