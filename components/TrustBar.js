export default function TrustBar() {
  const schools = [
    "Delhi Public School",
    "Ryan International",
    "Podar World School",
    "Amity Global",
    "Narayana Group",
  ];

  return (
    <section className="py-10 border-y border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6 font-medium">
          Trusted by leading schools across India
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {schools.map((school) => (
            <span
              key={school}
              className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {school}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
