import React from "react";
import "../../assets/css/hero.css"; // Import custom styles

export default function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:text-left relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Visual Magic
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Turn your ordinary product photos into stunning, eye-catching
            visuals with AI. Cut production costs by 90%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
            <a
              href="#get-started"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="border border-white text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
