import { GoogleGenAI } from "@google/genai";

// Initialize the AI client safely to prevent app crash if process.env is accessed prematurely
let ai: GoogleGenAI | null = null;

try {
  // Safe access pattern for environment variables
  const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  } else {
    console.warn("EduBridge: API Key not found in environment.");
  }
} catch (error) {
  console.error("EduBridge: Failed to initialize AI client:", error);
}

export const askAiArchitect = async (userQuestion: string, currentContext: string): Promise<string> => {
  if (!ai) {
    return "AI Service is currently unavailable (API Key missing or initialization failed).";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `You are 'EduBot', a friendly and encouraging AI Tutor for rural Indian students.
    
    Current App Context: The student is looking at: ${currentContext}
    
    Your Goal:
    - Explain concepts simply in Hinglish (Hindi + English mix).
    - If the student is in a Quiz, give hints but don't give the direct answer.
    - If the student is reading a chapter, summarize key points if asked.
    - Be concise. Mobile screens are small.
    - Use emojis to be friendly.
    
    Example Style:
    User: "Samajh nahi aaya."
    You: "Chinta mat karo! 🌟 Dekho, simple bhasha mein: Photosynthesis ka matlab hai paudhon ka khaana banana. Sunlight use karke wo energy banate hain. Clear hai? 👍"
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: [
        {
          role: 'user',
          parts: [{ text: userQuestion }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Sorry, I couldn't generate an answer right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Network error: Unable to reach the Tutor.";
  }
};