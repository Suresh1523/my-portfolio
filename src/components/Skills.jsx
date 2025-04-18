import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-blue-300">{name}</span>
      <span className="text-sm font-medium text-blue-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1, delay: index * 0.1 }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-6">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 