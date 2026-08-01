import { Smartphone, Globe } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Services = () => {
    return (
        <section id="services" className="py-8 sm:py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <span className="text-bronze font-black uppercase tracking-[0.4em] text-xs mb-4 block">خدماتنا</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient tracking-tighter">حلول تقنية متكاملة</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {[
                        {
                            icon: Smartphone,
                            title: "تطوير تطبيقات الجوال",
                            sub: "iOS & Android",
                            desc: "نصمم وننفذ تطبيقات جوال احترافية لأنظمة iOS وAndroid بأحدث التقنيات وأعلى معايير الجودة والأداء."
                        },
                        {
                            icon: Globe,
                            title: "تصميم وتطوير المواقع",
                            sub: "Web Development",
                            desc: "نبني مواقع إلكترونية متطورة وسريعة ومُحسّنة لمحركات البحث تعزز تواجدك الرقمي وتحقق أهدافك."
                        }
                    ].map((service, i) => (
                        <GlassCard
                            key={i}
                            className="p-6 sm:p-8 premium-card relative group h-full text-right"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-beige transition-all duration-500 ml-auto">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <p className="text-bronze font-black text-xs uppercase tracking-[0.3em] mb-2">{service.sub}</p>
                            <h3 className="text-2xl font-black mb-4 text-walnut">{service.title}</h3>
                            <p className="text-brown/70 text-lg leading-relaxed font-medium">{service.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
