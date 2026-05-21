import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contact" className="relative pt-10 sm:pt-14 pb-8 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gradient tracking-[-0.05em] leading-[0.85] mb-5 sm:mb-8">
                        لنبدأ معاً <br /> <span className="text-primary shadow-primary/20">مشروعك القادم</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <motion.a
                            href="https://wa.me/966599363888"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="h-14 sm:h-16 md:h-20 px-8 sm:px-10 md:px-12 rounded-[22px] sm:rounded-[28px] bg-primary text-white font-black text-base sm:text-lg md:text-xl flex items-center gap-3 sm:gap-4 hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.6)] transition-all"
                        >
                            <ExternalLink className="w-6 h-6" />
                            تواصل عبر واتساب
                        </motion.a>
                        <motion.a
                            href="mailto:erihdev@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            className="h-14 sm:h-16 md:h-20 px-8 sm:px-10 md:px-12 rounded-[22px] sm:rounded-[28px] glass text-white font-black text-base sm:text-lg md:text-xl flex items-center gap-4 hover:bg-white/5 transition-all border-white/10"
                        >
                            راسلنا مباشرة
                        </motion.a>
                    </div>
                </motion.div>

                <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="Erih Dev Logo" className="w-12 h-12 rounded-2xl object-cover" />
                        <div className="text-right">
                            <span className="font-black uppercase tracking-tighter text-lg leading-none block">إرث لتقنية المعلومات</span>
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">ERIH DEV</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: 'Instagram', href: 'https://instagram.com/divathar', Icon: Instagram },
                            { label: 'LinkedIn', href: 'https://linkedin.com/company/divathar', Icon: Linkedin },
                            { label: 'Gmail', href: 'mailto:erihdev@gmail.com', Icon: Mail },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 rounded-2xl glass text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white hover:border-primary/50 transition-all border-white/10 flex items-center gap-2"
                            >
                                <link.Icon className="w-4 h-4" />
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-white/10 text-[10px] uppercase font-black tracking-[0.5em]">
                            © {new Date().getFullYear()} جميع الحقوق محفوظة
                        </p>
                        <p className="text-white/20 text-[10px] font-black tracking-wider">
                            Made with <span className="text-primary">❤️</span> by Erih Dev
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
        </footer>
    );
};
