import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    className?: string;
    variant?: 'subtle' | 'normal' | 'strong';
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className = '',
    variant = 'normal',
    hoverEffect = true,
    ...props
}: GlassCardProps) => {
    const variants = {
        subtle: 'bg-white/30 border-walnut/[0.06]',
        normal: 'glass border-walnut/10',
        strong: 'glass-card border-walnut/15'
    };

    return (
        <motion.div
            {...(hoverEffect ? {
                whileHover: { y: -8, scale: 1.02 },
                transition: { type: "spring", stiffness: 400, damping: 17 }
            } : {})}
            className={`rounded-3xl sm:rounded-[40px] overflow-hidden transition-all duration-500 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};
