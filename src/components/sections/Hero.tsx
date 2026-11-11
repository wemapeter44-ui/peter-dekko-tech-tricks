import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Globe, Code2, LayoutDashboard, Wrench, MapPin, MoveUpRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";

const offerings = [
  { title: "Websites", text: "Professional digital homes for growing brands.", Icon: Globe },
  { title: "Custom software", text: "Useful tools designed around your workflow.", Icon: Code2 },
  { title: "Business systems", text: "Dashboards, portals and smarter operations.", Icon: LayoutDashboard },
  { title: "Technical support", text: "Practical help to keep your tech moving.", Icon: Wrench },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute -right-32 top-0 h-[35rem] w-[35rem] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[.16] [background-image:linear-gradient(rgba(148,180,220,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,180,220,.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="absolute left-1/2 top-16 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-cyan-200/[.08]" />
        <div className="absolute left-1/2 top-28 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full border border-blue-200/[.08]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/[.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,.08)] sm:text-xs">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" /></span>
              <Sparkles size={13} /> Peter Dekko Tech Tricks
            </div>

            <h1 className="max-w-3xl text-[2.75rem] font-semibold leading-[1.04] tracking-[-.055em] text-white sm:text-6xl lg:text-[4.4rem]">
              We turn ambitious ideas into <span className="gradient-text">digital experiences.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Websites, custom software and business systems built to help people work smarter, serve customers better and grow with confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary group min-h-14 px-6">Discuss your project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/projects" className="btn-secondary min-h-14 px-6">Explore our work <MoveUpRight size={16} /></Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs font-medium text-slate-400 sm:text-sm">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-cyan-300" /> Practical, purpose-built solutions</span>
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-300" /> {site.location}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/20 blur-3xl" />
            <div className="surface glow relative p-3 sm:p-4">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4 pt-2">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" /></div>
                <span className="font-mono text-[10px] tracking-widest text-slate-500">PDT / DIGITAL STUDIO</span>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              </div>
              <div className="relative mt-3 overflow-hidden rounded-[19px] border border-white/10 bg-[#081426]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(48,143,255,.22),transparent_35%),radial-gradient(circle_at_25%_85%,rgba(34,211,238,.12),transparent_38%)]" />
                <div className="relative p-5 sm:p-7">
                  <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-200">The digital workspace</span><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[9px] font-semibold text-emerald-200">BUILT FOR GROWTH</span></div>
                  <div className="mt-8 grid grid-cols-[1fr_1.15fr] gap-3">
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[.045] p-4"><div className="mb-4 h-2 w-12 rounded bg-cyan-300/70" /><div className="h-2 w-4/5 rounded bg-white/20" /><div className="mt-2 h-2 w-3/5 rounded bg-white/10" /><div className="mt-5 flex items-end gap-1.5"><span className="h-7 w-2 rounded-t bg-blue-400/70" /><span className="h-10 w-2 rounded-t bg-cyan-300/80" /><span className="h-6 w-2 rounded-t bg-blue-400/60" /><span className="h-12 w-2 rounded-t bg-cyan-200" /><span className="h-9 w-2 rounded-t bg-blue-400/80" /></div></div>
                      <div className="rounded-2xl border border-white/10 bg-white/[.045] p-4"><div className="h-2 w-16 rounded bg-white/30" /><div className="mt-3 flex items-center gap-2"><span className="h-7 w-7 rounded-lg bg-violet-400/20" /><span className="h-2 w-20 rounded bg-white/15" /></div></div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="relative flex-1 overflow-hidden rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-blue-500/25 via-cyan-400/10 to-violet-500/20 p-4"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-cyan-100/20" /><div className="absolute -right-3 top-0 h-24 w-24 rounded-full border border-blue-100/20" /><div className="relative mt-4 grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_0_35px_rgba(81,190,255,.2)]"><Image src="/logo.jpeg" alt="PDT brand mark" width={48} height={48} className="rounded-xl object-cover" /></div><p className="relative mt-6 text-lg font-semibold leading-tight text-white">Ideas, engineered for impact.</p><p className="relative mt-2 text-[10px] leading-5 text-blue-100/70">Thoughtful design. Useful technology. Real-world value.</p></div>
                      <div className="grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/[.045] p-3"><Code2 size={17} className="text-cyan-200" /><p className="mt-3 text-[10px] text-slate-400">Development</p><p className="mt-1 text-xs font-semibold text-white">Built to scale</p></div><div className="rounded-2xl border border-white/10 bg-white/[.045] p-3"><LayoutDashboard size={17} className="text-blue-200" /><p className="mt-3 text-[10px] text-slate-400">Digital systems</p><p className="mt-1 text-xs font-semibold text-white">Made practical</p></div></div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[.035] px-4 py-3"><span className="text-[10px] text-slate-400">From concept to launch</span><span className="inline-flex items-center gap-2 text-[10px] font-semibold text-cyan-200">Explore PDT <ArrowRight size={12} /></span></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 p-1 pt-4 sm:grid-cols-4">
                {offerings.map(({ title, Icon }) => <div key={title} className="flex items-center gap-2 rounded-xl border border-white/[.07] bg-white/[.025] px-2.5 py-3"><Icon size={15} className="shrink-0 text-cyan-200" /><span className="text-[10px] font-medium text-slate-300">{title}</span></div>)}
              </div>
            </div>
            <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-cyan-200/20 bg-[#10233b]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"><p className="text-[9px] font-bold uppercase tracking-widest text-cyan-200">Digital first</p><p className="mt-1 text-xs font-semibold text-white">Built around your goals</p></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
