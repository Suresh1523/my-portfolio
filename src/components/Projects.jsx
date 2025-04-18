import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    image: '/project1-placeholder.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/project2-placeholder.jpg',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using advanced language models.',
    image: '/project3-placeholder.jpg',
    tags: ['React', 'Python', 'OpenAI', 'Flask'],
    demoLink: '#',
    githubLink: '#',
  },
];

const ProjectCard = ({ project, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="card group"
  >
    <div className="relative overflow-hidden rounded-lg mb-6">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
    </div>

    <h3 className="text-xl font-bold text-blue-400 mb-3">{project.title}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-sm bg-gray-700 text-blue-300 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex space-x-4">
      <a
        href={project.demoLink}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Live Demo
      </a>
      <a
        href={project.githubLink}
        className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
      >
        GitHub
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-gray-800" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 