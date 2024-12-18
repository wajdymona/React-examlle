// app/layout.tsx
import React from 'react';
import './globals.css'; // تأكد من استيراد الـ CSS

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl">My Next.js App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-yellow-300">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300">About</a></li>
              <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="p-6">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 My Company</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
