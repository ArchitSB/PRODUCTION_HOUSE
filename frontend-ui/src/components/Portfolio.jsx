import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Epic Adventure Chronicles",
      category: "film",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "A breathtaking cinematic journey through uncharted territories and human emotions",
      year: "2024",
      awards: "Best Cinematography"
    },
    {
      id: 2,
      title: "Urban Stories Unveiled",
      category: "documentary",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Capturing the essence of city life and the profound human connections within",
      year: "2024",
      awards: "Documentary Excellence"
    },
    {
      id: 3,
      title: "Brand Vision Revolution",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Creative commercial storytelling that transforms brand narratives into compelling visual experiences",
      year: "2024",
      awards: "Marketing Gold"
    },
    {
      id: 4,
      title: "Mystic Realms Fantasy",
      category: "film",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Fantasy epic featuring groundbreaking visual effects and immersive world-building",
      year: "2023",
      awards: "VFX Excellence"
    },
    {
      id: 5,
      title: "Innovation Hub Campaign",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Tech industry promotional content showcasing innovation and future possibilities",
      year: "2023",
      awards: "Creative Campaign"
    },
    {
      id: 6,
      title: "Nature's Call Documentary",
      category: "documentary",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Environmental documentary showcasing the breathtaking beauty and fragility of our natural world",
      year: "2023",
      awards: "Environmental Impact"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'film', name: 'Films', count: projects.filter(p => p.category === 'film').length },
    { id: 'documentary', name: 'Documentaries', count: projects.filter(p => p.category === 'documentary').length },
    { id: 'commercial', name: 'Commercials', count: projects.filter(p => p.category === 'commercial').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-dark-900 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
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
            <span className="text-gold-400">Works</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our portfolio of award-winning projects that showcase our passion for 
            visual storytelling and creative excellence.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${
                  filter === category.id
                    ? 'bg-gold-400 text-dark-900'
                    : 'glass-effect text-cream hover:text-gold-400'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category.name}
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    filter === category.id 
                      ? 'bg-dark-900/20 text-dark-900' 
                      : 'bg-gold-400/20 text-gold-400'
                  }`}>
                    {category.count}
                  </span>
                </span>
                {filter !== category.id && (
                  <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative glass-effect rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Play button */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-cream/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-gold-400 transition-colors duration-300">
                    <svg className="w-8 h-8 text-dark-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.div>

                {/* Award badge */}
                <div className="absolute top-4 right-4 bg-gold-400 text-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                  {project.awards}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-gold-400 text-sm font-bold uppercase tracking-wider">
                    {project.category} • {project.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-cream mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <motion.button 
                  className="flex items-center gap-2 text-gold-400 hover:text-cream font-semibold group/btn"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="glass-effect p-10 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-cream mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-300 mb-8">
              Discover our complete portfolio and behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View Full Portfolio
              </button>
              <button className="btn-secondary">
                Behind the Scenes
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
