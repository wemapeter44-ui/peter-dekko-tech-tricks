"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "2547XXXXXXXX";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(
        "Hello PDT Softwares! I would like to know more about your services."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PDT Softwares on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/20 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-green-500/40"
    >
      <MessageCircle size={22} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
