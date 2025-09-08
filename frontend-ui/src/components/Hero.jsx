import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/70 to-dark-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
          }}
        ></div>
        {/* Animated particles overlay */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="block text-cream">Visionaries</span>
            <span className="block text-gold-400">of Visual</span>
            <span className="block text-gradient">Storytelling</span>
          </motion.h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          We push the boundaries of filmmaking, television, and digital media to create 
          extraordinary visual experiences that captivate audiences worldwide.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button 
            onClick={() => scrollToSection('#portfolio')}
            className="btn-primary text-lg px-12 py-6"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(245, 180, 0, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary text-lg px-12 py-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <span className="text-gold-400 text-sm font-medium mb-3 tracking-wider">SCROLL DOWN</span>
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-gold-400/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-16 w-16 h-16 border border-gold-400/30 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
