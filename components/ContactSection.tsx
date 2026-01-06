"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a question or ready to start your next printing project? Contact us today!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Tell us about your printing needs..."
              />
            </div>
            
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-900/30 text-green-400 border border-green-500/30"
                    : "bg-red-900/30 text-red-400 border border-red-500/30"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition shadow-lg shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-effect p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 transition">
              <div className="text-2xl font-display font-bold gradient-text mb-2">Email</div>
              <a
                href="mailto:info@pclabels.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition block"
              >
                info@pclabels.com
              </a>
            </div>
            <div className="glass-effect p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 transition">
              <div className="text-2xl font-display font-bold gradient-text mb-2">Phone</div>
              <a
                href="tel:+919871088867"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition block"
              >
                +91 9871088867
              </a>
            </div>
            <div className="glass-effect p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 transition">
              <div className="text-2xl font-display font-bold gradient-text mb-2">Hours</div>
              <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

