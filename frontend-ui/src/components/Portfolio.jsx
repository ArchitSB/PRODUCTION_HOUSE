import { motion } from 'framer-motion';
import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Epic Adventure",
      category: "film",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3",
      description: "A breathtaking journey through uncharted territories"
    },
    {
      id: 2,
      title: "Urban Stories",
      category: "documentary",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3",
      description: "Capturing the essence of city life and human connections"
    },
    {
      id: 3,
      title: "Brand Vision",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      description: "Creative commercial that tells a compelling brand story"
    },
    {
      id: 4,
      title: "Mystic Realms",
      category: "film",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3",
      description: "Fantasy epic with stunning visual effects"
    },
    {
      id: 5,
      title: "Innovation Hub",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3",
      description: "Tech company promotional content"
    },
    {
      id: 6,
      title: "Nature's Call",
      category: "documentary",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3",
      description: "Environmental documentary showcasing natural beauty"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'film', name: 'Films' },
    { id: 'documentary', name: 'Documentaries' },
    { id: 'commercial', name: 'Commercials' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-cinematic-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-6">
            Our <span className="text-gold-500">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our portfolio of creative projects that showcase our passion for visual storytelling.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gold-500 text-cinematic-900'
                    : 'bg-cinematic-800 text-white hover:bg-cinematic-700 border border-gold-500/20'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-cinematic-800 rounded-lg overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Play button overlay */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-gold-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-cinematic-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gold-500 capitalize font-medium">
                    {project.category}
                  </span>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-gold-500 hover:text-gold-400 transition-colors duration-300"
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500 hover:text-cinematic-900 transition-all duration-300"
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
