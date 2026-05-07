# CloudCanvas | Enterprise Cloud Infrastructure Platform

CloudCanvas is a high-performance, modern web application designed for elite cloud infrastructure providers. Built with the latest Next.js 15 App Router architecture, it features a sophisticated UI/UX that emphasizes scalability, security, and real-time performance.

## 🚀 Project Overview

The application serves as a comprehensive landing page and lead generation platform for enterprise cloud services. It combines high-impact visual design with technical robustness, featuring live data visualizations and dynamic content sections.

### Key Features

- **Dynamic Hero Section**: Features animated "industrial-grade" typography with slide-in effects and a live traffic activity monitor built with Recharts.
- **Enterprise Ecosystem**: A modular showcase of core products including Compute Engines, Cloud Storage, and Security Meshes.
- **Dynamic Testimonials**: A progress-based testimonial carousel that builds trust through customer success stories.
- **Infinite Partner Marquee**: A custom-built, high-performance scrolling marquee for strategic partnership visibility.
- **Lead Generation**: A fully validated consultation request system using React Hook Form and Zod.
- **AI-Ready Core**: Pre-configured with Genkit for implementing advanced Generative AI flows.
- **Responsive & Accessible**: Mobile-first design using ShadCN UI components and Radix UI primitives.

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: [Genkit 1.x](https://firebase.google.com/docs/genkit)
- **Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 📂 Project Structure

- `src/app`: Next.js App Router pages and global styles.
- `src/components/sections`: Feature-specific UI components (Hero, Testimonials, etc.).
- `src/components/layout`: Shared layout elements like Navbar and Footer.
- `src/components/ui`: Low-level ShadCN UI atomic components.
- `src/ai`: Genkit configuration and AI flow definitions.
- `src/lib`: Shared utility functions and placeholder data providers.
- `src/hooks`: Custom React hooks for UI state management (Toasts, Mobile detection).

## 🏁 Getting Started

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:9002](http://localhost:9002) in your browser.

## 🤖 AI Development

The project is integrated with Google Generative AI via Genkit. You can start the Genkit developer UI to test and debug AI flows:

```bash
npm run genkit:dev
```

---
Built with Firebase Studio!


<img src="https://static.scarf.sh/a.png?x-pxid=0b994c4e-62ce-47f6-8af6-27235e610eec" width="0" height="0" alt="" />


<img src="https://omni-dash-five.vercel.app/api/track?project=CloudCanvas&source=github-readme" width="0" height="0" alt="" />
