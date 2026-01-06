const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Fashion Forward Apparel",
    content: "PC Labels has been our go-to printing partner for years. Their woven labels are exceptional quality and always delivered on time. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Urban Threads",
    content: "The washcare labels we ordered were exactly what we needed. Durable, clear, and professional. Great service and competitive pricing.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Boutique Essentials",
    content: "We've used PC Labels for all our hangtags and ribbons. The quality is outstanding and their team is always helpful with design suggestions.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Premium Garments Co.",
    content: "Fast turnaround, excellent quality, and great customer service. PC Labels understands our needs and delivers consistently.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    company: "Style & Co.",
    content: "The size labels we received were perfect. Great attention to detail and the printing quality is top-notch. Will definitely order again!",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    company: "Modern Wear",
    content: "PC Labels exceeded our expectations. Their custom printing services helped us create unique labels that perfectly represent our brand.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-effect p-6 rounded-lg hover:border-primary-500/50 transition duration-300 group"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

