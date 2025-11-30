import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

export const chatSession = genAI
  .getGenerativeModel({
    model: "gemini-2.5-flash",  // ✅ FIXED — Valid model from your API
  })
  .startChat({
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 500,
      responseMimeType: "application/json",
    },
  });
