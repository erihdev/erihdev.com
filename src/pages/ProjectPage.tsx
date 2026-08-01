import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getProject, PROJECTS } from '../data/projects';
import { GlassCard } from '../components/ui/GlassCard';

export const ProjectPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = getProject(slug || '');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <section className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 pt-28">
                <h1 className="text-3xl font-black text-walnut">المشروع غير موجود</h1>
                <Link to="/" className="px-8 py-3 rounded-2xl bg-primary text-beige font-black">
                    العودة للرئيسية
                </Link>
            </section>
        );
    }

    const others = PROJECTS.filter(p => p.slug !== project.slug);

    return (
        <div className="pt-28 sm:pt-32">
            {/* ── Hero ── */}
            <section className="px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl sm:rounded-[40px] overflow-hidden h-[240px] sm:h-[320px] md:h-[400px] shadow-2xl shadow-walnut/20"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2017] via-[#2A2017]/60 to-[#2A2017]/20" />
                        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-right">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-bronze mb-2">{project.category}</span>
                            <h1 className="text-3xl sm:text-5xl font-black text-beige mb-1">{project.title}</h1>
                            <p className="text-beige/60 text-sm sm:text-base font-medium">{project.titleEn}</p>
                        </div>
                    </motion.div>

                    {/* ── الوصف ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-8 sm:mt-12 text-right"
                    >
                        <p className="text-brown text-base sm:text-lg leading-relaxed max-w-3xl mr-0 ml-auto">
                            {project.longDesc}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8 justify-start flex-row-reverse">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 h-12 sm:h-14 px-6 sm:px-8 rounded-2xl bg-primary text-beige font-black text-sm sm:text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all"
                            >
                                <ExternalLink className="w-5 h-5" />
                                زيارة الموقع
                            </a>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-3 h-12 sm:h-14 px-6 sm:px-8 rounded-2xl glass border-walnut/10 text-walnut font-black text-sm sm:text-base hover:bg-primary/5 transition-all"
                            >
                                <ArrowRight className="w-5 h-5" />
                                العودة للرئيسية
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── المميزات ── */}
            <section className="px-4 sm:px-6 py-10 sm:py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="text-right mb-8">
                        <span className="text-bronze font-black uppercase tracking-[0.4em] text-xs mb-3 block">أبرز المميزات</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-walnut tracking-tight">ماذا يقدّم {project.title}؟</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {project.features.map((f, i) => (
                            <GlassCard
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                hoverEffect={false}
                                className="p-5 sm:p-6 text-right"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary mb-3 mr-0 ml-auto" />
                                <h3 className="font-black text-walnut mb-2">{f.title}</h3>
                                <p className="text-brown/70 text-sm leading-relaxed">{f.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── التقنيات ── */}
            <section className="px-4 sm:px-6 pb-10 sm:pb-16">
                <div className="max-w-5xl mx-auto text-right">
                    <span className="text-bronze font-black uppercase tracking-[0.4em] text-xs mb-4 block">التقنيات المستخدمة</span>
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-end">
                        {project.stack.map(t => (
                            <span key={t} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── مشاريع أخرى ── */}
            <section className="px-4 sm:px-6 pb-12 sm:pb-16 bg-walnut/[0.03]">
                <div className="max-w-5xl mx-auto pt-10">
                    <div className="text-right mb-6">
                        <h2 className="text-xl sm:text-2xl font-black text-walnut">مشاريع أخرى</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {others.map(p => (
                            <Link key={p.slug} to={`/work/${p.slug}`}>
                                <GlassCard hoverEffect className="group relative h-[180px] sm:h-[200px] shadow-lg">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 brightness-75"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2017] via-[#2A2017]/60 to-[#2A2017]/20" />
                                    <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-right">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-bronze mb-1">{p.category}</span>
                                        <h3 className="text-xl sm:text-2xl font-black text-beige">{p.title}</h3>
                                        <p className="text-beige/60 text-xs font-medium">{p.titleEn}</p>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
