import { motion } from 'framer-motion';
import { ChevronRight, Instagram, Linkedin, Mail, Award } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 pt-20 lg:pt-0 overflow-hidden perspective-1000">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-walnut/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                مؤسسة تقنية سعودية
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-bronze/30 text-bronze text-[10px] font-black uppercase tracking-[0.3em]">
                                <Award className="w-3.5 h-3.5" /> خدمات احترافية
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gradient mb-3 tracking-tighter">
                            نصنع التطبيقات والمواقع
                        </h1>

                        <p className="text-brown/80 text-sm sm:text-base leading-relaxed mb-6 font-medium max-w-2xl mx-auto">
                            مؤسسة تقنية متخصصة في تطوير التطبيقات والمواقع الإلكترونية للشركات والأفراد بأعلى معايير الجودة والاحترافية.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <motion.a
                                whileHover={{ y: -4, scale: 1.02 }}
                                href="#contact"
                                className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 rounded-[20px] sm:rounded-[24px] bg-primary text-beige font-black text-base sm:text-lg shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all flex items-center gap-3 group"
                            >
                                ابدأ مشروعك
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                            </motion.a>
                            <div className="flex items-center gap-4">
                                {[
                                    { Icon: Instagram, href: 'https://instagram.com/divathar', label: 'Instagram' },
                                    { Icon: Linkedin, href: 'https://linkedin.com/company/divathar', label: 'LinkedIn' },
                                    { Icon: Mail, href: 'mailto:erihdev@gmail.com', label: 'Email' }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center hover:bg-primary/5 transition-all text-brown/60 hover:text-primary border-walnut/10"
                                        aria-label={social.label}
                                    >
                                        <social.Icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
