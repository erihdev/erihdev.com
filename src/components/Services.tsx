import { Smartphone, Globe, Lightbulb } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Services = () => {
    return (
        <section id="services" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">خدماتنا</span>
                    <h2 className="text-5xl md:text-7xl font-black text-gradient tracking-tighter">حلول تقنية متكاملة</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: Smartphone,
                            title: "تطوير تطبيقات الجوال",
                            desc: "نصمم وننفذ تطبيقات جوال احترافية لأنظمة iOS و Android بأحدث التقنيات وأعلى معايير الجودة والأداء."
                        },
                        {
                            icon: Globe,
                            title: "تصميم وتطوير المواقع",
                            desc: "نبني مواقع إلكترونية متطورة وسريعة ومُحسّنة لمحركات البحث تعزز تواجدك الرقمي وتحقق أهدافك."
                        },
                        {
                            icon: Lightbulb,
                            title: "حلول تقنية مخصصة",
                            desc: "نقدم استشارات وحلول تقنية مبتكرة تلبي احتياجاتك الفريدة وتساعدك على النمو والتطور الرقمي."
                        }
                    ].map((service, i) => (
                        <GlassCard
                            key={i}
                            className="p-12 premium-card relative group h-full text-right"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 ml-auto">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black mb-6 text-white">{service.title}</h3>
                            <p className="text-white/30 text-lg leading-relaxed font-medium">{service.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
