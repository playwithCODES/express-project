import {GoogleGenAI} from '@google/genai';
import config from '../config/config.js';
const ai = new GoogleGenAI({apiKey:config.geminiApiKey});

const promptAI = async (promptMessage) => {
  const result = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: promptMessage,
  });
  return result.candidates[0].content.parts[0].text;    
}



export default promptAI;
