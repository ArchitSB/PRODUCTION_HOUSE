# Shambhu Production House

A premium cinematic production house website built with React, Vite, and Tailwind CSS.

## 🎬 Features

- **Cinematic Design**: Professional, movie-industry inspired design
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for lightning-fast loading
- **Modern Stack**: React 19, Tailwind CSS 3, and modern web technologies

## 🚀 Live Demo

Visit the live website: [Your Vercel URL will appear here after deployment]

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 12
- **Deployment**: Vercel
- **Build Tool**: Vite with optimized production builds

## 📦 Installation & Development

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd PRODUCTION_HOUSE/frontend-ui
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

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment to Vercel

### Quick Deploy
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy with one command:
   ```bash
   npm run deploy
   ```

### Manual Deploy
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with default settings

## 🎯 Performance Optimizations

- **Code Splitting**: Vendor and animation libraries are split into separate chunks
- **Image Optimization**: All images are optimized for web
- **Minification**: Production builds are minified and compressed
- **Caching**: Static assets are cached for optimal performance
- **Tree Shaking**: Unused code is eliminated from the final build

## 📁 Project Structure

```
frontend-ui/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/          # Images and media
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── vercel.json          # Vercel configuration
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Components

- **Navbar**: Responsive navigation with scroll effects
- **Hero**: Cinematic hero section with parallax animations
- **About**: Company introduction with animated content
- **Services**: Service showcase with interactive cards
- **Portfolio**: Project gallery with filtering and animations
- **Contact**: Contact form and company information
- **Footer**: Site footer with links and branding

## 🔧 Environment Variables

No environment variables required for basic deployment. The app uses:
- Static assets from `public/` directory
- External images from Unsplash (production-ready URLs)

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact [your-email@domain.com]

---

Built with ❤️ by Shambhu Production House+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
