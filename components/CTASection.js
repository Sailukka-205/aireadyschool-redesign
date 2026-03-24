import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-indigo-600">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
          Ready to bring AI to your school?
        </h2>
        <p className="text-indigo-200 text-lg mb-10">
          Book a free 30-minute demo and see exactly how AI Ready School works
          for your institution.
        </p>
        <Link
          href="mailto:hello@aireadyschool.com"
          className="inline-block bg-white text-indigo-600 font-semibold px-10 py-4 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
        >
          Book a Free Demo
        </Link>
      </div>
    </section>
  );
}
