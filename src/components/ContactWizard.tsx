import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPicker } from './ui/CalendarPicker';
import emailjs from '@emailjs/browser';

interface FormData {
  projectType: string;
  budget: string;
  projectDescription: string;
  projectStatus: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  preferredDate: string;
  preferredTime: string;
}

const TIME_SLOTS = [
  { id: 'morning',   label: 'صباحاً',  sub: '9:00 – 12:00',  emoji: '🌅' },
  { id: 'noon',      label: 'ظهراً',   sub: '12:00 – 15:00', emoji: '☀️' },
  { id: 'afternoon', label: 'عصراً',   sub: '15:00 – 18:00', emoji: '🌤️' },
  { id: 'evening',   label: 'مساءً',   sub: '18:00 – 21:00', emoji: '🌙' },
];

const formatDateAr = (dateStr: string) => {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

export const ContactWizard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    budget: '',
    projectDescription: '',
    projectStatus: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [error, setError]               = useState('');

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.projectType || !formData.budget || !formData.clientName || !formData.clientPhone) {
      setError('فضلاً قم بإكمال البيانات الأساسية لتسهيل التواصل.');
      return;
    }
    if (!formData.projectDescription) {
      setError('يرجى إضافة وصف مختصر عن فكرتك.');
      return;
    }
    if (!formData.projectStatus) {
      setError('يرجى تحديد هل مشروعك قائم أم مجرد فكرة.');
      return;
    }
    if (!formData.preferredDate || !formData.preferredTime) {
      setError('يرجى تحديد تاريخ ووقت مناسب للتواصل.');
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      to_email:            'erihdev@gmail.com',
      from_name:           formData.clientName,
      from_phone:          formData.clientPhone,
      from_email:          formData.clientEmail || 'لم يُذكر',
      project_type:        formData.projectType,
      budget:              formData.budget,
      project_description: formData.projectDescription,
      project_status:      formData.projectStatus,
      preferred_date:      formatDateAr(formData.preferredDate),
      preferred_time:      TIME_SLOTS.find(t => t.id === formData.preferredTime)?.label + ' ' +
                           TIME_SLOTS.find(t => t.id === formData.preferredTime)?.sub || formData.preferredTime,
      reply_to:            formData.clientEmail || formData.clientPhone,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setError('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل مباشرة عبر الواتساب.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative text-walnut flex flex-col justify-center items-center px-4 sm:px-6 py-8 sm:py-12 overflow-hidden select-none">

      {/* إضاءات الخلفية */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-bronze/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-3xl w-full z-10 text-right">

        {/* ─── العنوان ─── */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20"
          >
            مستشار الحلول الرقمية
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-walnut mb-3">
            لنصنع{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bronze">
              التجربة القادمة
            </span>{' '}
            معاً
          </h2>
          <p className="text-brown/80 text-sm sm:text-base max-w-xl mx-auto">
            صمم ملامح نظامك في ثوانٍ، وسيقوم مهندسو إرث بالتواصل معك في الوقت الذي يناسبك تماماً.
          </p>
        </div>

        {/* ─── البطاقة ─── */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form-card"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="bg-white/60 backdrop-blur-3xl border border-walnut/10 shadow-2xl shadow-walnut/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10"
            >
              <form onSubmit={handleSubmit} noValidate>

                {/* ── ١. النطاق التقني ── */}
                <div className="mb-7 sm:mb-10">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 flex items-center gap-3 text-walnut">
                    <span className="w-1.5 h-5 bg-bronze rounded-full inline-block" />
                    ١. ما هو النطاق التقني المستهدف لنظامك؟
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { id: 'app', title: 'تطبيق جوال', desc: 'iOS & Android', icon: '📱' },
                      { id: 'web', title: 'موقع إلكتروني', desc: 'Web Development', icon: '🌐' },
                    ].map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => handleSelect('projectType', opt.title)}
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between h-24 sm:h-32 ${
                          formData.projectType === opt.title
                            ? 'border-primary bg-primary/[0.06]'
                            : 'bg-white/40 border-walnut/10 hover:border-primary/40'
                        }`}
                      >
                        <span className={`text-xl ${formData.projectType === opt.title ? 'text-primary' : 'text-brown/50'}`}>
                          {opt.icon}
                        </span>
                        <div>
                          <div className="font-bold text-sm text-walnut">{opt.title}</div>
                          <p className="text-xs text-brown/60 font-mono">{opt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── ٢. النطاق الاستثماري ── */}
                <div className="mb-7 sm:mb-10">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 flex items-center gap-3 text-walnut">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block" />
                    ٢. النطاق التقديري للاستثمار والتطوير؟
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'نطاق نمو سريع',
                        desc: 'Startup / MVP',
                        features: ['نسخة أولى جاهزة للإطلاق', 'المزايا الأساسية لفكرتك', 'أسرع تنفيذ وأقل تكلفة'],
                      },
                      {
                        title: 'نطاق أعمال متقدم',
                        desc: 'Business Expansion',
                        features: ['تطبيق أو موقع متكامل', 'دفع إلكتروني وإشعارات ولوحة تحكم', 'تصميم احترافي بهوية منشأتك'],
                      },
                      {
                        title: 'نطاق مخصص للمؤسسات',
                        desc: 'Enterprise Solutions',
                        features: ['حلول مصممة بالكامل حسب الطلب', 'تكاملات مع أنظمتك الداخلية', 'دعم وصيانة مستمرة بأولوية'],
                      },
                    ].map(b => (
                      <div
                        key={b.title}
                        onClick={() => handleSelect('budget', b.title)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all text-center ${
                          formData.budget === b.title
                            ? 'border-primary bg-primary/[0.06]'
                            : 'bg-white/40 border-walnut/10 hover:border-primary/40'
                        }`}
                      >
                        <span className="block font-bold text-sm text-walnut">{b.title}</span>
                        <span className="block font-mono text-xs text-brown/60 mt-1">{b.desc}</span>
                        <ul className="mt-3 pt-3 border-t border-walnut/10 space-y-1.5 text-right">
                          {b.features.map(f => (
                            <li key={f} className="flex items-start gap-2 text-xs text-brown/80 leading-relaxed">
                              <span className="text-primary font-black mt-0.5">✓</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── ٣. الفكرة وحالة المشروع ── */}
                <div className="mb-7 sm:mb-10">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 flex items-center gap-3 text-walnut">
                    <span className="w-1.5 h-5 bg-bronze rounded-full inline-block" />
                    ٣. احكِ عن فكرتك بشكل مختصر
                  </h3>

                  {/* textarea الفكرة */}
                  <textarea
                    name="projectDescription"
                    required
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    placeholder="صف فكرتك باختصار... ما المشكلة التي يحلها؟ من هو جمهورك؟"
                    rows={3}
                    className="w-full bg-white/50 border border-walnut/15 focus:border-primary/50 p-3.5 rounded-xl text-walnut outline-none text-sm transition-all placeholder:text-brown/40 focus:bg-white/70 resize-none mb-4"
                  />

                  {/* حالة المشروع */}
                  <label className="block text-xs text-brown/70 mb-3 font-mono">هل مشروعك قائم أم مجرد فكرة؟</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'live',    label: 'قائم ومشغّل',      emoji: '✅', sub: 'Already Live' },
                      { id: 'dev',     label: 'قيد التطوير',     emoji: '⚙️', sub: 'In Development' },
                      { id: 'idea',    label: 'مجرد فكرة',       emoji: '💡', sub: 'Just an Idea' },
                    ].map(s => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => handleSelect('projectStatus', s.id)}
                        className={`p-4 rounded-xl border transition-all duration-200 text-center ${
                          formData.projectStatus === s.id
                            ? 'border-primary bg-primary/5 scale-[0.97]'
                            : 'bg-white/40 border-walnut/10 hover:border-primary/40'
                        }`}
                      >
                        <span className="block text-2xl mb-1">{s.emoji}</span>
                        <span className={`block font-bold text-sm ${
                          formData.projectStatus === s.id ? 'text-primary' : 'text-walnut'
                        }`}>{s.label}</span>
                        <span className="block font-mono text-[10px] text-brown/60 mt-0.5">{s.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── ٤. بيانات التواصل ── */}
                <div className="mb-7 sm:mb-10">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 flex items-center gap-3 text-walnut">
                    <span className="w-1.5 h-5 bg-bronze rounded-full inline-block" />
                    ٤. كيف يرحب فريق إرث بالتواصل معك؟
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"  name="clientName"  required
                      value={formData.clientName}   onChange={handleInputChange}
                      placeholder="اسمك الكريم أو اسم المنشأة"
                      className="w-full bg-white/50 border border-walnut/15 focus:border-primary/50 p-3.5 rounded-xl text-walnut outline-none text-sm transition-all placeholder:text-brown/40 focus:bg-white/70"
                    />
                    <input
                      type="tel"   name="clientPhone" required dir="ltr"
                      value={formData.clientPhone}  onChange={handleInputChange}
                      placeholder="رقم الهاتف للاتصال والواتساب"
                      className="w-full bg-white/50 border border-walnut/15 focus:border-primary/50 p-3.5 rounded-xl text-walnut outline-none text-sm transition-all placeholder:text-brown/40 focus:bg-white/70 text-left"
                    />
                    <input
                      type="email" name="clientEmail"
                      value={formData.clientEmail}  onChange={handleInputChange}
                      placeholder="بريدك الإلكتروني (اختياري)"
                      className="w-full bg-white/50 border border-walnut/15 focus:border-primary/50 p-3.5 rounded-xl text-walnut outline-none text-sm transition-all placeholder:text-brown/40 focus:bg-white/70 sm:col-span-2"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* ── ٤. التاريخ والوقت المفضل ── */}
                <div className="mb-7 sm:mb-10">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 flex items-center gap-3 text-walnut">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block" />
                    ٥. متى يناسبك نتواصل معك؟
                  </h3>

                  {/* كالندر مخصص */}
                  <div className="mb-4">
                    <label className="block text-xs text-brown/70 mb-2 font-mono">اختر التاريخ المناسب</label>
                    <CalendarPicker
                      value={formData.preferredDate}
                      onChange={(date) => handleSelect('preferredDate', date)}
                      maxDaysAhead={60}
                    />
                  </div>

                  {/* أوقات مفضلة */}
                  <div>
                    <label className="block text-xs text-brown/70 mb-2 font-mono">اختر الوقت المفضل</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      {TIME_SLOTS.map(slot => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => handleSelect('preferredTime', slot.id)}
                          className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 text-center group ${
                            formData.preferredTime === slot.id
                              ? 'border-primary bg-primary/10 scale-[0.97]'
                              : 'bg-white/40 border-walnut/10 hover:border-primary/40'
                          }`}
                        >
                          <span className="block text-xl mb-1">{slot.emoji}</span>
                          <span className={`block font-bold text-xs sm:text-sm ${
                            formData.preferredTime === slot.id ? 'text-primary' : 'text-walnut'
                          }`}>
                            {slot.label}
                          </span>
                          <span className="block font-mono text-[10px] text-brown/60 mt-0.5" dir="ltr">{slot.sub}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* رسالة الخطأ */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5 p-4 rounded-xl border border-red-600/30 bg-red-600/5 text-red-700 text-sm text-right"
                  >
                    ⚠️ {error}
                  </motion.div>
                )}

                {/* زر الإرسال */}
                <div className="text-center mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-[#2E5C46]
                      hover:from-[#1d4a39] hover:to-[#376b52] disabled:opacity-60 disabled:cursor-not-allowed
                      text-beige font-bold px-7 sm:px-10 py-3 sm:py-4 rounded-xl shadow-xl shadow-primary/20
                      hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03] active:scale-95
                      text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        <span>جارٍ الإرسال…</span>
                      </>
                    ) : (
                      <>
                        <span>إرسال مواصفات النظام لفريق إرث</span>
                        <span className="text-xs">✈️</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

          ) : (

            /* ── شاشة النجاح ── */
            <motion.div
              key="success-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/60 border border-primary/30 backdrop-blur-3xl shadow-2xl shadow-walnut/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"
              >
                ✅
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-walnut">وصلت ملامح إرثك الرقمي بنجاح!</h3>
              <p className="text-brown/80 text-sm max-w-sm mx-auto mb-3">
                سيتواصل معك فريق إرث لتقنية المعلومات
              </p>
              {formData.preferredDate && formData.preferredTime && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
                  📅 {formatDateAr(formData.preferredDate)} —{' '}
                  {TIME_SLOTS.find(t => t.id === formData.preferredTime)?.emoji}{' '}
                  {TIME_SLOTS.find(t => t.id === formData.preferredTime)?.label}
                </div>
              )}
              <br />
              <span className="text-xs font-mono text-brown/50">erihdev.com © 2026</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
