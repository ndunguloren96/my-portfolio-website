import React from "react";

export default function Hero() {
  return (
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
    </section>
  );
}