import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const RoleCard = ({ role, description, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 group cursor-pointer relative overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <motion.div 
          className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500"
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-2xl font-display font-bold text-cream mb-4 group-hover:text-gold-400 transition-colors duration-500">
          {role}
        </h3>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {description}
        </p>

        {/* Decorative element */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-gold-400/30 rounded-full group-hover:bg-gold-400 group-hover:scale-150 transition-all duration-500"></div>
      </div>
    </motion.div>
  );
};

const KeyRoles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roles = [
    {
      role: "Production Designers",
      description: "Visionary creators who design the visual foundation of every project, bringing concepts to life through innovative design and artistic vision.",
      icon: "🎨"
    },
    {
      role: "Cinematographers",
      description: "Masters of visual storytelling who capture the essence of each scene with artistic precision, technical excellence, and creative camera work.",
      icon: "🎬"
    },
    {
      role: "Directors",
      description: "Creative leaders who guide the artistic vision and coordinate all elements to create compelling narratives that resonate with audiences.",
      icon: "🎭"
    },
    {
      role: "Sound Designers",
      description: "Audio architects who create immersive soundscapes that enhance emotional impact and bring depth to every storytelling element.",
      icon: "🎵"
    },
    {
      role: "VFX Artists",
      description: "Digital magicians who seamlessly blend reality with imagination to create stunning visual effects that push creative boundaries.",
      icon: "✨"
    },
    {
      role: "Editors",
      description: "Story sculptors who weave together footage, sound, and effects to create the final narrative masterpiece with perfect timing and flow.",
      icon: "✂️"
    },
    {
      role: "Art Directors",
      description: "Creative coordinators who ensure visual consistency and artistic excellence across all production elements and design aspects.",
      icon: "🖼️"
    },
    {
      role: "Writers",
      description: "Storytelling masters who craft compelling scripts and narratives that form the foundation of great productions and memorable content.",
      icon: "✍️"
    }
  ];

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-cream">Our</span>{" "}
            <span className="text-gold-400">Creative</span>
            <br />
            <span className="text-gradient">Team</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet the talented professionals who bring stories to life through their expertise, 
            passion, and unwavering commitment to creative excellence.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <RoleCard 
              key={role.role}
              role={role.role}
              description={role.description}
              icon={role.icon}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to work with industry-leading professionals who can bring your vision to life?
          </p>
          <button className="btn-primary text-lg px-12 py-6">
            Join Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyRoles;
