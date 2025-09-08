import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseXPct * 20);
    mouseY.set(mouseYPct * 20);
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typewriter effect
  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0"
      >
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-black">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')",
              x: mouseXSpring,
              y: mouseYSpring
            }}
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-800/60 to-dark-900/90" />
          
          {/* Cinematic borders */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Floating particles with physics */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Light beams */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-2 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent rotate-45 blur-sm"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            x: [-100, 100, -100]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-gold-400 text-lg md:text-xl font-medium tracking-[0.3em] uppercase">
            Shambhu Production House
          </span>
        </motion.div>

        {/* Main Heading with Typewriter Effect */}
        <motion.div
          variants={typewriterVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tight">
            <motion.div className="overflow-hidden">
              <motion.span 
                className="block text-cream"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                VISIONARIES
              </motion.span>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.span 
                className="block text-gold-400 italic"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                of Visual
              </motion.span>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.span 
                className="block text-gradient bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-400 bg-clip-text text-transparent"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                STORYTELLING
              </motion.span>
            </motion.div>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light"
        >
          We push the boundaries of{' '}
          <motion.span 
            className="text-gold-400 font-medium"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            filmmaking
          </motion.span>
          , television, and digital media to create extraordinary visual experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
        >
          <motion.button 
            onClick={() => scrollToSection('#portfolio')}
            className="group relative overflow-hidden bg-gold-400 text-dark-900 px-12 py-6 text-lg font-bold rounded-xl transform transition-all duration-500"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(245, 180, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Our Work</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('#contact')}
            className="group relative overflow-hidden border-2 border-gold-400 text-gold-400 px-12 py-6 text-lg font-bold rounded-xl backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#fff"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-dark-900 transition-colors duration-300">Get in Touch</span>
            <motion.div 
              className="absolute inset-0 bg-gold-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => scrollToSection('#about')}
          whileHover={{ scale: 1.1 }}
        >
          <motion.span 
            className="text-gold-400 text-sm font-bold mb-4 tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to Explore
          </motion.span>
          <motion.div 
            className="w-8 h-14 border-2 border-gold-400 rounded-full flex justify-center relative overflow-hidden"
            whileHover={{ borderColor: "#fff" }}
          >
            <motion.div 
              className="w-1 h-4 bg-gold-400 rounded-full mt-3"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-gold-400/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-gold-400/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.7, duration: 1 }}
      />

      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/3 left-16 w-24 h-24 border border-gold-400/20 rounded-full hidden lg:block"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-20 w-16 h-16 bg-gold-400/10 rounded-full hidden lg:block backdrop-blur-sm"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;
