import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Size Labels",
    description: "Professional size labels for clothing and apparel. Available in various materials and finishes to match your brand requirements.",
    image: "/images/sizelabels.png",
  },
  {
    id: 2,
    title: "Woven Labels",
    description: "Premium woven labels with custom designs, colors, and text. Perfect for adding a professional touch to your garments.",
    image: "/images/wovenlabels.png",
  },
  {
    id: 3,
    title: "Washcare Labels",
    description: "Durable washcare labels that withstand multiple washes. Clear instructions and symbols for proper garment care.",
    image: "/images/washcarelabels.png",
  },
  {
    id: 4,
    title: "Ribbons",
    description: "Custom printed ribbons for packaging, gifts, and promotional purposes. Available in various widths and materials.",
    image: "/images/ribbons.png",
  },
  {
    id: 5,
    title: "Hangtags",
    description: "Eye-catching hangtags that showcase your brand. Custom designs with your logo, product information, and branding.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
  },
  {
    id: 6,
    title: "Custom Printing",
    description: "Complete printing solutions for all your labeling needs. From design to production, we handle everything with precision.",
    image: "/images/customprinting.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of printing services to meet all your labeling needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-effect rounded-lg overflow-hidden hover:border-primary-500/50 transition duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-white/50 dark:via-gray-900/50 to-transparent z-10"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-400 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

