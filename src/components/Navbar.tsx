import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'الرئيسية', href: '#' },
        { label: 'الخدمات', href: '#services' },
        { label: 'مشاريعنا', href: '#projects' },
        { label: 'تواصل معنا', href: '#contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-4 sm:py-6">
            <div className="max-w-7xl mx-auto">
                <div className="glass rounded-[20px] sm:rounded-[28px] px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between border-walnut/10">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <img src="/logo.png" alt="Erih Dev Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl object-cover hover:scale-110 transition-transform duration-300" />
                        <div className="flex flex-col leading-none">
                            <span className="font-black text-base sm:text-xl text-walnut tracking-tight">إرث لتقنية المعلومات</span>
                            <span className="text-[7px] sm:text-[8px] font-black text-bronze uppercase tracking-[0.2em]">ERIH DEV</span>
                        </div>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="px-6 py-2.5 rounded-2xl text-brown/80 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-walnut"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 glass rounded-[28px] p-6 border-walnut/10"
                    >
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="block py-3 text-brown/80 hover:text-primary transition-colors font-bold"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
};
