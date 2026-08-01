import { GlassCard } from './ui/GlassCard';

export const Projects = () => {
    return (
        <section id="projects" className="py-8 sm:py-12 px-4 sm:px-6 bg-walnut/[0.03]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
                    <div className="text-right">
                        <span className="text-bronze font-black uppercase tracking-[0.4em] text-xs mb-4 block">أعمالنا</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient leading-[0.9] tracking-tighter">
                            مشاريع<br />نفخر بها
                        </h2>
                    </div>
                    <p className="max-w-md text-brown/70 text-sm sm:text-base leading-relaxed text-right font-medium">
                        مجموعة مختارة من المشاريع التقنية التي صممناها وطورناها للسوق السعودي بأعلى معايير الجودة والاحترافية.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "زيارة",
                            titleEn: "Zyiarah.com",
                            category: "تطبيق خدمات",
                            desc: "منصة فخمة لخدمات التنظيف مع نظام حجز متطور وتجربة مستخدم راقية في المملكة.",
                            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000",
                            tags: ['React', 'Capacitor', 'Cloud']
                        },
                        {
                            title: "الحي",
                            titleEn: "Al7ay.com",
                            category: "منصة اجتماعية",
                            desc: "منصة تواصل مجتمعي تربط الجيران وتسهل التفاعل المحلي والخدمات الحية.",
                            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000",
                            tags: ['Vite', 'Animations', 'UX']
                        },
                        {
                            title: "فايف هب",
                            titleEn: "FiveHub.com",
                            category: "منصة القهوة",
                            desc: "نظام متكامل لسلسلة إمدادات القهوة يربط المزارع والموردين والمحامص والمقاهي.",
                            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000",
                            tags: ['React', 'Supply Chain', 'B2B']
                        }
                    ].map((project, i) => (
                        <GlassCard
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative h-[180px] sm:h-[220px] md:h-[260px] shadow-xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 brightness-75"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2017] via-[#2A2017]/60 to-[#2A2017]/20" />
                            <div className="absolute inset-0 p-12 flex flex-col justify-end text-right">
                                <div className="flex gap-2 mb-4 justify-end">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-beige/10 text-[10px] uppercase font-black tracking-widest text-beige/70 border border-beige/10">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-4xl font-black text-beige mb-2">{project.title}</h3>
                                <p className="text-beige/60 text-sm mb-4 font-medium">{project.titleEn}</p>
                                <p className="text-beige/70 text-lg max-w-sm mb-8 font-medium">{project.desc}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-bronze">{project.category}</span>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
