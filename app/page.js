'use client';
import { useState, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export default function HomePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
      setAudioFile(audioBlob);
      audioChunksRef.current = [];
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const summarize = async () => {
    if (!audioFile) {
      alert('Please record or upload an audio file first.');
      return;
    }
    setLoading(true);
    setSummary(null);

    try {
      const audioData = await audioFile.arrayBuffer();
      const audioPart = {
        inlineData: {
          data: Buffer.from(audioData).toString('base64'),
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
      setSummary(response.text());
    } catch (error) {
      console.error('Error generating summary:', error);
      alert('Failed to generate summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Class Notes AI</h1>
      <p>Record your lecture or upload an audio file to get a detailed summary.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <button 
          onClick={isRecording ? stopRecording : startRecording}
          style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', marginRight: '1rem' }}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        
        <input 
          type="file" 
          accept="audio/*" 
          onChange={(e) => setAudioFile(e.target.files[0])}
        />
        
        {audioFile && <p>File selected: {audioFile.name}</p>}
      </div>

      <button
        onClick={summarize}
        disabled={loading || !audioFile}
        style={{ marginTop: '2rem', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
      >
        {loading ? 'Summarizing...' : 'Generate Summary'}
      </button>

      {summary && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Summary:</h2>
          <pre>{summary}</pre>
        </div>
      )}
    </div>
  );
}