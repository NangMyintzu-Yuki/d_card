'use client';

import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
import Image from 'next/image'; // Import Next.js Image component

export default function UploadForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<any>(null); // Store the full blob object
  const [loading, setLoading] = useState(false);

  const handleUploadClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputFileRef.current?.files) return;

    setLoading(true);
    const file = inputFileRef.current.files[0];

    try {
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });

      setBlob(newBlob);
    } catch (error) {
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 border rounded-xl shadow-sm bg-white">
      <form onSubmit={handleUploadClick} className="flex flex-col gap-4 w-full max-w-sm">
        <label className="text-sm font-medium text-gray-700">Upload Profile Picture</label>
        <input 
          name="file" 
          ref={inputFileRef} 
          type="file" 
          accept="image/*"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          required 
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition disabled:opacity-50"
        >
          {loading ? 'Uploading...' : 'Save Image'}
        </button>
      </form>

      {/* --- PREVIEW SECTION --- */}
      {blob && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="text-sm text-green-600 font-medium">Upload Successful!</p>
          <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-gray-100 shadow-md">
            <Image
              src={blob.url}
              alt="Uploaded preview"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <p className="text-xs text-gray-400 truncate max-w-[200px]">{blob.url}</p>
        </div>
      )}
    </div>
  );
}