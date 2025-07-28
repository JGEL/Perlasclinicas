import React, { useState } from 'react';
import { MiniCase as MiniCaseType } from '../types';
import StethoscopeIcon from './StethoscopeIcon';

interface MiniCaseProps {
  data: MiniCaseType;
}

const MiniCase: React.FC<MiniCaseProps> = ({ data }) => {
  const [answered, setAnswered] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAnswer = (optionId: string) => {
    if (answered) return; // Prevent re-answering
    setAnswered(optionId);
    setTimeout(() => setIsFlipped(true), 300); // Flip after a short delay
  };

  const isCorrect = answered === data.correctAnswerId;

  const difficultyStyles: { [key: string]: string } = {
    baja: 'bg-green-100 text-green-800 border-green-200',
    media: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    alta: 'bg-red-100 text-red-800 border-red-200',
  };
  const difficultyClass = difficultyStyles[data.difficulty] || 'bg-slate-100 text-slate-800 border-slate-200';

  const getOptionClass = (optionId: string) => {
    if (!answered) {
      return 'bg-slate-100 hover:bg-teal-100';
    }
    if (optionId === data.correctAnswerId) {
      return 'bg-green-200 border-green-500';
    }
    if (optionId === answered && !isCorrect) {
      return 'bg-red-200 border-red-500';
    }
    return 'bg-slate-100 opacity-60';
  };

  return (
    <div className={`perspective w-full h-80 ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="flipper w-full h-full">
        {/* Front of the card */}
        <div className="front absolute w-full h-full">
          <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg h-full border border-slate-200 overflow-y-auto">
            {/* <h3 className="text-xl font-bold text-slate-800 text-center mb-2">{data.term}</h3> */}
            <p className="text-slate-600 mb-4">{data.definition} Sugestivo de {data.term}. ¿Cuál de las siguientes es la opción correcta?</p>
            <div className="space-y-3 mt-auto">
              {data.quizOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  disabled={!!answered}
                  className={`w-full text-left p-3 rounded-lg border border-slate-300 transition-colors duration-200 disabled:cursor-not-allowed ${getOptionClass(option.id)}`}
                >
                  <span className="font-semibold mr-2">{option.id}.</span>{option.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="back absolute w-full h-full">
          <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg h-full border border-slate-200 overflow-y-auto">
            <div className={`p-3 rounded-lg text-center mb-4 font-bold text-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isCorrect ? '¡Correcto!' : '¡Incorrecto!'}
            </div>
            
            <div className="mb-4">
                 <h4 className="text-lg font-bold text-teal-600 mb-1">{data.term}</h4>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{data.rotation}</p>
                 <div className="mt-4 space-y-2 text-sm">
                    {data.quizOptions.map(option => (
                        <div key={option.id} className={`p-2 rounded-md border ${getOptionClass(option.id)}`}>
                           <span className="font-semibold mr-2">{option.id}.</span> {option.text}
                        </div>
                    ))}
                 </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-500 mb-3">
                <StethoscopeIcon className="w-5 h-5" />
                <span>Perla Clínica</span>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg text-sm text-teal-800">
                <p><span className="font-bold">🧠 Perla:</span> {data.clinicalPearl}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCase;