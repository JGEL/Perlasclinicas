
import { GoogleGenAI, Type } from "@google/genai";
import { FlashcardData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const flashcardSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      term: {
        type: Type.STRING,
        description: "El término, enfermedad o concepto médico. Por ejemplo: 'Hipocalcemia'.",
      },
      definition: {
        type: Type.STRING,
        description: "Un resumen conciso y claro del término, ideal para una flashcard de estudio.",
      },
      clinicalPearl: {
        type: Type.STRING,
        description: "Una 'perla clínica' práctica y memorable. Un dato clave o mini-consejo que no suele estar en los libros pero es crucial en la práctica clínica. Por ejemplo: 'Si ves espasmo muscular tras inflar el manguito del tensiómetro, piensa en el signo de Trousseau (hipocalcemia)'.",
      },
    },
    required: ["term", "definition", "clinicalPearl"],
  },
};

export const generateFlashcards = async (topic: string): Promise<FlashcardData[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Genera 6 flashcards sobre el tema: "${topic}".`,
      config: {
        systemInstruction: `Eres un médico residente senior experto y un educador clínico. Tu tarea es crear flashcards para estudiantes de medicina en rotaciones. Para cada término, proporciona una "definition" (un resumen conciso) y una "clinicalPearl" (una "Perla Clínica"). Una "Perla Clínica" es un dato clave, un consejo práctico o un mini-caso que se aprende con la experiencia, ayuda a recordar, diagnosticar o manejar un caso y que no siempre está en los libros. Asegúrate de que la perla sea corta, impactante y fácil de recordar.`,
        responseMimeType: "application/json",
        responseSchema: flashcardSchema,
      },
    });

    const jsonText = response.text.trim();
    const flashcards: FlashcardData[] = JSON.parse(jsonText);
    
    if (!Array.isArray(flashcards)) {
        throw new Error("La respuesta de la API no es un array válido.");
    }

    return flashcards;
  } catch (error) {
    console.error("Error generating flashcards:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate flashcards: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating flashcards.");
  }
};