'use client';
import { useState, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export default function HomePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
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
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Could not access microphone.');
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const parseSummary = (text) => {
    // Basic parser for the AI response
    // AI was prompted to give sections like:
    // 1. Class Summary: ...
    // 2. Topics Taught: ...
    // 3. Points to Remember: ...
    // 4. Important Exam Questions: ...
    const sections = {
      summary: '',
      topics: [],
      points: [],
      questions: []
    };

    let currentSection = '';
    const lines = text.split('\n');
    
    lines.forEach(line => {
      const lower = line.toLowerCase();
      if (lower.includes('class summary') || line.includes('1.')) currentSection = 'summary';
      else if (lower.includes('topics taught') || line.includes('2.')) currentSection = 'topics';
      else if (lower.includes('points to remember') || line.includes('3.')) currentSection = 'points';
      else if (lower.includes('exam questions') || line.includes('4.')) currentSection = 'questions';
      else if (line.trim().length > 0) {
        let cleanLine = line.replace(/^[\*\-\•\d\.]+\s*/, '').trim();
        if (currentSection === 'summary') {
          sections.summary += line + ' ';
        } else if (currentSection === 'topics') {
          sections.topics.push(cleanLine);
        } else if (currentSection === 'points') {
          sections.points.push(cleanLine);
        } else if (currentSection === 'questions') {
          sections.questions.push(cleanLine);
        } else {
           // fallback if section not caught
           sections.summary += line + ' ';
        }
      }
    });

    return sections;
  };

  const summarize = async () => {
    if (!audioFile) {
      alert('Please record or upload an audio file first.');
      return;
    }
    setLoading(true);
    setSummaryData(null);

    try {
      const getBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
      });

      const base64Data = await getBase64(audioFile);
      const audioPart = {
        inlineData: {
          data: base64Data,
          mimeType: audioFile.type || 'audio/mp3',
        },
      };

      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = `
        You are a helpful education assistant. Your task is to summarize a class lecture.
        Based on the provided audio transcription, please provide a comprehensive summary with the following sections EXACTLY as titled:
        Class Summary: A short, paragraph-long summary of the main topics.
        Topics Taught: A bulleted list of the key concepts covered.
        Points to Remember: A bulleted list of the most important takeaways and key terms.
        Important Exam Questions: Three to five potential questions that could be on a test, based on the content.
      `;

      const result = await model.generateContent([prompt, audioPart]);
      const response = await result.response;
      const text = response.text();
      setSummaryData(parseSummary(text));
    } catch (error) {
      console.error('Error generating summary:', error);
      alert('Failed to generate summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Class Notes AI
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Record your lecture or upload an audio file to get a highly detailed, structured summary powered by AI.
        </p>
      </div>
      
      <div className="glass-panel" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <button 
            onClick={isRecording ? stopRecording : startRecording}
            className={`primary-button ${isRecording ? 'pulse-record' : ''}`}
          >
            {isRecording ? (
              <>
                <span style={{ width: '10px', height: '10px', background: 'white', borderRadius: '50%', display: 'inline-block' }}></span>
                Stop Recording
              </>
            ) : (
              <>
                🎙️ Start Recording
              </>
            )}
          </button>
          
          <div className="file-input-wrapper">
            <button className="secondary-button">
              📁 Upload Audio
            </button>
            <input 
              type="file" 
              accept="audio/*" 
              onChange={(e) => setAudioFile(e.target.files[0])}
            />
          </div>
        </div>

        {audioFile && (
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', display: 'inline-block', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent-hover)', marginRight: '10px' }}>🎵</span>
            {audioFile.name || 'Recorded Audio'}
          </div>
        )}

        <div style={{ marginTop: '1rem' }}>
          <button
            onClick={summarize}
            disabled={loading || !audioFile}
            className="primary-button"
            style={{ width: '100%', maxWidth: '300px' }}
          >
            {loading ? 'Summarizing...' : '✨ Generate Summary'}
          </button>
        </div>
      </div>

      {summaryData && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel">
            <h2 className="section-title">Class Summary</h2>
            <div className="summary-content">{summaryData.summary.replace(/class summary:?\s*/i, '')}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel">
              <h2 className="section-title">Topics Taught</h2>
              <ul className="summary-list summary-content">
                {summaryData.topics.length > 0 ? summaryData.topics.map((item, i) => (
                  <li key={i}>{item}</li>
                )) : <li>No specific topics detected.</li>}
              </ul>
            </div>

            <div className="glass-panel">
              <h2 className="section-title">Points to Remember</h2>
              <ul className="summary-list summary-content">
                {summaryData.points.length > 0 ? summaryData.points.map((item, i) => (
                  <li key={i}>{item}</li>
                )) : <li>No specific points detected.</li>}
              </ul>
            </div>
          </div>

          <div className="glass-panel">
            <h2 className="section-title">Important Exam Questions</h2>
            <ul className="summary-list summary-content">
              {summaryData.questions.length > 0 ? summaryData.questions.map((item, i) => (
                <li key={i}>{item}</li>
              )) : <li>No specific questions detected.</li>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}