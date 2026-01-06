import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">PC Labels</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in professional label printing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group">
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-gray-900/90 via-white/50 dark:via-gray-900/50 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
              alt="Focus printing machine at PC Labels"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
              Excellence in <span className="gradient-text">Every Print</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              PC Labels has been a leading provider of professional printing services 
              for over a decade. We specialize in creating high-quality labels, tags, 
              and printing solutions for businesses of all sizes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our state-of-the-art Focus printing machines ensure precision and 
              consistency in every print job. We combine cutting-edge technology 
              with expert craftsmanship to deliver products that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From small batch orders to large-scale production runs, we handle 
              every project with the same level of care and attention to detail. 
              Our team is committed to providing exceptional service, competitive 
              pricing, and fast turnaround times.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 glass-effect rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition">
                <div className="text-4xl font-display font-bold gradient-text">10+</div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-lg border border-accent-500/20 hover:border-accent-500/50 transition">
                <div className="text-4xl font-display font-bold gradient-text">1000+</div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

