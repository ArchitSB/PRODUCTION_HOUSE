import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Content versions - easy to switch between options
  const contentVersions = {
    detailed: {
      subtitle: "Leading PR & Production Company in Bollywood's Entertainment Industry",
      mainText: [
        "Shambhu Group is a dynamic PR and Production company at the heart of Bollywood's entertainment industry. Specializing in public relations, talent management, film & event production, media promotions, and brand partnerships, we are committed to delivering excellence through creativity and innovation.",
        "Our expertise spans across celebrity PR, digital campaigns, music & movie launches, fashion shows, and red-carpet events, ensuring every project receives the spotlight it deserves. With a strong network in media and industry, we connect artists, filmmakers, and brands with audiences on both national and global platforms.",
        "At Shambhu Group, we believe in the power of storytelling and visibility. Our mission is to craft narratives that not only entertain but also leave a lasting impact."
      ],
      services: [
        "Celebrity & Talent PR",
        "Media Relations & Digital Promotions", 
        "Film & Event Production",
        "Red Carpet & Fashion Show Management",
        "Brand Collaborations & Endorsements",
        "Creative Campaign & Content Strategy"
      ]
    },
    concise: {
      subtitle: "Shaping Stories That Inspire and Connect",
      mainText: [
        "Shambhu Group is a leading PR & Production house in Bollywood, shaping stories that inspire and connect. From celebrity PR, film promotions, red-carpet events, and brand collaborations to full-scale film & event production, we bring creativity and strategy together to build unforgettable experiences.",
        "With passion, innovation, and trust, Shambhu Group continues to shine as a bridge between talent, media, and audiences."
      ],
      services: [
        "Celebrity PR & Promotions",
        "Film & Event Production",
        "Red Carpet Events",
        "Brand Collaborations",
        "Digital Campaigns",
        "Media Relations"
      ]
    },
    medium: {
      subtitle: "Shaping the Future of Bollywood Entertainment",
      mainText: [
        "Shambhu Group is a dynamic PR and Production company dedicated to shaping the future of Bollywood entertainment. With a passion for creativity and a commitment to excellence, we specialize in public relations, talent management, film & event production, celebrity promotions, and brand collaborations within the Indian film industry."
      ],
      services: [
        "Public Relations",
        "Talent Management", 
        "Film & Event Production",
        "Celebrity Promotions",
        "Brand Collaborations",
        "Digital Marketing"
      ]
    }
  };

  // Current active version - change this to switch content versions
  const currentContent = contentVersions.detailed;

  const stats = [
    { number: "100+", label: "Celebrity Clients", delay: 0.2 },
    { number: "250+", label: "Events Managed", delay: 0.4 },
    { number: "50+", label: "Film Promotions", delay: 0.6 },
    { number: "500+", label: "Media Partnerships", delay: 0.8 },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden" ref={ref}>
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
            About Us – <span className="text-gold-400">Shambhu Group</span>
          </h2>
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-1"
          >
            {/* Main Text Content */}
            <div className="space-y-6">
              {currentContent.mainText.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Our Services Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 md:mt-12"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-400 mb-6">
                Our Services Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {currentContent.services.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="flex items-center gap-3 p-3 bg-dark-800/30 rounded-lg border border-gold-400/20 hover:border-gold-400/40 hover:bg-dark-800/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="text-center p-4 md:p-6 bg-dark-800/50 rounded-xl backdrop-blur-sm border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-gold-400/20 to-dark-800/20 backdrop-blur-sm border border-gold-400/30">
              {/* Bollywood/PR themed visual placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-400/30"
                >
                  �
                </motion.div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-cream mb-2">
                  Bollywood's Premier PR Partner
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Connecting talent with audiences across platforms
                </p>
              </div>
            </div>

            {/* Floating elements with PR/Bollywood theme */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gold-400/20 rounded-full backdrop-blur-sm border border-gold-400/30 flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl">⭐</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gold-400/10 rounded-full backdrop-blur-sm border border-gold-400/20 flex items-center justify-center"
            >
              <span className="text-lg md:text-xl">🎪</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
