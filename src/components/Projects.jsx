import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/ProjectSlider.css';

const ProjectCard = ({ project }) => (
  <div className="card group bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
    <div className="relative overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
    </div>

    <div className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold text-blue-400 mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-gray-600 text-blue-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-4 mt-auto">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
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
          className="section-title mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-4"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="project-slider !pb-14"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 