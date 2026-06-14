# Soumya Gupta - AI & Data Science Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: AI/Data Science inspired design with neural network aesthetics
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Theme switching with persistent preferences
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Ready**: Proper meta tags, Open Graph, and structured data
- **Accessible**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, About, Projects, Contact
│   └── ui/             # shadcn/ui components
├── data/               # Project data, skills, certificates
├── assets/             # Images and static assets
└── pages/              # Main pages
```

## 🎨 Design System

The portfolio uses a cohesive design system defined in:
- `src/index.css` - CSS custom properties and utilities
- `tailwind.config.ts` - Tailwind theme configuration

### Color Palette
- **Primary**: Neural network blue (`hsl(217 71% 53%)`)
- **Accent**: Electric AI accent (`hsl(168 76% 42%)`)
- **Secondary**: Deep tech (`hsl(215 28% 17%)`)

## 📝 Content Management

### Adding Projects
Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: "unique-id",
  title: "Project Name",
  description: "Brief description",
  tech: ["React", "TypeScript", "Node.js"],
  liveUrl: "https://...",
  sourceUrl: "https://github.com/...",
  featured: true
}
```

### Adding Skills
Edit `src/data/skills.ts` to add new skills with categories and proficiency levels.

### Adding Certificates
Edit `src/data/certificates.ts` to add new certifications.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd soumya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📊 Customization

### Personal Information
1. Update personal details in `src/data/` files
2. Replace profile image in `src/assets/profile.jpg`
3. Replace logo in `src/assets/logo.png`
4. Update resume PDF in `public/Resume.pdf`

### Contact Form
The contact form currently uses a mock submission. To integrate with a real service:

1. **Using Resend** (Recommended):
   ```typescript
   // Add environment variable: VITE_RESEND_API_KEY
   // Implement API route for form submission
   ```

2. **Using Formspree**:
   ```typescript
   // Add environment variable: VITE_FORMSPREE_ENDPOINT
   // Update form action in Contact component
   ```

### Social Links
Update social media links in `src/components/layout/Footer.tsx`.

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with default settings

### Other Platforms
The built assets in `dist/` folder can be deployed to any static hosting service.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Designed by Soumya Gupta**#
