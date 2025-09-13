import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      id: 1,
      title: "Visionary Dreams",
      category: "film",
      type: "Feature Film",
      year: "2024",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "A breathtaking journey through uncharted territories of human emotion and visual storytelling",
      stats: { views: "2.5M", awards: "12", duration: "120min" }
    },
    {
      id: 2,
      title: "Urban Pulse",
      category: "documentary",
      type: "Documentary",
      year: "2024",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Capturing the raw essence of metropolitan life and human connections in modern cities",
      stats: { views: "1.8M", awards: "8", duration: "85min" }
    },
    {
      id: 3,
      title: "Brand Revolution",
      category: "commercial",
      type: "Commercial Campaign",
      year: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Transformative brand storytelling that redefined market perception and consumer engagement",
      stats: { views: "5.2M", awards: "15", duration: "3min" }
    },
    {
      id: 4,
      title: "Ethereal Realms",
      category: "film",
      type: "Short Film",
      year: "2023",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Award-winning fantasy narrative with groundbreaking visual effects and immersive storytelling",
      stats: { views: "3.1M", awards: "20", duration: "45min" }
    },
    {
      id: 5,
      title: "Tech Horizon",
      category: "commercial",
      type: "Product Launch",
      year: "2023",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Cutting-edge technology showcase featuring innovative visual techniques and motion graphics",
      stats: { views: "4.7M", awards: "10", duration: "5min" }
    },
    {
      id: 6,
      title: "Natural Symphony",
      category: "documentary",
      type: "Nature Documentary",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Environmental masterpiece showcasing the untouched beauty of natural landscapes",
      stats: { views: "2.9M", awards: "18", duration: "90min" }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'film', name: 'Films', count: projects.filter(p => p.category === 'film').length },
    { id: 'documentary', name: 'Documentaries', count: projects.filter(p => p.category === 'documentary').length },
    { id: 'commercial', name: 'Commercials', count: projects.filter(p => p.category === 'commercial').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={cardRef}
        layout
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={cardInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        onHoverStart={() => setHoveredProject(project.id)}
        onHoverEnd={() => setHoveredProject(null)}
        className="group relative overflow-hidden rounded-3xl cursor-pointer"
      >
        {/* Main image container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-dark-700">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Dark overlay with gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"
            initial={{ opacity: 0.4 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />

          {/* Play button with cinematic effect */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-20 h-20 bg-gold-400/90 rounded-full flex items-center justify-center backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8 text-dark-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-gold-400/30 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Category badge */}
          <motion.div 
            className="absolute top-6 left-6 bg-gold-400/90 backdrop-blur-sm px-4 py-2 rounded-full"
            initial={{ x: -50, opacity: 0 }}
            animate={cardInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <span className="text-dark-900 font-bold text-sm uppercase tracking-wider">
              {project.type}
            </span>
          </motion.div>

          {/* Stats overlay */}
          <motion.div 
            className="absolute top-6 right-6 space-y-2"
            initial={{ x: 50, opacity: 0 }}
            animate={cardInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <div className="glass-effect px-3 py-1 rounded-full text-xs text-cream">
              {project.stats.views} views
            </div>
            <div className="glass-effect px-3 py-1 rounded-full text-xs text-gold-400">
              {project.stats.awards} awards
            </div>
          </motion.div>
        </div>

        {/* Content section */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-8"
          initial={{ y: 20, opacity: 0 }}
          animate={cardInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-cream mb-2 group-hover:text-gold-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                {project.year} • {project.stats.duration}
              </p>
            </div>
          </div>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="flex items-center justify-between"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-2 group/btn">
              View Project
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </button>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-gold-400/20 transition-colors">
                <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-gold-400/20 transition-colors">
                <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Border animation */}
        <motion.div 
          className="absolute inset-0 border-2 border-transparent rounded-3xl"
          whileHover={{ borderColor: "rgba(245, 180, 0, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-dark-900 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-40 right-40 w-20 h-20 border border-gold-400/20 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold-400 text-lg font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            Our Portfolio
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-cream">Our</span>{" "}
            <span className="text-gold-400">Works</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore our curated collection of{" "}
            <span className="text-gold-400 font-medium">award-winning projects</span>{" "}
            that showcase our passion for visual storytelling and creative excellence.
          </motion.p>

          {/* Enhanced Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 overflow-hidden group ${
                  filter === category.id
                    ? 'bg-gold-400 text-dark-900 shadow-xl shadow-gold-400/25'
                    : 'glass-effect text-cream hover:text-gold-400 border border-white/10 hover:border-gold-400/50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <span className="relative z-10">
                  {category.name}
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </span>
                
                {/* Hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-gold-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: filter === category.id ? '0%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    display: filter === category.id ? 'none' : 'block' 
                  }}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Load More Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="glass-effect p-12 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-cream mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              This is just a glimpse of our creative portfolio. Discover more projects 
              and behind-the-scenes content in our complete showcase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary text-lg px-10 py-4 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View All Projects</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button 
                className="btn-secondary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Behind the Scenes
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
