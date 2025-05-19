const Hero = () => {
  return (
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
    </section>
  );
};

export default Hero;
