"use client";

import { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";
import { Upload, X, Download, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, formatBytes } from "@/lib/utils";

interface CompressedImage {
  id: string;
  originalName: string;
  originalSize: number;
  compressedBlob: Blob;
  compressedSize: number;
  previewUrl: string;
}

export default function Home() {
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const handleFiles = useCallback(async (files: FileList | null) => {
    if (!files) return;
    setIsCompressing(true);

    const newImages: CompressedImage[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith("image/")) continue;

      try {
        const compressedFile = await imageCompression(file, options);

        newImages.push({
          id: Math.random().toString(36).substring(7),
          originalName: file.name,
          originalSize: file.size,
          compressedBlob: compressedFile,
          compressedSize: compressedFile.size,
          previewUrl: URL.createObjectURL(compressedFile),
        });
      } catch (error) {
        console.error("Gagal kompresi:", error);
      }
    }

    setImages((prev) => [...newImages, ...prev]);
    setIsCompressing(false);
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const downloadImage = (img: CompressedImage) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(img.compressedBlob);
    link.download = `min-${img.originalName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">

      {/* Header Minimalis */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Image Compressor
        </h1>
        <p className="text-lg text-neutral-500 max-w-lg mx-auto leading-relaxed">
          Kompresi gambar JPG, PNG, & WEBP secara instan di browser Anda.
          Tanpa upload server, privasi terjaga.
        </p>
      </div>

      {/* Area Upload (Dropzone) - Landscape 5:3 */}
      <div
        className={cn(
          // PERUBAHAN: aspect-[5/3] dan max-w-xl
          "relative group w-full max-w-xl aspect-[5/3] rounded-[2rem] border-2 border-dashed transition-all duration-300 ease-in-out flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-sm",
          dragActive
            ? "border-neutral-900 bg-neutral-100 scale-[1.02]"
            : "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={handleChange}
        />

        <div className="flex flex-col items-center gap-3 transition-transform duration-300 group-hover:-translate-y-1">
          <div className="p-3 bg-neutral-100 rounded-full group-hover:bg-neutral-200 transition-colors">
            {isCompressing ? (
              <div className="w-6 h-6 border-2 border-neutral-800 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Upload className="w-6 h-6 text-neutral-600" />
            )}
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-neutral-900">
              {isCompressing ? "Sedang memproses..." : "Klik atau seret gambar ke sini"}
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Mendukung PNG, JPG, WEBP, HEIC
            </p>
          </div>
        </div>
      </div>

      {/* List Hasil Kompresi */}
      <div className="w-full max-w-xl mt-10 grid grid-cols-1 gap-4">
        <AnimatePresence>
          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group relative bg-white rounded-[2rem] p-4 pr-5 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow flex items-center gap-5"
            >
              {/* Thumbnail Preview */}
              <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-100">
                <img
                  src={img.previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Informasi Detail - Full Vertikal Kebawah */}
              <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                {/* 1. Nama File */}
                <h3 className="text-sm font-semibold text-neutral-900 truncate">
                  {img.originalName}
                </h3>

                {/* 2. Ukuran Original */}
                <p className="text-xs text-neutral-400">
                  Original: {formatBytes(img.originalSize)}
                </p>

                {/* 3. Badge Hemat */}
                <div className="flex items-center mt-0.5">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Hemat {Math.round(((img.originalSize - img.compressedSize) / img.originalSize) * 100)}%
                  </div>
                </div>

                {/* 4. Ukuran Baru (Dibawah Hemat) */}
                <p className="text-sm font-bold text-neutral-900 mt-0.5">
                  {formatBytes(img.compressedSize)}
                </p>
              </div>

              {/* Tombol Aksi (Vertikal) */}
              <div className="flex flex-col gap-2 items-center justify-center pl-2">
                <button
                  onClick={() => downloadImage(img)}
                  className="p-2 bg-neutral-900 text-white rounded-xl hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-md shadow-neutral-200"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeImage(img.id)}
                  className="p-1.5 text-neutral-300 hover:text-red-500 hover:bg-red-50 rounded-full flex items-center justify-center transition-colors"
                  title="Hapus"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer Tanpa Highlight */}
      <footer className="mt-auto pt-20 pb-4 text-center">
        <p className="text-sm text-neutral-400 font-medium">
          &copy; 2026 ./Takhiyuddin.com
        </p>
      </footer>

    </main>
  );
}