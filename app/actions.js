'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

export async function generateSummary(audioBase64) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const audioPart = {
    inlineData: {
      data: audioBase64,
      mimeType: 'audio/mp3',
    },
  };

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = `
    You are a helpful education assistant. Your task is to summarize a class lecture.
    Based on the provided audio transcription, please provide a comprehensive summary with the following sections:
    1. Class Summary: A short, paragraph-long summary of the main topics.
    2. Topics Taught: A bulleted list of the key concepts covered.
    3. Points to Remember: A bulleted list of the most important takeaways and key terms.
    4. Important Exam Questions: Three to five potential questions that could be on a test, based on the content.
  `;

  const result = await model.generateContent([prompt, audioPart]);
  const response = await result.response;
  return response.text();
}
