import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../constants';
import { Check, AlertTriangle, ArrowRight } from 'lucide-react';

interface CourseSlideProps {
  data: SlideData;
}

export const CourseSlide: React.FC<CourseSlideProps> = ({ data }) => {
  const Icon = data.icon;

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="flex flex-col h-full bg-white overflow-y-auto pb-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={data.id}
    >
      {/* Header Image Area */}
      <div className={`relative h-48 ${data.color} flex items-center justify-center rounded-b-[3rem] shadow-lg mb-6 shrink-0`}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
             <img src={data.image} alt={data.title} className="w-full h-full object-cover rounded-b-[3rem]" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="bg-white/20 p-3 rounded-full inline-block mb-2 backdrop-blur-sm">
            <Icon size={32} />
          </div>
          <p className="text-sm font-medium uppercase tracking-wider opacity-90">{data.category}</p>
          <h2 className="text-2xl font-bold mt-1">{data.title}</h2>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 flex-grow">
        <motion.div className="space-y-4">
          {data.content.type === 'intro' && (
             <div className="text-center py-10">
                {data.content.items.map((item, idx) => (
                  <motion.p key={idx} variants={itemVariants} className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {item}
                  </motion.p>
                ))}
                {data.content.subtext && (
                  <motion.p variants={itemVariants} className="text-sm text-gray-500 mt-8 italic">
                    {data.content.subtext}
                  </motion.p>
                )}
             </div>
          )}

          {data.content.type === 'list' && (
            <ul className="space-y-4">
              {data.content.items.map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-start bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className={`mt-1 mr-3 min-w-[20px] ${data.color.replace('bg-', 'text-')}`}>
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {data.content.type === 'steps' && (
            <div className="space-y-6 relative pl-4 border-l-2 border-gray-200 ml-3">
              {data.content.items.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative pl-6">
                  <div className={`absolute -left-[25px] top-0 w-8 h-8 rounded-full ${data.color} text-white flex items-center justify-center text-sm font-bold border-4 border-white shadow-sm`}>
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {data.content.type === 'warning' && (
             <div className="space-y-4">
               {data.content.items.map((item, idx) => (
                 <motion.div key={idx} variants={itemVariants} className="flex items-start bg-red-50 p-4 rounded-xl border border-red-100">
                   <div className="mt-1 mr-3 text-red-500 min-w-[20px]">
                     <AlertTriangle size={20} />
                   </div>
                   <span className="text-gray-800 font-medium">{item}</span>
                 </motion.div>
               ))}
             </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};