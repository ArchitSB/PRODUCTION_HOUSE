import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "50+", label: "Projects Completed", delay: 0.2 },
    { number: "10+", label: "Years Experience", delay: 0.4 },
    { number: "25+", label: "Industry Awards", delay: 0.6 },
    { number: "100%", label: "Client Satisfaction", delay: 0.8 },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-400 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500 rounded-full filter blur-[150px] opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-4 md:mb-6">
            About <span className="text-gold-400">Shambhu Group</span>
          </h2>
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Crafting cinematic excellence through innovative storytelling and cutting-edge production.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                Established as a beacon of creative excellence, <strong className="text-gold-400 font-semibold">Shambhu Group</strong> has redefined the landscape of visual storytelling. Our journey began with a simple yet powerful vision: to transform stories into unforgettable cinematic experiences.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                From intimate documentaries to grand theatrical productions, we bring together world-class talent, state-of-the-art technology, and an unwavering commitment to artistic integrity. Every project we undertake is a testament to our dedication to pushing creative boundaries.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Our multidisciplinary approach encompasses film production, television content creation, digital media innovation, and creative consulting. We don't just make content—we craft experiences that resonate, inspire, and endure.
              </p>
            </div>

            {/* Key Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12"
            >
              <div className="text-center p-4 md:p-6 bg-dark-800/50 rounded-xl backdrop-blur-sm border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-dark-800/50 rounded-xl backdrop-blur-sm border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-2">10+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-dark-800/50 rounded-xl backdrop-blur-sm border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-2">25+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Awards Won</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gold-400/20 to-dark-800/20 backdrop-blur-sm border border-gold-400/30">
              {/* Placeholder for company image/video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-400/30"
                >
                  🎬
                </motion.div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-cream mb-2">
                  Where Vision Meets Reality
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  State-of-the-art production facilities and creative studios
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gold-400/20 rounded-full backdrop-blur-sm border border-gold-400/30"
            ></motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gold-400/10 rounded-full backdrop-blur-sm border border-gold-400/20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
