import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
                    <div className="text-right">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">أعمالنا</span>
                        <h2 className="text-5xl md:text-8xl font-black text-gradient leading-[0.8] tracking-tighter text-white">
                            مشاريع<br />نفخر بها
                        </h2>
                    </div>
                    <p className="max-w-md text-white/30 text-xl leading-relaxed text-right font-medium">
                        مجموعة مختارة من المشاريع التقنية التي صممناها وطورناها للسوق السعودي بأعلى معاي human.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "زيارة",
                            titleEn: "Zyiarah.com",
                            category: "تطبيق خدمات",
                            desc: "منصة فخمة لخدمات التنظيف مع نظام حجز متطور وتجربة مستخدم راقية في المملكة.",
                            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000",
                            link: "https://zyiarah.com",
                            tags: ['React', 'Capacitor', 'Cloud']
                        },
                        {
                            title: "الحي",
                            titleEn: "Al7ay.com",
                            category: "منصة اجتماعية",
                            desc: "منصة تواصل مجتمعي تربط الجيران وتسهل التفاعل المحلي والخدمات الحية.",
                            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000",
                            link: "https://al7ay.com",
                            tags: ['Vite', 'Animations', 'UX']
                        },
                        {
                            title: "فايف هب",
                            titleEn: "FiveHub.com",
                            category: "منصة القهوة",
                            desc: "نظام متكامل لسلسلة إمدادات القهوة يربط المزارع والموردين والمحامص والمقاهي.",
                            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000",
                            link: "#",
                            tags: ['React', 'Supply Chain', 'B2B']
                        }
                    ].map((project, i) => (
                        <GlassCard
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative h-[500px] shadow-2xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 brightness-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-end text-right">
                                <div className="flex gap-2 mb-4 justify-end">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase font-black tracking-widest text-white/40 border border-white/5">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-4xl font-black text-white mb-2">{project.title}</h3>
                                <p className="text-white/40 text-sm mb-4 font-medium">{project.titleEn}</p>
                                <p className="text-white/50 text-lg max-w-sm mb-8 font-medium">{project.desc}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-20 h-20 rounded-3xl bg-primary text-white flex items-center justify-center hover:scale-110 transition-all shadow-xl shadow-primary/20 mr-auto"
                                >
                                    <ArrowUpRight className="w-8 h-8" />
                                </a>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
