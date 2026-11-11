import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06b6d4] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#1e293b] border border-[#334155] text-[#06b6d4] text-sm font-semibold mb-6">PDT SOFTWARES</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Technology that turns your ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-blue-500">digital solutions.</span>
            </h1>
            <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed max-w-xl">
              We build professional websites, custom software, business management systems, and automation tools for businesses, schools, and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex justify-center items-center rounded-lg bg-[#06b6d4] px-6 py-3 text-sm font-semibold text-[#0f1720] hover:bg-[#0891b2] transition-colors">Discuss Your Project</Link>
              <Link href="/services" className="inline-flex justify-center items-center rounded-lg border border-[#334155] bg-[#1e293b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#334155] transition-colors">Explore Our Services</Link>
            </div>
          </div>
          <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-sm font-bold text-[#06b6d4] tracking-wider mb-6 uppercase">What We Build</h2>
            <div className="space-y-6">
              {[
                { title: "Websites", desc: "Professional sites for businesses, schools and individuals." },
                { title: "Software", desc: "Custom software built around the way you work." },
                { title: "Business Systems", desc: "Management systems and automation tools." },
                { title: "Technical Support", desc: "Practical help when technology gets in the way." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#0f1720] border border-[#334155] flex items-center justify-center flex-shrink-0 text-[#06b6d4]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-sm text-[#94a3b8] mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#334155] flex items-center text-sm text-[#94a3b8]">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Based in Mombasa, Kenya
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
