export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="text-white font-semibold text-sm">
              AI Ready School
            </span>
          </div>
          <p className="text-sm max-w-xs leading-relaxed">
            India's first complete AI ecosystem for schools.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="text-white text-sm font-semibold mb-3">Products</p>
            {["Cypher", "Morpheus", "Zion", "NEO", "Matrix"].map((p) => (
              <p
                key={p}
                className="text-sm mb-2 hover:text-white transition-colors cursor-pointer"
              >
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-3">Company</p>
            {["About", "Schools", "Contact", "Privacy"].map((p) => (
              <p
                key={p}
                className="text-sm mb-2 hover:text-white transition-colors cursor-pointer"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs text-center">
        © {new Date().getFullYear()} AI Ready School. All rights reserved.
      </div>
    </footer>
  );
}
