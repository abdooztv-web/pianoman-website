"use client";

import { useState } from "react";

const services = [
  "Piano Rental",
  "Home Visit & Tuning",
  "Piano Restoration",
  "General Enquiry",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call when deploying
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left — Info */}
          <div>
            <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-6">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Let's talk about your piano
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Whether you're looking to rent, need a home visit, or have a piano that
              needs restoring — we'd love to hear from you. Reach out and we'll get back
              to you within 24 hours.
            </p>

            <div className="flex flex-col gap-8">
              {[
                {
                  label: "Email",
                  value: "abdooztv@gmail.com",
                  href: "mailto:abdooztv@gmail.com",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Phone",
                  value: "01555 001 233",
                  href: "tel:01555001233",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  label: "Website",
                  value: "pianoman-eg.com",
                  href: "https://pianoman-eg.com",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                },
                {
                  label: "Location",
                  value: "Cairo, Egypt",
                  href: "#",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#8C1A2B]/10 flex items-center justify-center text-[#8C1A2B] flex-shrink-0 group-hover:bg-[#8C1A2B] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-gray-800 font-medium group-hover:text-[#8C1A2B] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-20 border border-gray-100 px-8">
                <div className="w-16 h-16 bg-[#8C1A2B]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#8C1A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent</h3>
                <p className="text-gray-600 max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="text-[#8C1A2B] font-bold text-sm uppercase tracking-wider border-b-2 border-[#8C1A2B] pb-0.5"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8C1A2B] transition-colors bg-[#FAF8F5]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your number"
                      className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8C1A2B] transition-colors bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8C1A2B] transition-colors bg-[#FAF8F5]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#8C1A2B] transition-colors bg-[#FAF8F5] appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your piano and what you need..."
                    rows={5}
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8C1A2B] transition-colors bg-[#FAF8F5] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-sm py-4 hover:bg-[#6B1221] transition-colors disabled:opacity-60 mt-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
