export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Core Services</h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">We deliver practical technology solutions designed around your specific needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Web Development", desc: "Fast, responsive, and secure websites built with modern frameworks." },
            { title: "Custom Software", desc: "Tailor-made software that solves specific business challenges." },
            { title: "Business Automation", desc: "Streamline your operations with intelligent system integrations." }
          ].map((service, i) => (
            <div key={i} className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#06b6d4] transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
