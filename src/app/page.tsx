"use client";
import { useState } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [slug, setSlug] = useState("");
  const [qrSrc, setQrSrc] = useState("");

 const generateQR = async () => {
  if (!slug) return;

  // Use the Vercel URL if it exists, otherwise fallback to the current window origin
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
  const url = `${baseUrl}/u/${slug}`;

  try {
    const dataUrl = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
    });
    setQrSrc(dataUrl);
  } catch (err) {
    console.error(err);
  }
};

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h2 className="text-3xl font-bold mb-6">QR Card Generator</h2>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <input 
          type="text" 
          placeholder="Enter username (e.g. john-doe)" 
          className="border p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSlug(e.target.value)}
        />
        <button 
          onClick={generateQR}
          className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
        >
          Generate QR Code
        </button>
      </div>

      {qrSrc && (
        <div className="mt-10 p-4 border rounded-xl bg-gray-50 flex flex-col items-center">
          <img src={qrSrc} alt="QR Code" className="w-64 h-64" />
          <p className="mt-2 text-sm text-gray-500">Scan to view profile</p>
          <a 
            href={qrSrc} 
            download={`${slug}-qr.png`}
            className="mt-4 text-blue-600 underline"
          >
            Download Image
          </a>
        </div>
      )}
    </main>
  );
}