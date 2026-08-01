import { Link } from 'react-router-dom';
import { GlassCard } from './ui/GlassCard';
import { PROJECTS } from '../data/projects';

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
                    {PROJECTS.map((project) => (
                        <Link key={project.slug} to={`/work/${project.slug}`}>
                            <GlassCard
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative h-[240px] sm:h-[260px] md:h-[300px] shadow-xl"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 brightness-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2017] via-[#2A2017]/60 to-[#2A2017]/20" />
                                <div className="absolute inset-0 p-5 sm:p-8 md:p-10 flex flex-col justify-end text-right">
                                    <div className="flex flex-wrap gap-2 mb-3 justify-end">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-beige/10 text-[10px] uppercase font-black tracking-widest text-beige/70 border border-beige/10">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-beige mb-1">{project.title}</h3>
                                    <p className="text-beige/60 text-xs sm:text-sm mb-2 font-medium">{project.titleEn}</p>
                                    <p className="text-beige/70 text-sm sm:text-base md:text-lg max-w-sm mb-2 font-medium line-clamp-2 sm:line-clamp-none">{project.desc}</p>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-bronze">{project.category}</span>
                                        <span className="text-beige/80 text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity">
                                            عرض التفاصيل ←
                                        </span>
                                    </div>
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
