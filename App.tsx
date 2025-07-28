
import React, { useState, useMemo, useEffect } from 'react';
import { Flashcard as FlashcardType, MiniCase as MiniCaseType } from './types';
import Flashcard from './components/Flashcard';
import MiniCase from './components/MiniCase';
import allFlashcardsData from './data/flashcards';
import allMiniCasesData from './data/minicasos';
import Spinner from './components/Spinner';

// Utility function to shuffle an array
const shuffleArray = <T extends { id: string }>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

type CardData = FlashcardType | MiniCaseType;

// Type guard to check if a card is a MiniCase
const isMiniCase = (card: CardData): card is MiniCaseType => {
    return 'quizOptions' in card;
};


const App: React.FC = () => {
  const [mode, setMode] = useState<'flashcards' | 'minicasos'>('flashcards');
  
  const allCards: CardData[] = mode === 'flashcards' ? allFlashcardsData : allMiniCasesData;

  const [selectedRotation, setSelectedRotation] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [shuffledDeck, setShuffledDeck] = useState<CardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSelectedRotation('Todos');
    setSearchTerm('');
  }, [mode]);

  const rotations = useMemo(() => {
    const sourceData = mode === 'flashcards' ? allFlashcardsData : allMiniCasesData;
    return sourceData.reduce((acc, card) => {
      acc[card.rotation] = (acc[card.rotation] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [mode]);

  useEffect(() => {
    const cardsForRotation = selectedRotation === 'Todos'
      ? allCards
      : allCards.filter(card => card.rotation === selectedRotation);
    setShuffledDeck(shuffleArray(cardsForRotation));
  }, [selectedRotation, allCards]);
  
  const displayedCards = useMemo(() => {
    if (!searchTerm) {
      return shuffledDeck;
    }
    return shuffledDeck.filter(card =>
      card.term.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [shuffledDeck, searchTerm]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [displayedCards]);

  const handleRotationSelect = (rotation: string) => {
    setSelectedRotation(rotation);
    setSearchTerm('');
  };

  const handleNextCard = () => {
    if (displayedCards.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedCards.length);
  };

  const rotationKeys = Object.keys(rotations).sort();
  const currentCard = displayedCards[currentIndex];
  
  const themeColor = mode === 'flashcards' ? 'blue' : 'teal';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-6 z-10">
            <img 
                src="https://sedem.org/wp-content/uploads/2025/07/sedem2-trasparente.png" 
                alt="SEDEM - Sociedad Española de Educación Médica y de las Ciencias de la Salud" 
                className="h-16 sm:h-20 object-contain"
            />
        </div>
        <header className="text-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-extrabold text-${themeColor}-600`}>
            Perlas para la Práctica Clínica
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            {mode === 'flashcards' 
              ? 'Flashcards con "Perlas Clínicas" para lo que realmente necesitas saber en tus rotaciones.'
              : 'Pon a prueba tus conocimientos con mini-casos clínicos interactivos.'
            }
          </p>
        </header>

        <div className="max-w-4xl mx-auto mb-8 flex justify-center gap-4">
            <button 
              onClick={() => setMode('flashcards')}
              className={`px-8 py-3 text-lg font-bold rounded-lg shadow-md transition-all transform hover:scale-105 ${
                mode === 'flashcards' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-blue-600 border-2 border-blue-600'
              }`}
            >
                Flashcards
            </button>
            <button 
              onClick={() => setMode('minicasos')}
              className={`px-8 py-3 text-lg font-bold rounded-lg shadow-md transition-all transform hover:scale-105 ${
                mode === 'minicasos' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-teal-600 border-2 border-teal-600'
              }`}
            >
                Mini Casos
            </button>
        </div>

        <div className="max-w-4xl mx-auto mb-10 p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="flex flex-col gap-4 items-center">
                <div className="w-full">
                    <h2 className="text-xl font-bold text-center text-slate-700 mb-4">Selecciona una rotación</h2>
                     <div className="flex flex-wrap justify-center gap-2">
                        <button
                          onClick={() => handleRotationSelect('Todos')}
                          className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                            selectedRotation === 'Todos'
                              ? `bg-${themeColor}-600 text-white shadow`
                              : `bg-white text-slate-700 hover:bg-${themeColor}-100 border border-slate-300`
                          }`}
                        >
                          Todas ({ mode === 'flashcards' ? allFlashcardsData.length : allMiniCasesData.length})
                        </button>
                        {rotationKeys.map(rotation => (
                            <button
                                key={rotation}
                                onClick={() => handleRotationSelect(rotation)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                                    selectedRotation === rotation
                                    ? `bg-${themeColor}-600 text-white shadow`
                                    : `bg-white text-slate-700 hover:bg-${themeColor}-100 border border-slate-300`
                                }`}
                            >
                                {rotation} ({rotations[rotation]})
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <label htmlFor="search-term" className="sr-only">O busca por término</label>
                    <input
                        id="search-term"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={mode === 'flashcards' ? "...o busca por nombre de afección" : "...o busca por caso clínico"}
                        className={`w-full px-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-${themeColor}-500 focus:outline-none transition`}
                    />
                </div>
            </div>
        </div>
        
        {displayedCards.length === 0 && (
            <div className="text-center text-slate-500 my-16 bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
                <p className="text-xl font-semibold">No se encontraron tarjetas.</p>
                <p className="text-md mt-2">Prueba a cambiar la rotación o el término de búsqueda.</p>
            </div>
        )}

        {currentCard && (
          <div className="max-w-2xl mx-auto">
            {
              // This logic prevents rendering with mismatched data during the mode transition
              (mode === 'flashcards' && !isMiniCase(currentCard)) ? (
                <Flashcard key={currentCard.id} data={currentCard as FlashcardType} />
              ) : (mode === 'minicasos' && isMiniCase(currentCard)) ? (
                <MiniCase key={currentCard.id} data={currentCard as MiniCaseType} />
              ) : (
                <div className="w-full h-80 flex items-center justify-center">
                    <Spinner />
                </div>
              )
            }
            
            <div className="flex items-center justify-between mt-6">
              <p className="text-slate-600 font-medium">
                Tarjeta {displayedCards.length > 0 ? currentIndex + 1 : 0} de {displayedCards.length}
              </p>
              <button
                onClick={handleNextCard}
                disabled={displayedCards.length <= 1}
                className={`px-6 py-2 bg-${themeColor}-600 text-white font-semibold rounded-lg shadow-md hover:bg-${themeColor}-700 focus:outline-none focus:ring-2 focus:ring-${themeColor}-500 focus:ring-opacity-75 transition-transform transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:transform-none`}
              >
                Siguiente →
              </button>
            </div>
          </div>
        )}
        
        <footer className="text-center mt-16 text-sm text-slate-500">
            <p>Contenido basado en datos estáticos. Verifica siempre la información con fuentes confiables.</p>
            <p>Desarrollado para estudiantes de medicina. Contacta con ceuemumu@gmail.com si encuentras algún error o problema.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
