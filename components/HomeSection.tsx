import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home" className="pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Professional</span>{" "}
              <span className="text-gray-900 dark:text-white">Label Printing Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              PC Labels delivers high-quality printing solutions for all your labeling needs. 
              From size labels to woven labels, washcare labels, ribbons, and hangtags - 
              we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#services"
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70"
              >
                Our Services
              </Link>
              <Link
                href="#contact"
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-500/10 transition backdrop-blur-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-gray-900/80 to-transparent z-10"></div>
            <Image
              src="/focusprintingmachine.jpg"
              alt="Label printing machine"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

