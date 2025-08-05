import { useState, useEffect } from 'react';
import CodeSnippetsBackground from './CodeSnippetBackground';

const phrases = [
  "Frontend Developer",
  "React Expert",
  "Student of Code",
  "Creative Problem Solver"
];

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      setCurrentText(
        isDeleting
          ? currentPhrase.substring(0, currentText.length - 1)
          : currentPhrase.substring(0, currentText.length + 1)
      );
      
      if (!isDeleting && currentText === currentPhrase) {
        setTypingSpeed(200);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingSpeed(100);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section 
      id="hero" 
      // Důležité je mít "relative" a "overflow-hidden"
      className="bg-gradient-to-br from-gray-300 to-gray-900 text-indigo-700 min-h-screen flex items-center justify-center p-8 relative overflow-hidden w-screen"
    >
      <CodeSnippetsBackground />
      
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-8xl font-bold">Ondřej Beránek</h1>
        <div className="mt-4 text-xl md:text-3xl font-mono min-h-[2.5rem]">
          <span className="text-blue-400 font-semibold">{currentText}</span>
          <span className="animate-pulse-cursor font-light">|</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;