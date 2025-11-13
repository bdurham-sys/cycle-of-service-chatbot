'use client';

import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import ChatInterface from '@/components/ChatInterface';
import OutputDisplay from '@/components/OutputDisplay';

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    content: string;
  } | null>(null);
  const [generatedSOP, setGeneratedSOP] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">
            Apprenti Cycle of Service Builder
          </h1>
          <p className="text-gray-600">
            Create exceptional Cycles of Service with built-in WOW moments and measurable actions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Upload and Chat */}
          <div className="space-y-6">
            <FileUpload 
              onFileUploaded={setUploadedFile}
              isProcessing={isProcessing}
            />
            
            <ChatInterface 
              uploadedFile={uploadedFile}
              onSOPGenerated={setGeneratedSOP}
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
            />
          </div>

          {/* Right Column - Output */}
          <div>
            <OutputDisplay 
              generatedSOP={generatedSOP}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
