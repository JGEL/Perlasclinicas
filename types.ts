
export interface Flashcard {
  id: string;
  term: string;
  definition: string;
  datoDx: string;
  datoTto: string;
  clinicalPearl: string;
  rotation: string;
  difficulty: string;
}

export type FlashcardData = Pick<Flashcard, 'term' | 'definition' | 'clinicalPearl'>;

export interface MiniCase {
  id: string;
  term: string;
  definition: string;
  quizOptions: { id: string; text: string }[];
  correctAnswerId: string;
  clinicalPearl: string;
  rotation: string;
  difficulty: string;
}
