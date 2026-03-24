const products = [
  {
    name: "Cypher",
    tag: "For Students",
    description:
      "An AI learning companion that adapts to each student’s pace, style, and syllabus.",
    color: "bg-violet-50 border-violet-100",
    accent: "text-violet-600",
    dot: "bg-violet-500",
  },
  {
    name: "Morpheus",
    tag: "For Teachers",
    description:
      "Plan lessons, generate assessments, and reduce workload with AI assistance.",
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-600",
    dot: "bg-blue-500",
  },
  {
    name: "Zion",
    tag: "AI Tools",
    description:
      "A ready-to-use suite of AI tools that can be deployed across departments instantly.",
    color: "bg-cyan-50 border-cyan-100",
    accent: "text-cyan-600",
    dot: "bg-cyan-500",
  },
  {
    name: "NEO",
    tag: "Innovation Lab",
    description:
      "A hands-on AI lab where students can build, experiment, and innovate.",
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-600",
    dot: "bg-emerald-500",
  },
  {
    name: "Matrix",
    tag: "School Infrastructure",
    description:
      "The secure backbone that connects everything — scalable and built for schools.",
    color: "bg-orange-50 border-orange-100",
    accent: "text-orange-600",
    dot: "bg-orange-500",
  },
];

export default function ProductCards() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
            The Platform
          </p>

          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            One platform for your entire school.
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl">
            From student learning to teacher support to school-wide
            infrastructure — everything works together in one system.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className={`border rounded-2xl p-7 ${p.color} hover:shadow-md transition-shadow cursor-pointer`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${p.dot}`}></div>
                <span
                  className={`text-xs font-semibold uppercase tracking-widest ${p.accent}`}
                >
                  {p.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
