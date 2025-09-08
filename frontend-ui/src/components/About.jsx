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
    <section id="about" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-gold-400 to-transparent"></div>
      </div>

      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Video Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1489598843152-c2d4b6500392?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Film Production Behind the Scenes" 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/60 via-transparent to-gold-400/20"></div>
              
              {/* Play button overlay */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 bg-gold-400/90 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer group-hover:bg-gold-400 transition-colors">
                  <svg className="w-8 h-8 text-dark-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </motion.div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-2xl"
            >
              <h4 className="text-gold-400 font-bold text-lg mb-2">Since 2014</h4>
              <p className="text-cream text-sm leading-relaxed">
                Creating award-winning content that resonates globally
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-cream">Crafting Stories</span><br />
              <span className="text-gold-400">That Inspire</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 mb-12"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                At Shambhu Production House, we believe that every frame tells a story. 
                We translate stories into visually compelling content that transcends boundaries 
                and connects with audiences on an emotional level.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From conceptualization to final delivery, we bring together creative 
                excellence and technical innovation to produce content that not only 
                entertains but also transforms perspectives and touches hearts.
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  className="text-center lg:text-left"
                >
                  <h3 className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2 font-display">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12"
            >
              <button className="btn-primary">
                Discover Our Process
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
