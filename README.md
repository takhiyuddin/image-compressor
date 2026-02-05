# 🖼️ Image Compressor

**Image Compressor** is a modern web application that allows users to compress image files (JPG, PNG, WEBP, HEIC) instantly directly from the browser. Built with a strong focus on **privacy**, **speed**, and **aesthetics**.

![App Preview](https://via.placeholder.com/1200x600?text=Image+Compressor+App+Preview)
*(Replace the link above with a real screenshot of your application)*

---

## ✨ Key Features

- **🔒 100% Client-Side:** All compression processes happen locally in the user's browser. No images are uploaded to any server, ensuring complete data privacy and security.
- **⚡ Fast & Efficient:** Significantly reduces file size while maintaining excellent visual quality.
- **📂 Intuitive Drag & Drop:** A seamless User Experience (UX) allowing users to simply drag and drop files to process them.
- **📊 Real-time Statistics:** Displays original size, compressed size, and storage savings percentage instantly.
- **🎨 Modern & Responsive UI:**
  - Minimalist and elegant design.
  - Responsive Grid Layout (2 columns on desktop) for a neat and organized list.
  - Smooth animations using *Framer Motion*.
- **📥 Flexible Download:** Download compressed results individually with automatic file naming (`min-[original-name]`).

## 🛠️ Tech Stack

This project is built using the latest web technologies for maximum performance:

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Core Library:** [browser-image-compression](https://www.npmjs.com/package/browser-image-compression)

## 🚀 Getting Started (Local Development)

Follow these steps to run the project on your local machine:

### 1. Clone the Repository
Ensure you have Git installed, then run:

```bash
git clone [https://github.com/your-username/image-compressor.git](https://github.com/your-username/image-compressor.git)
cd image-compressor
2. Install Dependencies

Make sure Node.js is installed. Then install the required packages:

Bash
npm install
# or if using yarn
yarn install
# or if using pnpm
pnpm install
3. Run Development Server

Start the local server with the following command:

Bash
npm run dev
4. Open the Application

Open your favorite browser and navigate to: http://localhost:3000

📂 Project Structure
Here is an overview of the main folder structure to help you understand the codebase:

Plaintext
/image-compressor
├── app/
│   ├── globals.css      # Tailwind config & Global CSS
│   ├── layout.tsx       # Main application layout
│   └── page.tsx         # Main logic & UI for Image Compressor
├── components/          # Reusable UI components (if any)
├── lib/
│   └── utils.ts         # Helper functions (cn, formatBytes)
├── public/              # Static assets (images, favicons, etc.)
├── package.json         # Project dependencies
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
📦 Deployment
The easiest way to deploy this Next.js app is using Vercel:

Push your code to a GitHub/GitLab/Bitbucket repository.

Go to Vercel and create a New Project.

Import your repository.

Click Deploy.

Done! Your application is live.

🤝 Contributing
Contributions are always welcome! If you have ideas for new features or bug fixes:

Fork this repository.

Create a new feature branch (git checkout -b feature-cool).

Commit your changes (git commit -m 'Add some cool feature').

Push to the branch (git push origin feature-cool).

Open a Pull Request.

📄 License
Distributed under the MIT License. Feel free to use and modify it for personal or commercial purposes.

<div align="center"> <p>Made with ❤️ and ☕</p> <p><b>&copy; 2026 ./Takhiyuddin.com</b></p> </div>
