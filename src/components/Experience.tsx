import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Code2 } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Experience = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">لماذا إرث لتقنية المعلومات؟</span>
                    <h2 className="text-5xl md:text-7xl font-black text-gradient tracking-tighter">خبرة تقنية موثوقة</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Code2,
                            value: '3+',
                            label: 'سنوات خبرة',
                            desc: 'في تطوير البرمجيات'
                        },
                        {
                            icon: Award,
                            value: '10+',
                            label: 'مشروع ناجح',
                            desc: 'تم تسليمه بنجاح'
                        },
                        {
                            icon: Users,
                            value: '15+',
                            label: 'عميل راضٍ',
                            desc: 'يثقون بخدماتنا'
                        },
                        {
                            icon: TrendingUp,
                            value: '100%',
                            label: 'التزام',
                            desc: 'بالجودة والمواعيد'
                        }
                    ].map((stat, i) => (
                        <GlassCard
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 text-center group hover:bg-primary/5 transition-all duration-500"
                        >
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all"
                            >
                                <stat.icon className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-5xl font-black text-white mb-2">{stat.value}</h3>
                            <p className="text-primary font-black text-sm mb-1">{stat.label}</p>
                            <p className="text-white/40 text-xs font-medium">{stat.desc}</p>
                        </GlassCard>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: 'تصميم احترافي',
                            desc: 'تصاميم عصرية تواكب أحدث الاتجاهات العالمية وتناسب السوق المحلي'
                        },
                        {
                            title: 'تقنيات حديثة',
                            desc: 'نستخدم أحدث التقنيات والأدوات لضمان الأداء الأمثل والأمان'
                        },
                        {
                            title: 'دعم مستمر',
                            desc: 'نوفر دعماً فنياً متواصلاً وتحديثات دورية لضمان استمرارية العمل'
                        }
                    ].map((feature, i) => (
                        <div key={i} className="text-right">
                            <h4 className="text-2xl font-black text-white mb-4">{feature.title}</h4>
                            <p className="text-white/40 font-medium leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
