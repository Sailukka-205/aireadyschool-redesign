const testimonials = [
  {
    quote:
      "AI Ready School helped us move from curiosity to actual implementation in under a term. Our teachers love Morpheus.",
    name: "Priya Menon",
    role: "Principal, Delhi Public School",
    initials: "PM",
  },
  {
    quote:
      "Cypher has transformed how our students approach self-study. It's like every child now has a personal tutor.",
    name: "Arvind Sharma",
    role: "Head of Academics, Ryan International",
    initials: "AS",
  },
  {
    quote:
      "The onboarding was seamless and the support team genuinely understands how schools work.",
    name: "Sunita Rao",
    role: "Director, Podar World School",
    initials: "SR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
            What schools say
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Trusted by educators who've seen it work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-700 text-xs font-bold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
