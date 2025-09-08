import { motion } from 'framer-motion';

const RoleCard = ({ role, description, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-cinematic-800 p-6 rounded-lg border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 group"
    >
      <div className="text-gold-500 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
        {role}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const KeyRoles = () => {
  const roles = [
    {
      role: "Production Designers",
      description: "Visionary creators who design the visual foundation of every project, bringing concepts to life through innovative design.",
      icon: "🎨"
    },
    {
      role: "Cinematographers",
      description: "Masters of visual storytelling who capture the essence of each scene with artistic precision and technical excellence.",
      icon: "🎬"
    },
    {
      role: "Directors",
      description: "Creative leaders who guide the artistic vision and coordinate all elements to create compelling narratives.",
      icon: "🎭"
    },
    {
      role: "Sound Designers",
      description: "Audio architects who create immersive soundscapes that enhance emotional impact and storytelling depth.",
      icon: "🎵"
    },
    {
      role: "VFX Artists",
      description: "Digital magicians who seamlessly blend reality with imagination to create stunning visual effects.",
      icon: "✨"
    },
    {
      role: "Editors",
      description: "Story sculptors who weave together footage, sound, and effects to create the final narrative masterpiece.",
      icon: "✂️"
    },
    {
      role: "Art Directors",
      description: "Creative coordinators who ensure visual consistency and artistic excellence across all production elements.",
      icon: "🖼️"
    },
    {
      role: "Writers",
      description: "Storytelling masters who craft compelling scripts and narratives that form the foundation of great productions.",
      icon: "✍️"
    }
  ];

  return (
    <section className="py-20 bg-cinematic-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-6">
            Our <span className="text-gold-500">Creative</span> Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented professionals who bring stories to life through their expertise and passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default KeyRoles;
