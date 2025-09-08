import { motion } from 'framer-motion';

const ServiceCard = ({ title, services, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative bg-cinematic-800 p-8 rounded-lg border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 group overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Step number */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500 text-cinematic-900 rounded-full flex items-center justify-center font-bold text-lg">
          {index + 1}
        </div>
        
        <div className="text-gold-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-cinematic font-bold text-white mb-6 group-hover:text-gold-400 transition-colors duration-300">
          {title}
        </h3>
        
        <ul className="space-y-3">
          {services.map((service, serviceIndex) => (
            <motion.li 
              key={serviceIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.2) + (serviceIndex * 0.1) }}
              viewport={{ once: true }}
              className="flex items-start gap-3 text-gray-300"
            >
              <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="group-hover:text-white transition-colors duration-300">{service}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const serviceCategories = [
    {
      title: "Pre-Production",
      icon: "📝",
      services: [
        "Script Development & Analysis",
        "Storyboarding & Visualization",
        "Casting & Talent Management",
        "Location Scouting",
        "Production Planning",
        "Budget Management"
      ]
    },
    {
      title: "Production",
      icon: "🎥",
      services: [
        "Cinematography & Filming",
        "Audio Recording",
        "Lighting Design",
        "Set Design & Construction",
        "Equipment Rental",
        "Crew Management"
      ]
    },
    {
      title: "Post-Production",
      icon: "🎞️",
      services: [
        "Video Editing & Assembly",
        "Color Grading & Correction",
        "Visual Effects (VFX)",
        "Sound Design & Mixing",
        "Motion Graphics",
        "Final Delivery & Mastering"
      ]
    },
    {
      title: "Distribution & Marketing",
      icon: "📢",
      services: [
        "Content Strategy",
        "Social Media Marketing",
        "Theatrical Distribution",
        "Digital Platform Release",
        "Promotional Content",
        "Audience Engagement"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-cinematic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-6">
            Our <span className="text-gold-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to screen, we provide comprehensive production services 
            that bring your vision to life with professional excellence.
          </p>
        </motion.div>

        {/* Timeline indicator */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold-500 to-transparent opacity-30"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard 
              key={category.title}
              title={category.title}
              services={category.services}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to bring your vision to life?
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gold-500 text-cinematic-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
