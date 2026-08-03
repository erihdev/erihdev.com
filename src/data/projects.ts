export interface ProjectFeature {
    title: string;
    desc: string;
}

export interface Project {
    slug: string;
    title: string;
    titleEn: string;
    category: string;
    desc: string;
    longDesc: string;
    image: string;
    tags: string[];
    url: string;
    features: ProjectFeature[];
    stack: string[];
}

export const PROJECTS: Project[] = [
    {
        slug: 'zyiarah',
        title: 'زيارة',
        titleEn: 'Zyiarah.com',
        category: 'تطبيق خدمات',
        desc: 'منصة فخمة لخدمات التنظيف مع نظام حجز متطور وتجربة مستخدم راقية في المملكة.',
        longDesc:
            'منصة متكاملة لخدمات التنظيف المنزلي في المملكة العربية السعودية — تطبيق جوال لنظامي iOS وAndroid مع موقع ويب ولوحة إدارة شاملة. تدير المنصة دورة الطلب كاملة: من الحجز المجدول بسعات ذكية، إلى إسناد السائقين وتتبعهم مباشرة على الخريطة، وحتى الدفع الإلكتروني والفوترة الضريبية المتوافقة مع هيئة الزكاة والضريبة.',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000',
        tags: ['React', 'Capacitor', 'Cloud'],
        url: 'https://zyiarah.com',
        features: [
            { title: 'حجز مجدول ذكي', desc: 'نظام سعات يعرض المواعيد المتاحة فعلياً حسب المنطقة وتوفر الكوادر' },
            { title: 'تتبع مباشر', desc: 'متابعة السائق على الخريطة لحظة بلحظة مع إشعارات وصول تلقائية' },
            { title: 'مدفوعات متعددة', desc: 'بطاقات، Apple Pay، STC Pay، تقسيط تمارا وتابي، ومحفظة داخلية' },
            { title: 'فوترة ضريبية', desc: 'فواتير إلكترونية متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك' },
            { title: 'عقود واشتراكات', desc: 'باقات دورية وعقود شركات مع إدارة تجديد وصيانة كاملة' },
            { title: 'لوحة إدارة شاملة', desc: 'إدارة الطلبات والسائقين والتسعير والتقارير المالية من مكان واحد' },
        ],
        stack: ['Flutter', 'React', 'TypeScript', 'Firebase', 'Cloud Functions', 'Moyasar'],
    },
    {
        slug: 'markmap',
        title: 'مارك ماب',
        titleEn: 'MarkMap.app',
        category: 'منصة إدارة تسويق',
        desc: 'مركز قيادة عمليات التسويق — جدولة المحتوى والحملات والميزانية وأداء الفريق في مكان واحد.',
        longDesc:
            'منصة متكاملة تحوّل عمل قسم التسويق من فوضى يومية إلى نظام احترافي منضبط. تدير دورة المحتوى كاملة — من الفكرة إلى النشر — عبر سبعة تبويبات متخصصة: جدول المنشورات، الخارطة الزمنية، لوحة تحكم مالية، إنتاجية الفريق، كتالوج المنتجات، وسجل نشاط شفاف. متاحة كتطبيق آيفون وموقع ويب بمساحات عمل منفصلة لكل منشأة.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2000',
        tags: ['Capacitor', 'Firebase', 'iOS'],
        url: 'https://markmap.app',
        features: [
            { title: 'جدولة المحتوى', desc: 'كل منشور بحالة ومسؤول وموعد — لا فوضى ولا منشورات منسية' },
            { title: 'خارطة زمنية', desc: 'عرض شهري وأسبوعي ويومي لتخطيط الحملات بدقة الساعة' },
            { title: 'لوحة تحكم مالية', desc: 'الإنفاق التسويقي والأرباح المتوقعة وتوزيع الميزانية بالأرقام' },
            { title: 'قياس أداء الفريق', desc: 'إنتاجية كل عضو: كم أنشأ، كم أُسند له، وكم أنجز فعلياً' },
            { title: 'اعتمادات وإشعارات', desc: 'سير موافقات واضح مع تنبيهات بريدية تلقائية عند تغيّر الحالة' },
            { title: 'مساحات عمل معزولة', desc: 'كل منشأة ببياناتها وفريقها وصلاحياتها منفصلة تماماً' },
        ],
        stack: ['JavaScript', 'Capacitor', 'Firebase', 'Cloud Functions', 'esbuild'],
    },
    {
        slug: 'al7ay',
        title: 'الحي',
        titleEn: 'Al7ay.com',
        category: 'منصة اجتماعية',
        desc: 'منصة تواصل مجتمعي تربط الجيران وتسهل التفاعل المحلي والخدمات الحية.',
        longDesc:
            'منصة تواصل مجتمعي تعيد إحياء روح الحي — تربط الجيران في مساحة رقمية واحدة تسهّل التعارف والتعاون وتبادل الخدمات المحلية. صُممت بتجربة استخدام سلسة وواجهة عربية أصيلة تناسب جميع الأعمار.',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000',
        tags: ['Vite', 'Animations', 'UX'],
        url: 'https://al7ay.com',
        features: [
            { title: 'مجتمعات سكنية', desc: 'مساحة خاصة لكل حي تجمع سكانه في مكان واحد' },
            { title: 'تفاعل محلي', desc: 'منشورات وإعلانات وفعاليات تخص جيرانك مباشرة' },
            { title: 'خدمات حيّة', desc: 'اطلب أو قدّم خدمات داخل حيّك بسهولة وموثوقية' },
            { title: 'تجربة عربية', desc: 'واجهة مصممة من الصفر بالعربية مع حركات انسيابية' },
        ],
        stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    },
    {
        slug: 'fivehub',
        title: 'فايف هب',
        titleEn: 'FiveHub.com',
        category: 'منصة القهوة',
        desc: 'نظام متكامل لسلسلة إمدادات القهوة يربط المزارع والموردين والمحامص والمقاهي.',
        longDesc:
            'نظام B2B متكامل لسلسلة إمدادات القهوة — يربط حلقات السلسلة كاملة من المزرعة إلى الفنجان: المزارع والموردون والمحامص والمقاهي في منصة واحدة تدير الطلبات والمخزون والتوريد بشفافية وكفاءة.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000',
        tags: ['React', 'Supply Chain', 'B2B'],
        url: 'https://5-hub.com',
        features: [
            { title: 'سلسلة كاملة', desc: 'من المزرعة إلى المقهى — كل الأطراف في منصة واحدة' },
            { title: 'إدارة طلبات', desc: 'دورة طلب B2B كاملة مع حالات وتتبع لكل شحنة' },
            { title: 'إدارة مخزون', desc: 'رؤية لحظية للمخزون والأصناف عبر كل الحلقات' },
            { title: 'شفافية التوريد', desc: 'تتبع مصدر البن ورحلته عبر السلسلة بالكامل' },
        ],
        stack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    },
];

export const getProject = (slug: string) => PROJECTS.find(p => p.slug === slug);
