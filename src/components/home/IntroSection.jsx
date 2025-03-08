import React from "react";

const IntroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6">
            What is LoopAI?
          </h2>
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
            LoopAI is an AI-powered video and image generation platform that
            transforms product photos into stunning visuals. Whether you're in
            e-commerce, fashion, or real estate, we help you create high-quality
            content effortlessly, reducing production costs by 90%.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/images/editor.jpg"
            alt="AI-powered visuals"
            className="w-full max-w-md rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
