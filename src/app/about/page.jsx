import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mt-10 mx-auto space-y-16">
        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-400">Who We Are</h2>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              At <span className="text-blue-400">LoopAI</span>, we are
              revolutionizing video production through AI. Our mission is to
              empower filmmakers, ad agencies, and storytellers with advanced AI
              tools that streamline production, enhance creativity, and reduce
              costs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/about1.jpg"
              alt="LoopAI Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-400">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              We aim to be the leading provider of AI-powered video tools,
              setting new standards in efficiency and storytelling. By
              integrating AI into video creation, we unlock limitless creative
              possibilities.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/about2.jpg"
              alt="LoopAI Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* How It Works - Horizontal Design */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-800 p-10 rounded-lg shadow-lg">
            {[
              {
                step: "1",
                title: "Share Your Concept",
                desc: "Begin by sharing your video concept with us. Simply fill out our form with your ideas and requirements.",
              },
              {
                step: "2",
                title: "AI-Driven Video Creation",
                desc: "Our AI technology generates a script & visual preview, crafting scenes that align with your vision.",
              },
              {
                step: "3",
                title: "Review & Customize",
                desc: "Review the AI-generated video and let us know any changes. We customize scenes to match your expectations.",
              },
              {
                step: "4",
                title: "Approve & Download",
                desc: "Once satisfied, approve the final video and download it in high quality, ready to share across all platforms.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="text-center mt-16">
          <h2 className="text-4xl font-bold text-blue-400">
            Watch Our AI in Action
          </h2>
          <p className="text-gray-300 text-lg mt-4">
            See how LoopAI simplifies video creation with artificial
            intelligence.
          </p>
          <div className="mt-6 flex justify-center">
            <iframe
              className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/6Jd_xOawPnQ"
              title="LoopAI Demo Video"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
            Request a Quote
          </button>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
