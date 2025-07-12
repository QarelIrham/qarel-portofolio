import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <main className="bg-black text-white font-sans min-h-screen">
      <header className="bg-red-600 py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Qarel Irham Hildry Java</h1>
        <p className="text-gray-200 mt-1">Mobile Development Enthusiast</p>
      </header>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-red-400 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'Flutter', 'Java', 'Kotlin', 'Dart'].map((skill) => (
            <span key={skill} className="bg-red-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-red-400 mt-8 mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="bg-zinc-900 p-4 rounded shadow">
            <h3 className="text-lg font-bold">Aplikasi Kasir (Tugas Kuliah)</h3>
            <p className="text-gray-300 text-sm">Aplikasi mobile sederhana menggunakan Java untuk pengelolaan transaksi kasir mini market.</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded shadow">
            <h3 className="text-lg font-bold">Todo List App (Tugas Kuliah)</h3>
            <p className="text-gray-300 text-sm">Aplikasi daftar tugas berbasis Flutter dengan fitur CRUD dan penyimpanan lokal.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-red-400 mt-8 mb-4">Contact</h2>
        <div className="flex items-center gap-2 text-sm">
          <FaGithub />
          <a href="https://github.com/QarelIrham" target="_blank" className="text-white underline">
            github.com/QarelIrham
          </a>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Qarel Irham. All rights reserved.
      </footer>
    </main>
  );
}
