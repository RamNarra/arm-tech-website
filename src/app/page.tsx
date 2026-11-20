import { ArrowRight, Check, Code, HandHelping, Handshake, LayoutTemplate, Plug, ShieldCheck, Sparkles, AlertTriangle, type LucideIcon } from 'lucide-react';
import {
  site, stats, rootCauses, services, safety, stack, architecture, interviews, ratings, learnings,
  plans, market, unitEconomics, roadmap, pilot, team,
} from '@/content/site';
import { Header } from '@/components/Header';
import { PrototypeDemo } from '@/components/PrototypeDemo';
import { Aurora, Button, Eyebrow, H2, Reveal, SpotCard } from '@/components/ui';

const icons: Record<string, LucideIcon> = { Sparkles, LayoutTemplate, ShieldCheck, Plug, HandHelping, Handshake };

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden border-b border-line bg-mist pt-32 pb-16 md:pt-44 md:pb-24">
          <Aurora intensity={0.55} />
          <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <Eyebrow>ARM Tech · A venture from SNIST, Hyderabad</Eyebrow>
              <h1 className="t-hero font-display font-semibold text-balance">
                Automate the busywork. <span className="text-gradient">Keep every decision.</span>
              </h1>
              <p className="t-lead mt-6 max-w-[58ch] text-muted">
                <strong className="font-semibold text-text">ARM Flow</strong> lets an Indian small business describe a recurring task in plain English, review a clear plan, approve sensitive steps, and let it run across Google Sheets, Gmail and WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#prototype">Try the prototype <ArrowRight size={18} /></Button>
                <Button href="#services" variant="secondary">What we offer</Button>
              </div>
              <p className="mt-6 font-mono text-[13px] tracking-wide text-muted">{site.tagline}</p>
            </div>
            <Reveal delay={0.1}>
              <div className="glass rounded-[28px] p-5 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand">Before and after · typical week</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-white p-5">
                    <p className="text-sm font-semibold text-muted">Today</p>
                    <ul className="mt-3 space-y-2 text-[15px] text-text">
                      <li>Copy WhatsApp enquiries into a sheet</li>
                      <li>Chase unpaid fees one by one</li>
                      <li>Build the weekly report by hand</li>
                    </ul>
                    <p className="mt-4 font-display text-2xl font-semibold text-warn">~10 h / week</p>
                  </div>
                  <div className="rounded-2xl bg-ink p-5 text-on-ink">
                    <p className="text-sm font-semibold text-on-ink-muted">With ARM Flow</p>
                    <ul className="mt-3 space-y-2 text-[15px]">
                      <li>One sentence sets it up</li>
                      <li>You approve the recipient list</li>
                      <li>Summary arrives on its own</li>
                    </ul>
                    <p className="mt-4 font-display text-2xl font-semibold text-cyan-hi">Minutes to review</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted">Illustrative scenario from the venture report, not a measured result. The seven-day pilot will measure it.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Key numbers" className="border-b border-line">
          <div className="container-x grid grid-cols-2 gap-px bg-line md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-4 py-8 md:px-6">
                <p className="font-display text-3xl font-semibold text-brand md:text-4xl">{s.value}</p>
                <p className="mt-1 text-[15px] font-medium text-text">{s.label}</p>
                <p className="mt-1 text-sm text-muted">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="on-ink section-y relative overflow-hidden bg-ink text-on-ink" aria-labelledby="problem-h">
          <Aurora intensity={0.25} />
          <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
          <div className="container-x relative">
            <Reveal>
              <Eyebrow dark>The problem</Eyebrow>
              <H2 id="problem-h" className="max-w-4xl text-white">The owner is the human glue between five or six disconnected apps.</H2>
              <p className="mt-5 max-w-[66ch] text-lg leading-8 text-on-ink-muted">
                Indian small businesses lose an estimated one to two hours every working day to manual, fragmented work across email, spreadsheets, payments and chat. We asked why, five times over. These are the root causes we heard.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {rootCauses.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="card h-full rounded-3xl p-6">
                    <p className="font-mono text-xs text-brand-hi">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-on-ink-muted">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Prototype */}
        <section id="prototype" className="section-y" aria-labelledby="proto-h">
          <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Our prototype</Eyebrow>
              <H2 id="proto-h">Say what you want. Approve what it plans.</H2>
              <p className="mt-6 max-w-[56ch] text-lg leading-8 text-muted">
                The prototype is a clickable Figma wireframe backed by a small FastAPI service that turns one sentence into a structured workflow plan. It demonstrates the central idea: you state the goal, and you approve what the system proposes before it acts.
              </p>
              <ul className="mt-6 space-y-3">
                {['Conversation screen: type a request in plain English', 'Generated plan with trigger, data source, action and approval gate', 'Approve, edit or cancel controls', 'Run history and an approval inbox for sensitive actions', 'Two sample templates: weekly fee reminder, new enquiry capture'].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-7"><Check className="mt-1 shrink-0 text-brand" size={18} />{t}</li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-line bg-mist p-4 text-sm leading-6 text-muted">
                <strong className="text-text">Honest scope:</strong> the prototype uses sample data. Live WhatsApp and payment connections, billing and multi-user roles are future versions.
              </p>
            </Reveal>
            <Reveal delay={0.1}><PrototypeDemo /></Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-y bg-mist" aria-labelledby="svc-h">
          <div className="container-x">
            <Reveal>
              <Eyebrow>What ARM Tech offers</Eyebrow>
              <H2 id="svc-h" className="max-w-3xl">One product, built for how Indian businesses actually work.</H2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => {
                const Icon = icons[s.icon];
                return (
                  <Reveal key={s.title} delay={(i % 3) * 0.06}>
                    <SpotCard className="h-full p-7">
                      <div className="flex items-center justify-between">
                        <span className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon size={22} /></span>
                        <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">{s.tag}</span>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-[15px] leading-7 text-muted">{s.body}</p>
                    </SpotCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust and architecture */}
        <section id="how" className="on-ink section-y relative overflow-hidden bg-ink text-on-ink" aria-labelledby="how-h">
          <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
          <div className="container-x relative">
            <Reveal>
              <Eyebrow dark>How it is built</Eyebrow>
              <H2 id="how-h" className="max-w-4xl text-white">Safe by design: the model proposes, a person decides.</H2>
            </Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <Reveal>
                <ul className="space-y-3">
                  {safety.map((t) => (
                    <li key={t} className="card flex gap-3 rounded-2xl p-4 text-[15px] leading-7 text-on-ink">
                      <ShieldCheck className="mt-1 shrink-0 text-cyan-hi" size={18} />{t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="glass rounded-[28px] p-5 sm:p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-on-ink-muted">One workflow run</p>
                  <ol className="mt-5 space-y-0">
                    {architecture.map((a, i) => (
                      <li key={a.title} className="relative flex gap-4 pb-5 last:pb-0">
                        {i < architecture.length - 1 && <span aria-hidden className="absolute left-[17px] top-9 h-[calc(100%-28px)] w-px bg-gradient-to-b from-cyan-hi/60 to-transparent" />}
                        <span className={`grid size-9 shrink-0 place-items-center rounded-full font-mono text-xs ${a.title === 'Approval gate' ? 'bg-cyan-hi text-ink' : 'bg-white/10 text-on-ink'}`}>{i + 1}</span>
                        <div>
                          <p className="font-semibold">{a.title}</p>
                          <p className="text-sm text-on-ink-muted">{a.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
            <div className="marquee mt-14" aria-label="Technology stack">
              <div className="marquee-track gap-3">
                {[...stack, ...stack].map((s, i) => (
                  <span key={`${s}-${i}`} className="mr-3 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-sm text-on-ink-muted">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Validation */}
        <section id="validation" className="section-y" aria-labelledby="val-h">
          <div className="container-x">
            <Reveal>
              <Eyebrow>Validation</Eyebrow>
              <H2 id="val-h" className="max-w-4xl">We left the classroom and asked real owners.</H2>
              <p className="mt-5 max-w-[66ch] text-lg leading-8 text-muted">
                Five customer-discovery interviews (three in person, two virtual), then six prototype walkthroughs. Four of five rated the problem important, four were dissatisfied with their current approach, and three named a price they would pay. A sample of five cannot prove market size, and we do not claim it does.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {interviews.map((q, i) => (
                <Reveal key={q.id} delay={(i % 2) * 0.06}>
                  <figure className="card h-full rounded-3xl p-7">
                    <blockquote className="font-display text-xl font-medium leading-snug text-balance">&ldquo;{q.quote}&rdquo;</blockquote>
                    <figcaption className="mt-4 text-sm text-muted"><span className="font-mono text-brand">{q.id}</span> · {q.who}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <Reveal>
                <div className="card rounded-3xl p-7">
                  <h3 className="font-display text-xl font-semibold">Prototype ratings (out of 5)</h3>
                  <p className="mt-1 text-sm text-muted">Average clarity 4.0 · average trust 4.5 where the approval gate was shown.</p>
                  <ul className="mt-6 space-y-3" aria-label="Ratings by tester">
                    {ratings.map((r) => (
                      <li key={r.who} className="grid grid-cols-[110px_1fr_28px] items-center gap-3 text-sm">
                        <span className="text-muted">{r.who}<span className="block font-mono text-[11px] uppercase text-brand">{r.metric}</span></span>
                        <span className="h-3 overflow-hidden rounded-full bg-mist"><span className="block h-full rounded-full" style={{ width: `${(r.value / 5) * 100}%`, background: 'var(--grad-brand)' }} /></span>
                        <span className="text-right font-semibold">{r.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="card rounded-3xl p-7">
                  <h3 className="font-display text-xl font-semibold">What we changed because of it</h3>
                  <ul className="mt-5 space-y-5">
                    {learnings.map((l) => (
                      <li key={l.believed} className="text-[15px] leading-7">
                        <p className="text-muted line-through decoration-muted/40">{l.believed}</p>
                        <p>{l.learned}</p>
                        <p className="mt-1 font-semibold text-brand">→ {l.changed}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing and market */}
        <section id="pricing" className="section-y bg-mist" aria-labelledby="price-h">
          <div className="container-x">
            <Reveal>
              <Eyebrow>Pricing</Eyebrow>
              <H2 id="price-h" className="max-w-3xl">Rupee pricing, just under Rs 500 to start.</H2>
              <p className="mt-5 max-w-[62ch] text-lg leading-8 text-muted">Free two-week trial with one ready-made template. Monthly billing, cancel any time. Planned pricing, not yet live.</p>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {plans.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.06}>
                  <div className={p.featured ? 'on-ink relative h-full rounded-3xl bg-ink p-8 text-on-ink shadow-[0_30px_80px_-40px_rgba(8,22,49,0.6)]' : 'card h-full rounded-3xl p-8'}>
                    {p.featured && <span className="absolute right-6 top-6 rounded-full bg-cyan-hi px-3 py-1 font-mono text-[11px] font-medium uppercase text-ink">Most teams</span>}
                    <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                    <p className="mt-4"><span className="font-display text-4xl font-semibold">{p.price}</span> <span className={p.featured ? 'text-on-ink-muted' : 'text-muted'}>{p.per}</span></p>
                    <ul className="mt-6 space-y-3">
                      {p.points.map((t) => (
                        <li key={t} className="flex gap-3 text-[15px] leading-6"><Check className={p.featured ? 'mt-0.5 shrink-0 text-cyan-hi' : 'mt-0.5 shrink-0 text-brand'} size={18} />{t}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <Eyebrow>Market (bottom-up estimate)</Eyebrow>
                <div className="space-y-3">
                  {market.map((m) => (
                    <div key={m.label} className="rounded-2xl p-5 text-white" style={{ width: m.width, minWidth: 260, background: 'var(--grad-brand)' }}>
                      <p className="font-mono text-xs opacity-80">{m.label}</p>
                      <p className="font-display text-2xl font-semibold">{m.value} <span className="text-base font-normal opacity-80">per year</span></p>
                      <p className="mt-1 text-sm opacity-85">{m.sub}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 max-w-[60ch] text-sm leading-6 text-muted">The one-crore digitally-active figure is our own assumption and will be revisited with pilot conversion data.</p>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="card rounded-3xl p-7">
                  <h3 className="font-display text-xl font-semibold">Unit economics (model)</h3>
                  <dl className="mt-5 divide-y divide-line">
                    {unitEconomics.map((u) => (
                      <div key={u.k} className="flex items-center justify-between py-3 text-[15px]"><dt className="text-muted">{u.k}</dt><dd className="font-display font-semibold">{u.v}</dd></div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm leading-6 text-muted">Start-up cost Rs 2.5 lakh. Projected to turn a small profit in year 2.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Roadmap and pilot */}
        <section id="roadmap" className="section-y" aria-labelledby="road-h">
          <div className="container-x">
            <Reveal>
              <Eyebrow>Roadmap</Eyebrow>
              <H2 id="road-h" className="max-w-3xl">From a seven-day pilot to 150 paying customers.</H2>
            </Reveal>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {roadmap.map((r, i) => (
                <Reveal key={r.phase} delay={i * 0.06}>
                  <li className="card h-full rounded-3xl p-6">
                    <p className="font-mono text-xs text-brand">{r.when}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{r.phase}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-muted">{r.focus}</p>
                    <p className="mt-4 border-t border-line pt-4 text-sm font-semibold">Goal: {r.goal}</p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <Reveal>
                <div className="rounded-3xl bg-ink p-8 text-on-ink">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-hi">Next: the pilot</p>
                  <p className="mt-3 text-[15px] leading-7 text-on-ink-muted">{pilot.scope}</p>
                  <ul className="mt-5 space-y-2">
                    {pilot.targets.map((t) => <li key={t} className="flex gap-3 text-[15px]"><Check className="mt-0.5 shrink-0 text-cyan-hi" size={18} />{t}</li>)}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="card rounded-3xl p-8">
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-warn"><AlertTriangle size={14} /> What remains unproven</p>
                  <ul className="mt-4 space-y-2">
                    {pilot.risks.map((t) => <li key={t} className="text-[15px] leading-7 text-muted">· {t}</li>)}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="section-y bg-mist" aria-labelledby="team-h">
          <div className="container-x">
            <Reveal>
              <Eyebrow>The team</Eyebrow>
              <H2 id="team-h" className="max-w-3xl">Three second-year CSE students who watched family businesses lose evenings to spreadsheets.</H2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.06}>
                  <SpotCard className="h-full p-7">
                    <span className="grid size-14 place-items-center rounded-2xl font-display text-xl font-semibold text-white" style={{ background: 'var(--grad-brand)' }}>{m.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                    <h3 className="mt-5 font-display text-xl font-semibold">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand">{m.role}</p>
                    <p className="mt-3 text-[15px] leading-7 text-muted">{m.body}</p>
                  </SpotCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="on-ink relative overflow-hidden bg-ink py-20 text-on-ink md:py-28">
          <Aurora intensity={0.35} />
          <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
          <div className="container-x relative text-center">
            <Reveal>
              <H2 className="mx-auto max-w-3xl text-white">Want to be one of our three pilot businesses?</H2>
              <p className="mx-auto mt-5 max-w-[56ch] text-lg leading-8 text-on-ink-muted">We are looking for small businesses with recurring customer communication in Hyderabad. Follow the build, read the code, or get in touch.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={site.repo} variant="light"><Code size={18} /> View on GitHub</Button>
                <Button href="#prototype" variant="ghost-dark">Replay the demo</Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="spectrum-line" />
        <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arm-tech-logo.webp" alt="ARM Tech" width={120} height={120} className="h-20 w-auto mix-blend-multiply" />
          </div>
          <p className="max-w-[60ch] text-sm leading-6 text-muted">
            ARM Tech is a student venture developed through the Wadhwani Ignite Lite programme at the Centre for Entrepreneurship and Innovation, Sreenidhi Institute of Science and Technology, Hyderabad. Figures marked as estimates or projections are from our venture report and have not been validated at scale.
          </p>
        </div>
        <div className="border-t border-line py-4 text-center text-xs text-muted">© 2026 ARM Tech. {site.tagline}</div>
      </footer>
    </>
  );
}
