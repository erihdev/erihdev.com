import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const MONTHS_AR = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];

const DAYS_AR = ['أح', 'إث', 'ثل', 'أر', 'خم', 'جم', 'سب'];

interface Props {
  value: string;          // YYYY-MM-DD
  onChange: (date: string) => void;
  maxDaysAhead?: number;
}

export const CalendarPicker: React.FC<Props> = ({ value, onChange, maxDaysAhead = 60 }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + maxDaysAhead);

  const parseSelected = (): Date | null => {
    if (!value) return null;
    const d = new Date(value + 'T00:00:00');
    return isNaN(d.getTime()) ? null : d;
  };

  const [viewYear, setViewYear]   = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [direction, setDirection] = useState(0); // for animation

  const selected = parseSelected();

  const firstDay  = new Date(viewYear, viewMonth, 1).getDay();      // 0=Sun
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    setDirection(-1);
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    setDirection(1);
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const canGoPrev = (): boolean => {
    return new Date(viewYear, viewMonth, 1) > new Date(today.getFullYear(), today.getMonth(), 1);
  };

  const canGoNext = (): boolean => {
    const lastAllowed = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
    return new Date(viewYear, viewMonth, 1) < lastAllowed;
  };

  const isDisabled = (day: number): boolean => {
    const d = new Date(viewYear, viewMonth, day);
    return d < today || d > maxDate;
  };

  const isSelected = (day: number): boolean => {
    if (!selected) return false;
    return (
      selected.getFullYear() === viewYear &&
      selected.getMonth()    === viewMonth &&
      selected.getDate()     === day
    );
  };

  const isToday = (day: number): boolean => {
    return (
      today.getFullYear() === viewYear &&
      today.getMonth()    === viewMonth &&
      today.getDate()     === day
    );
  };

  const handleDayClick = (day: number) => {
    if (isDisabled(day)) return;
    const d = new Date(viewYear, viewMonth, day);
    const yyyy = d.getFullYear();
    const mm   = String(d.getMonth() + 1).padStart(2, '0');
    const dd   = String(d.getDate()).padStart(2, '0');
    onChange(`${yyyy}-${mm}-${dd}`);
  };

  // Total cells = leading empties + days
  const totalCells = firstDay + daysInMonth;
  const rows = Math.ceil(totalCells / 7);

  return (
    <div className="w-full bg-white/[0.02] border border-white/[0.07] rounded-2xl overflow-hidden">

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <button
          type="button"
          onClick={nextMonth}
          disabled={!canGoNext()}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <AnimatePresence mode="wait">
          <motion.span
            key={`${viewYear}-${viewMonth}`}
            initial={{ opacity: 0, y: direction > 0 ? 8 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -8 : 8 }}
            transition={{ duration: 0.18 }}
            className="font-bold text-sm text-white tracking-wide"
          >
            {MONTHS_AR[viewMonth]} {viewYear}
          </motion.span>
        </AnimatePresence>

        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoPrev()}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── Day names ── */}
      <div className="grid grid-cols-7 border-b border-white/[0.04] px-2 pt-3 pb-1">
        {DAYS_AR.map(d => (
          <div key={d} className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest pb-1">
            {d}
          </div>
        ))}
      </div>

      {/* ── Day grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${viewYear}-${viewMonth}-grid`}
          initial={{ opacity: 0, x: direction * 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -20 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-7 gap-y-1 px-2 py-2"
        >
          {Array.from({ length: rows * 7 }).map((_, idx) => {
            const day = idx - firstDay + 1;
            const inMonth = day >= 1 && day <= daysInMonth;

            if (!inMonth) {
              return <div key={idx} />;
            }

            const disabled = isDisabled(day);
            const selected = isSelected(day);
            const todayFlag = isToday(day);

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleDayClick(day)}
                disabled={disabled}
                className={`
                  relative mx-auto w-8 h-8 rounded-xl text-xs font-bold transition-all duration-150
                  flex items-center justify-center
                  ${selected
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30 scale-110'
                    : todayFlag && !disabled
                      ? 'bg-white/[0.08] text-[#deff9a] ring-1 ring-[#deff9a]/40'
                      : disabled
                        ? 'text-slate-700 cursor-not-allowed'
                        : 'text-slate-300 hover:bg-white/[0.08] hover:text-white cursor-pointer'
                  }
                `}
              >
                {day}
                {todayFlag && !selected && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#deff9a]" />
                )}
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* ── Selected display ── */}
      {value && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-white/[0.05] px-4 py-2.5 flex items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-mono">📅</span>
          <span className="text-xs text-[#deff9a]/80 font-mono">
            {new Date(value + 'T00:00:00').toLocaleDateString('ar-SA', {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })}
          </span>
        </motion.div>
      )}
    </div>
  );
};
