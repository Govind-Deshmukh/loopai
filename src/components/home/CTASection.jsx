import React from "react";

const CTASection = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold">Ready to Transform Your Visuals?</h2>
        <p className="text-lg text-gray-300 mt-4">
          Boost engagement and cut production costs with AI-generated images and
          videos. Start creating stunning visuals effortlessly today!
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#get-started"
            className="bg-blue-200 text-black py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-500 transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="border border-white text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
