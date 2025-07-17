import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';
import StethoscopeIcon from './StethoscopeIcon';

interface FlashcardProps {
  data: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPearl, setShowPearl] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    // Reset pearl visibility when flipping back to front
    if (isFlipped) {
      setShowPearl(false);
    }
  };

  const togglePearl = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping when clicking the button
    setShowPearl(!showPearl);
  };

  const difficultyStyles: { [key: string]: string } = {
    baja: 'bg-green-100 text-green-800 border-green-200',
    media: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    alta: 'bg-red-100 text-red-800 border-red-200',
  };

  const difficultyClass = difficultyStyles[data.difficulty] || 'bg-slate-100 text-slate-800 border-slate-200';

  return (
    <div className={`perspective w-full h-80 ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip}>
      <div className="flipper w-full h-full">
        {/* Front of the card */}
        <div className="front absolute w-full h-full">
          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow-lg h-full cursor-pointer border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 text-center">{data.term}</h3>
            <p className="text-sm text-slate-500 mt-4">Haz clic para ver la respuesta</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="back absolute w-full h-full">
          <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg h-full cursor-pointer border border-slate-200 overflow-y-auto">
             <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-bold text-blue-600 flex-1 pr-2">{data.term}</h4>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${difficultyClass}`}>
                    {data.difficulty}
                </span>
            </div>
             <p className="text-xs text-slate-500 mb-3 uppercase font-semibold tracking-wider">{data.rotation}</p>
            <p className="text-slate-700 flex-grow text-sm">{data.definition}</p>
            
            <div className="mt-4 pt-4 border-t border-slate-200">
              <button
                onClick={togglePearl}
                className="flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors"
                aria-expanded={showPearl}
              >
                <StethoscopeIcon className="w-5 h-5" />
                <span>{showPearl ? 'Ocultar' : 'Mostrar'} Perla Clínica</span>
              </button>
              {showPearl && (
                 <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800 transition-opacity duration-300 animate-[fadeIn_0.5s_ease-in-out]">
                  <p><span className="font-bold">🧠 Perla:</span> {data.clinicalPearl}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;