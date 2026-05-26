'use client';
import { useState, useRef } from 'react';
import { generateSummary } from './actions';

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
      const base64Audio = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result.split(',')[1];
          resolve(base64String);
        };
        reader.readAsDataURL(audioFile);
      });

      const summaryText = await generateSummary(base64Audio);
      setSummary(summaryText);
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
