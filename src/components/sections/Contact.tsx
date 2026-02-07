"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, Loader2, Instagram, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("送信に失敗しました");
            }

            setFormState("success");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });

            // 10秒後にアイドルに戻す
            setTimeout(() => setFormState("idle"), 10000);
        } catch (error) {
            console.error("Submit error:", error);
            setFormState("idle");
            alert("メッセージの送信に失敗しました。時間をおいて再度お試しいただくか、SNS等よりご連絡ください。");
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#050812] relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-neon-cyan">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        新しいプロジェクトを始めませんか？<br />貴方の目標達成をサポートいたします
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <AnimatePresence mode="wait">
                            {formState === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-gold/10 border border-gold/30 p-12 rounded-2xl text-center backdrop-blur-sm h-full flex flex-col items-center justify-center min-h-[400px]"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-gold mb-6" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-300">
                                        お問い合わせありがとうございます。<br />
                                        内容を確認の上、担当者よりご連絡いたします。
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-8 border-gold/20 text-gold hover:bg-gold hover:text-deep-navy"
                                        onClick={() => setFormState("idle")}
                                    >
                                        別のメッセージを送る
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm"
                                >
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="first-name" className="text-sm font-medium text-gray-300">姓</label>
                                                <input
                                                    id="first-name"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                    className="w-full bg-deep-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                                                    placeholder="山田"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="last-name" className="text-sm font-medium text-gray-300">名</label>
                                                <input
                                                    id="last-name"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                    className="w-full bg-deep-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                                                    placeholder="太郎"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-300">メールアドレス</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-deep-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                                                placeholder="yamada@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-gray-300">お問い合わせ内容</label>
                                            <textarea
                                                id="message"
                                                rows={6}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-deep-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                                                placeholder="プロジェクトの詳細をお聞かせください..."
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full relative overflow-hidden group"
                                            disabled={formState === "submitting"}
                                        >
                                            <span className={formState === "submitting" ? "opacity-0" : "flex items-center"}>
                                                送信する <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </span>
                                            {formState === "submitting" && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Loader2 className="h-5 w-5 animate-spin" />
                                                </div>
                                            )}
                                        </Button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

