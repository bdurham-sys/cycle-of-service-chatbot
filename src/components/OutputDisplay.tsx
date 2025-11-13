'use client';

import { useState } from 'react';

interface OutputDisplayProps {
  generatedSOP: string | null;
  isProcessing: boolean;
}

export default function OutputDisplay({ generatedSOP, isProcessing }: OutputDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (generatedSOP) {
      navigator.clipboard.writeText(generatedSOP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!generatedSOP) return;

    // Convert markdown to a more Word-friendly format
    const wordContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
    h1 { color: #1e3a8a; border-bottom: 3px solid #1e3a8a; padding-bottom: 10px; }
    h2 { color: #3b82f6; margin-top: 20px; }
    h3 { color: #6366f1; }
    .wow-moment { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 10px; margin: 10px 0; }
    .measurable-action { background-color: #dbeafe; border-left: 4px solid #3b82f6; padding: 10px; margin: 10px 0; }
    .wow-moment::before { content: "✨ WOW MOMENT: "; font-weight: bold; color: #f59e0b; }
    .measurable-action::before { content: "📊 MEASURABLE ACTION: "; font-weight: bold; color: #3b82f6; }
  </style>
</head>
<body>
${formatForWord(generatedSOP)}
</body>
</html>`;

    const blob = new Blob([wordContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cycle-of-service.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatForWord = (text: string): string => {
    // Convert markdown-style formatting to HTML
    let html = text
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/^## (.+)$/gm, '<h2>$2</h2>')
      .replace(/^### (.+)$/gm, '<h3>$3</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/✨ WOW MOMENT:(.+?)(?=\n|$)/g, '<div class="wow-moment">$1</div>')
      .replace(/📊 MEASURABLE ACTION:(.+?)(?=\n|$)/g, '<div class="measurable-action">$1</div>');
    
    return `<p>${html}</p>`;
  };

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-indigo-900 mt-6 mb-4 border-b-2 border-indigo-200 pb-2">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-indigo-800 mt-5 mb-3">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-indigo-700 mt-4 mb-2">{line.substring(4)}</h3>;
      }

      // WOW Moments (with special styling)
      if (line.includes('✨ WOW MOMENT:')) {
        return (
          <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3 rounded-r">
            <p className="text-yellow-900 font-semibold">{line}</p>
          </div>
        );
      }

      // Measurable Actions (with special styling)
      if (line.includes('📊 MEASURABLE ACTION:')) {
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-4 my-3 rounded-r">
            <p className="text-blue-900 font-semibold">{line}</p>
          </div>
        );
      }

      // Bullet points
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
      }

      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-2">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        );
      }

      // Regular paragraph
      if (line.trim()) {
        return <p key={index} className="mb-2">{line}</p>;
      }

      // Empty line
      return <br key={index} />;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          📋 Generated SOP
        </h2>
        
        {generatedSOP && (
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📥 Download Word
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto border border-gray-200 rounded-lg p-6 bg-gray-50">
        {isProcessing && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
              <p className="text-gray-600">Generating your Cycle of Service...</p>
            </div>
          </div>
        )}

        {!isProcessing && !generatedSOP && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg">Your generated SOP will appear here</p>
              <p className="text-sm mt-2">Upload a document and ask the AI to create or review a Cycle of Service</p>
            </div>
          </div>
        )}

        {!isProcessing && generatedSOP && (
          <div className="prose prose-indigo max-w-none">
            {renderMarkdown(generatedSOP)}
          </div>
        )}
      </div>

      {generatedSOP && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm text-green-800">
          <strong>Ready to use!</strong> You can copy this to Notion or download it as a Word document.
        </div>
      )}
    </div>
  );
}
