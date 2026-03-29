// "use client";
// import { useState } from "react";
// import QRCode from "qrcode";

// export default function Home() {
//   const [slug, setSlug] = useState("");
//   const [qrSrc, setQrSrc] = useState("");

//  const generateQR = async () => {
//   if (!slug) return;

//   // Use the Vercel URL if it exists, otherwise fallback to the current window origin
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
//   const url = `${baseUrl}/u/${slug}`;

//   try {
//     const dataUrl = await QRCode.toDataURL(url, {
//       width: 300,
//       margin: 2,
//     });
//     setQrSrc(dataUrl);
//   } catch (err) {
//     console.error(err);
//   }
// };

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
//       <h2 className="text-3xl font-bold mb-6">QR Card Generator</h2>
      
//       <div className="flex flex-col gap-4 w-full max-w-xs">
//         <input 
//           type="text" 
//           placeholder="Enter username (e.g. john-doe)" 
//           className="border p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => setSlug(e.target.value)}
//         />
//         <button 
//           onClick={generateQR}
//           className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
//         >
//           Generate QR Code
//         </button>
//       </div>

//       {qrSrc && (
//         <div className="mt-10 p-4 border rounded-xl bg-gray-50 flex flex-col items-center">
//           <img src={qrSrc} alt="QR Code" className="w-64 h-64" />
//           <p className="mt-2 text-sm text-gray-500">Scan to view profile</p>
//           <a 
//             href={qrSrc} 
//             download={`${slug}-qr.png`}
//             className="mt-4 text-blue-600 underline"
//           >
//             Download Image
//           </a>
//         </div>
//       )}
//     </main>
//   );
// }
"use client";
import { useState, useRef } from "react";
import QRCode from "qrcode";
import { Upload, RefreshCw, Download } from "lucide-react";

export default function Home() {
  const [slug, setSlug] = useState("");
  const [qrSrc, setQrSrc] = useState("");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setLogoPreview(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generateQR = async () => {
    if (!slug) return alert("Please enter a username first!");
    const canvas = canvasRef.current;
    if (!canvas) return;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
    const url = `${baseUrl}/u/${slug}`;

    try {
      await QRCode.toCanvas(canvas, url, {
        width: 1000, 
        margin: 2,
        errorCorrectionLevel: 'H',
        color: { dark: "#000000", light: "#ffffff" }
      });

      const ctx = canvas.getContext("2d");
      if (ctx && logoPreview) {
        const img = new Image();
        img.src = logoPreview;
        await new Promise((resolve) => (img.onload = resolve));

        const size = canvas.width * 0.22;
        const x = (canvas.width - size) / 2;
        const y = (canvas.height - size) / 2;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x - 10, y - 10, size + 20, size + 20);

        ctx.drawImage(img, x, y, size, size);
      }

      setQrSrc(canvas.toDataURL("image/png"));
    } catch (err) {
      console.error("QR Generation Error:", err);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">QR Designer</h1>
          <p className="text-slate-400 text-sm">Create branded digital card links</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Profile Slug</label>
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full border-2 border-slate-100 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Logo</label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 p-4 rounded-2xl border-2 border-dashed border-slate-300 transition-all">
                <Upload size={18} />
                <span className="text-sm font-semibold">Choose File</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              </label>

              {logoPreview && (
                <div className="relative w-16 h-16 rounded-xl border-2 border-blue-100 overflow-hidden shadow-sm bg-white p-1">
                  <img src={logoPreview} alt="Preview" className="w-full h-full object-contain rounded-lg" />
                  <button 
                    onClick={() => setLogoPreview(null)}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5"
                  >
                    <RefreshCw size={10} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={generateQR}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
          >
            Generate Branded QR
          </button>
        </div>

        <canvas ref={canvasRef} style={{ display: "none" }} />

        {qrSrc && (
          <div className="pt-8 border-t border-slate-100 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-4 bg-white rounded-2xl shadow-inner border border-slate-50">
              <img src={qrSrc} alt="Final QR" className="w-56 h-56" />
            </div>
            <a 
              href={qrSrc} 
              download={`${slug}-branded-qr.png`}
              className="mt-6 flex items-center gap-2 text-blue-600 font-bold hover:underline"
            >
              <Download size={20} />
              Download PNG
            </a>
          </div>
        )}
      </div>
    </main>
  );
}