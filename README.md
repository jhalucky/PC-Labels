# PC Labels - Professional Label Printing Website

A modern, responsive website for PC Labels, a professional printing company specializing in labels, ribbons, hangtags, and custom printing services.

## Features

- **Home Section**: Hero section with compelling introduction and call-to-action buttons
- **Services Section**: Showcase of all products including:
  - Size Labels
  - Woven Labels
  - Washcare Labels
  - Ribbons
  - Hangtags
  - Custom Printing
- **About Section**: Company information with printing machine image
- **Testimonials Section**: Customer reviews and feedback
- **Contact Form**: Working contact form with validation
- **Footer**: Comprehensive footer with links and contact information
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Beautiful, professional design with Tailwind CSS

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
pclabels/
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── HomeSection.tsx     # Hero/home section
│   ├── ServicesSection.tsx # Services/products showcase
│   ├── AboutSection.tsx    # About company section
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Footer component
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

- Replace placeholder images with actual product images
- Update contact information in Footer and ContactSection
- Modify testimonials with real customer reviews
- Customize colors in `tailwind.config.ts`
- Update company information in AboutSection

## License

This project is created for PC Labels.


