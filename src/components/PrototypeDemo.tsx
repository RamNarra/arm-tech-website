'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, CalendarClock, FileSpreadsheet, Languages, ShieldCheck, Send, RotateCcw, Play } from 'lucide-react';
import clsx from 'clsx';

const PROMPT = 'Every Monday, read unpaid fee rows from my Sheet and WhatsApp a polite reminder to each parent. Ask me before sending.';

const STEPS = [
  { icon: CalendarClock, title: 'Trigger', body: 'Every Monday, 9:00 AM' },
  { icon: FileSpreadsheet, title: 'Read Google Sheet', body: 'Rows where Status = Unpaid' },
  { icon: Languages, title: 'Draft reminder', body: 'English and Telugu, polite tone' },
  { icon: ShieldCheck, title: 'Approval gate', body: 'You see the full recipient list first', gate: true },
  { icon: Send, title: 'Send via WhatsApp Business', body: 'Only after you approve' },
];

type Phase = 'idle' | 'typing' | 'planning' | 'review' | 'done';

export function PrototypeDemo() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [typed, setTyped] = useState('');
  const [shown, setShown] = useState(0);
  const timers = useRef<number[]>([]);

  const clear = () => { timers.current.forEach(window.clearTimeout); timers.current = []; };
  useEffect(() => clear, []);

  const later = (ms: number, fn: () => void) => { timers.current.push(window.setTimeout(fn, ms)); };

  function start() {
    clear();
    setTyped(''); setShown(0); setPhase('typing');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const per = reduce ? 0 : 18;
    for (let i = 1; i <= PROMPT.length; i++) later(i * per, () => setTyped(PROMPT.slice(0, i)));
    const t0 = PROMPT.length * per + (reduce ? 0 : 350);
    later(t0, () => setPhase('planning'));
    STEPS.forEach((_, i) => later(t0 + (i + 1) * (reduce ? 0 : 420), () => setShown(i + 1)));
    later(t0 + (STEPS.length + 1) * (reduce ? 0 : 420), () => setPhase('review'));
  }

  function reset() { clear(); setPhase('idle'); setTyped(''); setShown(0); }

  return (
    <div className="glass rounded-[28px] p-3 sm:p-4" aria-live="polite">
      <div className="rounded-[20px] bg-ink p-4 text-on-ink sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-on-ink-muted">
            <span className="size-2 rounded-full bg-cyan-hi" /> ARM Flow · New workflow
          </div>
          <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[11px] text-on-ink-muted">concept demo · sample data</span>
        </div>

        <div className="min-h-[88px] rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-[15px] leading-7">
          {phase === 'idle' ? <span className="text-on-ink-muted">Type what you want to automate…</span> : <span className={clsx(phase === 'typing' && 'caret')}>{typed}</span>}
        </div>

        {phase !== 'idle' && phase !== 'typing' && (
          <div className="mt-5">
            <p className="mb-3 text-sm text-on-ink-muted">Got it. Here is the plan I built:</p>
            <ol className="space-y-2.5">
              {STEPS.slice(0, shown).map((s, i) => (
                <li key={s.title} className={clsx('flex items-start gap-3 rounded-2xl border p-3.5', s.gate ? 'border-cyan-hi/40 bg-cyan-hi/10' : 'border-white/10 bg-white/[0.04]')}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-hi"><s.icon size={18} /></span>
                  <div>
                    <p className="text-[15px] font-semibold"><span className="mr-2 font-mono text-xs text-on-ink-muted">{i + 1}</span>{s.title}</p>
                    <p className="text-sm text-on-ink-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {phase === 'review' && (
          <div className="mt-5 rounded-2xl border border-cyan-hi/40 bg-cyan-hi/10 p-4">
            <p className="font-semibold">Approval needed</p>
            <p className="mt-1 text-sm text-on-ink-muted">Send 6 payment reminders to parents with unpaid fees? Recipients: Rao, Sharma, Reddy, Khan, Iyer, Patel.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" onClick={() => setPhase('done')} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink hover:bg-mist"><Check size={16} /> Approve and send</button>
              <button type="button" onClick={reset} className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-medium hover:bg-white/10">Cancel</button>
            </div>
          </div>
        )}

        {phase === 'done' && (
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
            <p className="flex items-center gap-2 font-semibold text-cyan-hi"><Check size={18} /> Approved by you, run complete</p>
            <p className="mt-1 text-sm text-on-ink-muted">6 of 6 reminders sent. Audit log written. Estimated time saved this week: 1 h 05 min.</p>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {phase === 'idle' || phase === 'done' ? (
            <button type="button" onClick={start} className="btn-glow inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white"><Play size={16} /> {phase === 'done' ? 'Run it again' : 'Run the demo'}</button>
          ) : (
            <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-medium hover:bg-white/10"><RotateCcw size={16} /> Reset</button>
          )}
        </div>
      </div>
    </div>
  );
}
