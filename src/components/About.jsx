import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-gray-800" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20" />
                <img
                  src="/profile-placeholder.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-lg opacity-20 blur-lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-400">
              Passionate Web Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm a passionate web developer with a keen eye for design and a
              love for creating seamless user experiences. With expertise in modern
              web technologies, I bring ideas to life through clean, efficient, and
              maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in web development started with a curiosity for creating
              beautiful interfaces. Today, I specialize in building responsive,
              performant web applications using cutting-edge technologies like
              React, Next.js, and modern CSS frameworks.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-700 px-4 py-2 rounded-full text-sm text-blue-300">
                React.js
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full text-sm text-blue-300">
                Next.js
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full text-sm text-blue-300">
                TypeScript
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full text-sm text-blue-300">
                Tailwind CSS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 