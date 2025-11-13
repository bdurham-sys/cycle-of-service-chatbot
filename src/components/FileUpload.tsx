'use client';

import { useState, useRef } from 'react';
import mammoth from 'mammoth';

interface FileUploadProps {
  onFileUploaded: (file: { name: string; content: string }) => void;
  isProcessing: boolean;
}

export default function FileUpload({ onFileUploaded, isProcessing }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = async (file: File) => {
    setUploadedFileName(file.name);

    try {
      if (file.name.endsWith('.docx')) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        onFileUploaded({ name: file.name, content: result.value });
      } else if (file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
        const text = await file.text();
        onFileUploaded({ name: file.name, content: text });
      } else {
        alert('Please upload a .docx, .txt, or .csv file');
        setUploadedFileName(null);
      }
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Error reading file. Please try again.');
      setUploadedFileName(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📄 Upload Document
      </h2>
      
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-all duration-200
          ${isDragging 
            ? 'border-indigo-500 bg-indigo-50' 
            : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".docx,.txt,.csv"
          onChange={handleFileInput}
          className="hidden"
          disabled={isProcessing}
        />
        
        <div className="text-4xl mb-4">📁</div>
        
        {uploadedFileName ? (
          <div>
            <p className="text-green-600 font-semibold mb-2">✓ File Uploaded</p>
            <p className="text-gray-600 text-sm">{uploadedFileName}</p>
            <p className="text-gray-400 text-xs mt-2">Click to upload a different file</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 font-semibold mb-2">
              Drag & drop your document here
            </p>
            <p className="text-gray-400 text-sm">
              or click to browse
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Supports: .docx, .txt, .csv
            </p>
          </div>
        )}
      </div>

      {uploadedFileName && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Ready to analyze!</strong> Ask questions about your document or request a Cycle of Service review.
          </p>
        </div>
      )}
    </div>
  );
}
