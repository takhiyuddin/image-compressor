# 🖼️ Image Compressor

**Image Compressor** is a minimalist, high-performance web application designed to reduce image file sizes instantly within the browser. Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**, focusing on privacy and user experience.

![App Preview](https://via.placeholder.com/1200x600?text=App+Preview+Placeholder)
*(Replace this link with your actual screenshot)*

## ✨ Key Features

- **🔒 100% Client-Side Privacy:** No images are ever uploaded to a server. Compression happens entirely in the user's browser, ensuring maximum data security.
- **⚡ High Performance:** Efficiently compresses JPG, PNG, WEBP, and HEIC formats using multi-threading (Web Workers).
- **🎨 Minimalist UI:**
  - **5:3 Landscape Dropzone:** Aesthetic and spacious area for drag-and-drop interactions.
  - **Grid Layout:** Compressed results are displayed in a responsive 2-column grid.
  - **Clean Typography:** Focused on readability and whitespace.
- **📊 Smart Stats:** Instantly shows original size, compressed size, and storage savings percentage.
- **📥 Batch Processing:** Drag multiple images at once and download them individually.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Compression Engine:** [browser-image-compression](https://www.npmjs.com/package/browser-image-compression)

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone Repository
```bash
git clone [https://github.com/username/image-compressor.git](https://github.com/username/image-compressor.git)
cd image-compressor

### 2. Install Dependencies
```bash
npm install
# or
yarn install

### 3. Run Development Server
```bash
npm run dev

Open http://localhost:3000 with your browser to see the result.

