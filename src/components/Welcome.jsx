import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20" />
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0">
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-float1 top-1/4 left-1/4" />
        <div className="absolute w-3 h-3 bg-purple-500 rounded-full animate-float2 top-3/4 left-1/3" />
        <div className="absolute w-5 h-5 bg-indigo-500 rounded-full animate-float3 top-1/2 right-1/4" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-400">Suresh</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Magento 2 Expert',
                2000,
                'WordPress Developer',
                2000,
                'E-commerce Specialist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Crafting seamless e-commerce experiences with Magento 2 and WordPress.
            Turning ideas into powerful online stores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mx-auto animate-scroll" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome; 