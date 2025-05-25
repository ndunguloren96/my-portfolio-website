import React from "react";

export default function Hero() {
  return (
<<<<<<< HEAD
    <section className="w-full py-20 md:py-28 bg-[#101624] text-white flex flex-col justify-between min-h-[80vh]">
      {/* Top Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-[#2ee59d]">Loren Ndung'u</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-300">
          Backend Developer | Python Specialist <br /> Building scalable,
          efficient systems.
        </p>
        <div className="flex justify-center">
          <a
            href="/portfolio"
            className="px-6 py-3 bg-[#2ee59d] text-[#101624] rounded-lg font-semibold hover:bg-[#24c98a] transition"
          >
            View Projects
          </a>
        </div>
      </div>
=======
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Hi, I’m Loren Ndung'u</h2>
      <p className="text-lg text-gray-600 mb-6">
        A Computer Science student & aspiring backend developer. I build modern digital experiences.
      </p>
      <a
        href="#projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        View My Work
      </a>
>>>>>>> 39f6e7a1924b32f5d4fdffe84637ea4c1a3dbd34
    </section>
  );
}
