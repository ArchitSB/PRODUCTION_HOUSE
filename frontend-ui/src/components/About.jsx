import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cinematic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-6">
              Crafting Stories That <span className="text-gold-500">Inspire</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At Shambhu Production House, we believe that every frame tells a story. 
              Our vision is to create compelling narratives that resonate with audiences 
              across all platforms and genres.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From conceptualization to final delivery, we bring together creative 
              excellence and technical innovation to produce content that not only 
              entertains but also transforms perspectives and touches hearts.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-500 mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-500 mb-2">10+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1489598843152-c2d4b6500392?ixlib=rb-4.0.3" 
                alt="Film Production" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cinematic-900/50 to-gold-500/20"></div>
            </div>
            
            {/* Floating card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-cinematic-900 p-6 rounded-lg shadow-2xl border border-gold-500/20"
            >
              <h4 className="text-gold-500 font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-300 text-sm">
                To create visual stories that transcend boundaries and connect cultures.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
