import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Led the frontend development team in building scalable web applications using React and Next.js. Implemented modern UI/UX practices and improved performance metrics.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    title: 'Web Developer',
    company: 'Creative Agency',
    period: '2018 - 2020',
    description: 'Created responsive websites and web applications for various clients. Worked with modern frontend frameworks and implemented best practices for web development.',
  },
];

const TimelineItem = ({ experience, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="relative pl-8 pb-12 last:pb-0"
  >
    {/* Timeline line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/30">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 }}
      />
    </div>

    <div className="card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-blue-400">{experience.title}</h3>
        <span className="text-sm text-gray-400">{experience.period}</span>
      </div>
      <h4 className="text-lg text-purple-400 mb-4">{experience.company}</h4>
      <p className="text-gray-300">{experience.description}</p>
    </div>
  </motion.div>
);

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-gray-900" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.title}
              experience={experience}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 