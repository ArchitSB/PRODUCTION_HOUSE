import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceCard = ({ title, services, icon, index, isTimeline }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative glass-effect p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 group overflow-hidden ${
        isTimeline ? 'lg:mb-8' : ''
      }`}
    >
      {/* Timeline connector */}
      {isTimeline && index < 3 && (
        <div className="hidden lg:block absolute -right-16 top-1/2 w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent z-10"></div>
      )}

      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-transparent to-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {/* Step number */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 text-dark-900 rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl">
          {index + 1}
        </div>
        
        <motion.div 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500"
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-cream mb-4 sm:mb-5 md:mb-6 group-hover:text-gold-400 transition-colors duration-500">
          {title}
        </h3>
        
        <div className="space-y-3 sm:space-y-4">
          {services.map((service, serviceIndex) => (
            <motion.div 
              key={serviceIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.2) + (serviceIndex * 0.1) }}
              viewport={{ once: true }}
              className="flex items-start gap-3 sm:gap-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
            >
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gold-400 rounded-full mt-2 sm:mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
              <span className="text-sm sm:text-base md:text-lg leading-relaxed">{service}</span>
            </motion.div>
          ))}
        </div>

        {/* Learn more button */}
        <motion.button
          className="mt-8 text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-2 group/btn"
          whileHover={{ x: 5 }}
        >
          Learn More 
          <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceCategories = [
    {
      title: "Pre-Production",
      icon: "📝",
      services: [
        "Script Development & Story Analysis",
        "Creative Storyboarding & Visualization",
        "Professional Casting & Talent Management",
        "Strategic Location Scouting",
        "Comprehensive Production Planning",
        "Budget Management & Financial Planning"
      ]
    },
    {
      title: "Production",
      icon: "🎥",
      services: [
        "Expert Cinematography & Filming",
        "Professional Audio Recording",
        "Creative Lighting Design",
        "Set Design & Construction",
        "Equipment Rental & Management",
        "Experienced Crew Coordination"
      ]
    },
    {
      title: "Post-Production",
      icon: "🎞️",
      services: [
        "Professional Video Editing & Assembly",
        "Advanced Color Grading & Correction",
        "Stunning Visual Effects (VFX)",
        "Immersive Sound Design & Mixing",
        "Dynamic Motion Graphics",
        "Final Delivery & Quality Mastering"
      ]
    },
    {
      title: "Distribution & Marketing",
      icon: "📢",
      services: [
        "Strategic Content Marketing",
        "Social Media Campaign Management",
        "Theatrical Distribution Planning",
        "Digital Platform Optimization",
        "Creative Promotional Content",
        "Audience Engagement Strategies"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-dark-800 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-cream">Our</span>{" "}
            <span className="text-gold-400">Services</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From concept to screen, we provide comprehensive production services 
            that bring your vision to life with professional excellence and creative innovation.
          </motion.p>
        </motion.div>

        {/* Timeline Layout for Desktop */}
        <div className="hidden lg:block relative">
          {/* Central timeline line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400 via-gold-400/50 to-transparent"></div>
          
          <div className="space-y-24 lg:space-y-32">
            {serviceCategories.map((category, index) => (
              <div key={category.title} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 lg:pr-16' : 'pl-12 lg:pl-16'}`}>
                  <ServiceCard 
                    title={category.title}
                    services={category.services}
                    icon={category.icon}
                    index={index}
                    isTimeline={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout for Mobile/Tablet */}
        <div className="lg:hidden grid gap-6 md:gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard 
              key={category.title}
              title={category.title}
              services={category.services}
              icon={category.icon}
              index={index}
              isTimeline={false}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 md:mt-20 lg:mt-24"
        >
          <div className="glass-effect p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-cream mb-4 md:mb-6">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Let's collaborate to create something extraordinary. Our team is ready to 
              transform your ideas into compelling visual stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4">
                Start Your Project
              </button>
              <button className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4">
                View Our Process
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
