import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { COURSE_DATA } from './constants';
import { CourseSlide } from './components/CourseSlide';
import { ProgressBar } from './components/ProgressBar';
import { ChevronRight, ChevronLeft, RefreshCcw } from 'lucide-react';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = COURSE_DATA[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === COURSE_DATA.length - 1;

  const nextSlide = () => {
    if (!isLast) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isFirst) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white relative shadow-2xl flex flex-col overflow-hidden">
      {/* Progress Indicator */}
      <ProgressBar current={currentIndex} total={COURSE_DATA.length} />

      {/* Main Content Area */}
      <div className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          <CourseSlide key={currentIndex} data={currentSlide} />
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-gray-100 z-50">
        <div className="flex items-center justify-between gap-4">
          <button 
            onClick={prevSlide}
            disabled={isFirst}
            className={`p-4 rounded-full flex items-center justify-center transition-colors ${
              isFirst 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {isLast ? (
             <button 
             onClick={restart}
             className="flex-grow bg-purple-600 text-white p-4 rounded-full font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 active:scale-95 transition-all flex items-center justify-center gap-2"
           >
             <RefreshCcw size={20} />
             Học Lại
           </button>
          ) : (
            <button 
            onClick={nextSlide}
            className="flex-grow bg-gray-900 text-white p-4 rounded-full font-bold shadow-lg shadow-gray-200 hover:bg-black active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>{isFirst ? 'Bắt đầu' : 'Tiếp theo'}</span>
            <ChevronRight size={20} />
          </button>
          )}
        </div>
        <div className="text-center mt-3 text-xs text-gray-400 font-medium">
            Slide {currentIndex + 1} / {COURSE_DATA.length}
        </div>
      </div>
    </div>
  );
};

export default App;