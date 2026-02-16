import { motion } from 'framer-motion';
import { ChevronRight, Instagram, Linkedin, Mail, Building2, Sparkles, Award } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 lg:pt-0 overflow-hidden perspective-1000">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                مؤسسة تقنية سعودية
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-[0.3em]">
                                <Award className="w-3.5 h-3.5" /> خدمات احترافية
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-[100px] font-black leading-[0.90] text-gradient mb-10 tracking-tighter">
                            نصنع التطبيقات <br />
                            <span className="text-primary-gradient italic">والمواقع</span>
                        </h1>

                        <p className="max-w-xl text-white/40 text-xl leading-relaxed mb-12 font-medium">
                            مؤسسة تقنية متخصصة في تطوير التطبيقات والمواقع الإلكترونية للشركات والأفراد بأعلى معايير الجودة والاحترافية.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <motion.a
                                whileHover={{ y: -4, scale: 1.02 }}
                                href="#contact"
                                className="h-16 px-10 rounded-[24px] bg-primary text-white font-black text-lg shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all flex items-center gap-3 group"
                            >
                                ابدأ مشروعك
                                <ChevronRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
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
                                        className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-white/5 transition-all text-white/30 hover:text-white border-white/10"
                                        aria-label={social.label}
                                    >
                                        <social.Icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Company Card (Perspective) */}
                    <motion.div
                        initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="relative hidden lg:block preserve-3d"
                    >
                        <GlassCard
                            variant="strong"
                            hoverEffect={false}
                            className="aspect-[16/10] w-[500px] p-10 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                        >
                            {/* Visual accents */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="w-20 h-20 rounded-3xl overflow-hidden border-4 border-white/10 glass bg-primary/10 flex items-center justify-center">
                                        <Sparkles className="w-10 h-10 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <Building2 className="w-8 h-8 text-accent-gold mb-2 mr-auto fill-accent-gold" />
                                        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20">مؤسسة تقنية</p>
                                        <p className="text-xs font-black text-white leading-none">معتمدة</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-4xl font-black mb-1 text-white">إرث لتقنية المعلومات</h2>
                                    <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-6">ERIH DEV</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="px-4 py-2 rounded-xl glass border-white/5 text-center">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">تطبيقات</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">Mobile</span>
                                        </div>
                                        <div className="px-4 py-2 rounded-xl glass border-white/5 text-center">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">مواقع</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">Websites</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Decorative floating icon */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 w-24 h-24 rounded-3xl glass flex items-center justify-center border-white/10 shadow-2xl z-20"
                        >
                            <Building2 className="w-10 h-10 text-primary" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
