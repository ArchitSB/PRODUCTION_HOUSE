import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Film Production',
    'Post-Production', 
    'VFX & Animation',
    'Commercial Work',
    'Documentary Films'
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Vimeo', icon: '🎬', href: '#' }
  ];

  return (
    <footer className="bg-dark-900 border-t border-gold-400/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <img 
                  src="/Shambhu Logo-01.png" 
                  alt="Shambhu Group Logo" 
                  className="h-8 md:h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-cream">
                    Shambhu Group
                  </h3>
                  <p className="text-xs md:text-sm text-gold-400 font-medium">
                    Visionaries of Visual Storytelling
                  </p>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6 max-w-md">
                Transforming stories into unforgettable cinematic experiences through innovative 
                filmmaking, cutting-edge technology, and unparalleled creative vision.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 md:w-12 md:h-12 bg-dark-800 hover:bg-gold-400/20 border border-gold-400/20 hover:border-gold-400/40 rounded-lg flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-lg md:text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg md:text-xl font-semibold text-cream mb-4 md:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a 
                      href={link.href}
                      className="text-sm md:text-base text-gray-400 hover:text-gold-400 transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg md:text-xl font-semibold text-cream mb-4 md:mb-6">
                Services
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-sm md:text-base text-gray-400">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-dark-800/50 backdrop-blur-sm border border-gold-400/20 rounded-2xl p-6 md:p-8 mb-8 md:mb-12"
        >
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg md:text-xl font-semibold text-cream mb-2">
                Stay Updated
              </h4>
              <p className="text-sm md:text-base text-gray-400">
                Get the latest news about our projects and industry insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:w-auto md:flex-shrink-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 md:py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-cream placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 text-sm md:text-base"
              />
              <motion.button
                className="px-4 md:px-6 py-2.5 md:py-3 bg-gold-400 text-dark-900 font-semibold rounded-lg hover:bg-gold-500 transition-all duration-300 text-sm md:text-base whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 md:pt-8 border-t border-gold-400/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              © 2024 Shambhu Group. All rights reserved. Crafted with passion for visual storytelling.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
