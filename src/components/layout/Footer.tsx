import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050812] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            <span className="text-white">CWG</span>
                            <span className="text-gold">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            アナログ・デジタル・スポーツ。
                            多角的なアプローチで、新しい価値と感動を創り出すクリエイティブ集団です。
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#about" className="text-gray-400 hover:text-gold transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/#portfolio" className="text-gray-400 hover:text-gold transition-colors text-sm">Our Businesses</Link></li>
                            <li><Link href="/works" className="text-gray-400 hover:text-gold transition-colors text-sm">Works & Gallery</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-gold transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Businesses</h4>
                        <ul className="space-y-4">
                            <li><Link href="/works#atelier" className="text-gray-400 hover:text-gold transition-colors text-sm">ちゃとらAtelier GENS</Link></li>
                            <li><Link href="/works#digital" className="text-gray-400 hover:text-gold transition-colors text-sm">Create Web GENS</Link></li>
                            <li><Link href="/works#sports" className="text-gray-400 hover:text-gold transition-colors text-sm">GENS ICHIHARA</Link></li>
                        </ul>
                    </div>

                    {/* Brand Keywords */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Philosopy</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400 text-sm italic">"Craft Your Future"</li>
                            <li className="text-gray-500 text-[10px] leading-relaxed">
                                アナログな手仕事、デジタルの創造性。<br />
                                境界なき表現を、まだ見ぬ未来へ。
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs text-center md:text-left">
                    <p>© 2025 Craft Works GENS. All rights reserved.</p>
                    <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em] font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/company" className="hover:text-white transition-colors">Company</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

