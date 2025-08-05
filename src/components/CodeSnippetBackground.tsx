import { useState, useEffect } from 'react';

const snippets = [
  'function greet(name: string) {',
  '  console.log(`Hello, ${name}!`);',
  '}',
  'const myVar = 42;',
  'const arr = [1, 2, 3];',
  'const obj = { key: "value" };',
  '// This is a comment',
  'import React from "react";',
  'export default function App() {',
  '  return <h1>Hello</h1>;',
  '}',
];

const CodeSnippetsBackground = () => {
  const [randomSnippets, setRandomSnippets] = useState<any[]>([]);

  useEffect(() => {
    const generatedSnippets = snippets.map((snippet) => ({
      snippet,
      // Změna je zde! Zúžíme rozsah na 5 % až 95 %
      top: `${Math.random() * 90 + 5}%`,
      left: `${Math.random() * 90 + 5}%`,
      rotate: `${Math.random() * 90 - 45}deg`,
      delay: `${Math.random() * 1}s`,
      size: `${Math.random() * (1.2 - 0.8) + 0.8}rem`,
    }));
    setRandomSnippets(generatedSnippets);
  }, []);

  return (
    <div className="absolute inset-0 z-10"> {/* Odebrali jsme overflow-hidden z tohoto divu */}
      {randomSnippets.map((item, index) => (
        <pre
          key={index}
          className="absolute font-mono text-gray-400 text-opacity-20 whitespace-pre pointer-events-none"
          style={{
            top: item.top,
            left: item.left,
            transform: `rotate(${item.rotate})`,
            fontSize: item.size,
          }}
        >
          {item.snippet}
        </pre>
      ))}
    </div>
  );
};

export default CodeSnippetsBackground;