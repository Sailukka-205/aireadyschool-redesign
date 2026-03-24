import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-indigo-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <span className="text-indigo-700 text-xs font-medium tracking-wide">
              India's first complete AI ecosystem for schools
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Smart Learning For <br />
            <span className="text-indigo-600">A Smart Future.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
            AI Ready School gives your teachers, students, and administrators
            the tools to adopt AI confidently — without starting from scratch.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors text-center"
            >
              Book a Free Demo
            </Link>
            <Link
              href="#products"
              className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors text-center"
            >
              See How It Works
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-14">
            {[
              { value: "500+", label: "Schools onboarded" },
              { value: "1.2L+", label: "Students learning" },
              { value: "5", label: "AI-powered products" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
