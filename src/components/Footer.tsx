import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] border-t border-[#334155] py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#06b6d4] flex items-center justify-center text-[#0f1720] font-bold text-xl">P</div>
              <span className="text-white font-bold text-lg">PDT <span className="text-[#06b6d4]">Softwares</span></span>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Technology that turns your ideas into digital solutions. Based in Mombasa, Kenya.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><Link href="/about" className="hover:text-[#06b6d4]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#06b6d4]">Services</Link></li>
              <li><Link href="/products" className="hover:text-[#06b6d4]">Products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><a href="https://wa.me/254700000000" target="_blank" className="hover:text-[#06b6d4]">WhatsApp Us</a></li>
              <li><a href="mailto:info@pdtsoftwares.co.ke" className="hover:text-[#06b6d4]">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#334155] pt-8 text-center text-sm text-[#94a3b8]">
          &copy; {new Date().getFullYear()} PDT Softwares. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
