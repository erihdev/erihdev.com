import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Code2 } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Experience = () => {
    return (
        <section className="py-8 sm:py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                {/* ── الأرقام ── */}
                <div className="text-center mb-8">
                    <span className="text-bronze font-black uppercase tracking-[0.4em] text-xs mb-4 block">لماذا إرث لتقنية المعلومات؟</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient tracking-tighter">خبرة تقنية موثوقة</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    {[
                        { icon: Code2,      value: '3+',   label: 'سنوات خبرة',   desc: 'في تطوير البرمجيات' },
                        { icon: Award,      value: '10+',  label: 'مشروع ناجح',  desc: 'تم تسليمه بنجاح' },
                        { icon: Users,      value: '15+',  label: 'عميل راضٍ',   desc: 'يثقون بخدماتنا' },
                        { icon: TrendingUp, value: '100%', label: 'التزام',       desc: 'بالجودة والمواعيد' },
                    ].map((stat, i) => (
                        <GlassCard
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 sm:p-6 text-center group hover:bg-primary/5 transition-all duration-500"
                        >
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-3 mx-auto group-hover:bg-primary group-hover:text-beige transition-all"
                            >
                                <stat.icon className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-2xl sm:text-3xl font-black text-walnut mb-1">{stat.value}</h3>
                            <p className="text-primary font-black text-sm mb-1">{stat.label}</p>
                            <p className="text-brown/70 text-xs font-medium">{stat.desc}</p>
                        </GlassCard>
                    ))}
                </div>

                {/* ── القصة الشخصية ── */}
                <div className="relative">
                    {/* شريط الخط الزمني */}
                    <div className="absolute right-[18px] sm:right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-bronze/30 to-transparent hidden sm:block" />

                    <div className="text-center mb-8">
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block mb-4">
                            قصتنا
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-walnut tracking-tight">
                            من الحلم إلى{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bronze">
                                الواقع
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-10 sm:space-y-0 max-w-4xl mx-auto">

                        {/* 2016 */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sm:grid sm:grid-cols-2 sm:gap-12 items-center mb-8"
                        >
                            <div className="bg-white/50 border border-walnut/10 rounded-2xl p-4 sm:p-6 text-right relative">
                                <div className="absolute -right-3 sm:right-auto sm:-left-3 top-8 w-6 h-6 rounded-full bg-primary border-4 border-[#EFE5D2] hidden sm:block" />
                                <span className="text-xs font-mono text-primary tracking-widest uppercase mb-3 block">2016 — البداية</span>
                                <h3 className="text-xl sm:text-2xl font-black text-walnut mb-3 leading-snug">
                                    حلمٌ اصطدم بجدار التقنية
                                </h3>
                                <p className="text-brown/80 text-sm sm:text-base leading-relaxed">
                                    كان الحلم واضحاً — امتلاك تطبيق. لكن التقنية كانت محتكرةً في يد شركات برمجية بعيدة المنال.
                                    جاءت محاولات الأول بشوق وعزم، لكنها انكسرت على صخرة الواقع.
                                    رغم ذلك، لم تنطفئ الشرارة.
                                </p>
                            </div>
                            <div className="hidden sm:flex justify-center">
                                <div className="text-6xl sm:text-8xl font-black text-walnut/[0.06] select-none tracking-tighter">
                                    2016
                                </div>
                            </div>
                        </motion.div>

                        {/* المسيرة */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="sm:grid sm:grid-cols-2 sm:gap-12 items-center mb-12"
                        >
                            <div className="hidden sm:flex justify-center order-first">
                                <div className="text-6xl sm:text-8xl font-black text-walnut/[0.06] select-none tracking-tighter">
                                    10Y
                                </div>
                            </div>
                            <div className="bg-white/50 border border-walnut/10 rounded-2xl p-6 sm:p-8 text-right relative">
                                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-bronze border-4 border-[#EFE5D2] hidden sm:block" />
                                <span className="text-xs font-mono text-bronze tracking-widest uppercase mb-3 block">2016 — 2025</span>
                                <h3 className="text-xl sm:text-2xl font-black text-walnut mb-3 leading-snug">
                                    عشر سنوات من الإصرار والتعلم
                                </h3>
                                <p className="text-brown/80 text-sm sm:text-base leading-relaxed">
                                    لم يكن الفشل نهاية — بل كان بداية رحلة تعلّم حقيقية.
                                    سنوات من البناء الصامت، اكتساب المهارة، وصقل الرؤية.
                                    الشرارة ظلّت حيّة تحت الرماد، تنتظر وقودها.
                                </p>
                            </div>
                        </motion.div>

                        {/* 2026 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-primary/10 to-bronze/5 border border-bronze/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-bronze border-4 border-[#EFE5D2] hidden sm:block" />
                                <span className="text-xs font-mono text-bronze tracking-widest uppercase mb-4 block">2026 — اليوم</span>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-walnut mb-4 leading-snug">
                                    أصبحنا{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bronze">
                                        إرث
                                    </span>
                                </h3>
                                <p className="text-brown text-sm leading-relaxed max-w-xl mx-auto mb-5">
                                    اليوم نصنع التطبيقات ونطورها بأيدينا.
                                    ما كان حلماً يصطدم بالجدران، أصبح واقعاً يبني الجسور.
                                    نحن هنا لأن الحلم لم يكن خياراً — كان ضرورة.
                                </p>
                                <div className="flex justify-center">
                                    <div className="bg-white/60 border border-walnut/10 rounded-2xl px-8 py-4 text-center">
                                        <p className="font-black text-walnut text-base">ضيف الله مشني</p>
                                        <p className="text-xs font-mono text-bronze uppercase tracking-widest mt-1">المدير العام — إرث لتقنية المعلومات</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* ── مميزاتنا ── */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'تصميم احترافي', desc: 'تصاميم عصرية تواكب أحدث الاتجاهات العالمية وتناسب السوق المحلي' },
                        { title: 'تقنيات حديثة',  desc: 'نستخدم أحدث التقنيات والأدوات لضمان الأداء الأمثل والأمان' },
                        { title: 'دعم مستمر',     desc: 'نوفر دعماً فنياً متواصلاً وتحديثات دورية لضمان استمرارية العمل' },
                    ].map((feature, i) => (
                        <div key={i} className="text-right">
                            <h4 className="text-2xl font-black text-walnut mb-4">{feature.title}</h4>
                            <p className="text-brown/70 font-medium leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
