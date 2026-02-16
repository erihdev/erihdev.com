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
        subtle: 'bg-white/[0.01] border-white/[0.03]',
        normal: 'glass border-white/5',
        strong: 'glass-card border-white/10'
    };

    return (
        <motion.div
            {...(hoverEffect ? {
                whileHover: { y: -8, scale: 1.02 },
                transition: { type: "spring", stiffness: 400, damping: 17 }
            } : {})}
            className={`rounded-[48px] overflow-hidden transition-all duration-500 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};
