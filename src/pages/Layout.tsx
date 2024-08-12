import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  const textShadowStyle = {
    textShadow: '3px 3px 3px rgba(0, 0, 0, 0.4)'
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 页眉 */}
      <header className="flex-col bg-white text-bold text-black  p-4 md:sticky md:top-0 mb-0 ">
      <h1 className="text-center text-2xl mb-4 text-shadow" style={textShadowStyle}>SurvivorNo1's Website</h1>
      <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 p-4">
          <Link to="/" className="text-blue-600 hover:underline ">About Me</Link>
          <Link to="/Publications" className="text-blue-600 hover:underline">Publications</Link>
          <Link to="/photos" className="text-blue-600 hover:underline">Photos</Link>
          <Link to="/blogs" className="text-blue-600 hover:underline">Blogs</Link>
          <a
            href="https://github.com/SurvivorNo1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:liuyunjay@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </a>
          <a
            href="https://survivorno1.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Website
          </a>
          <a
            href="https://scholar.google.es/citations?user=uHzBHUsAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Scholar
          </a>
        </nav>
      </header>

      {/* 主体部分：侧边栏和内容 */}
      <div className=" flex flex-col flex-1 h-screen md:flex-row justify-center">
        {/* 头像和自我介绍 */}
        <div className="flex flex-col items-center p-4 md:sticky md:top-1/4 md:w-1/4 h-1/4">
          <img
            src="/jay.png"
            alt="Avatar"
            className="w-48 h-48 object-cover mb-4 filter drop-shadow-lg"
          />
          <p className="text-lg font-bold">Yunjie Liu </p>
          <p className="ml-2 mt-1 font-light text-sm">Think Twice Code Once</p>
          <p className="mt-2 text-black text-sm">A Master Student @ NUDT</p>
          <p className="text-black mt-2 text-sm">Location: Changsha, China</p>
        </div>
        {/* 内容部分 */}
        <div className="p-4 md:w-2/4">
          <main className="h-full">
            <Outlet />
          </main>
        </div>
      </div>
      {/* 页脚 */}
      <footer className="text-center py-4 text">
        <p>© 2024 SurvivorNo1. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
