import React from "react";
import { FaLightbulb, FaCogs, FaEdit, FaDownload } from "react-icons/fa";
import "../../assets/css/how.css";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Share Your Concept",
      description:
        "Begin by sharing your video concept with us. Simply fill out our form with your ideas and requirements.",
    },
    {
      number: "2",
      title: "AI-Driven Video Creation",
      description:
        "Our AI technology takes your concept and generates a script & visual preview, crafting scenes that align with your vision.",
    },
    {
      number: "3",
      title: "Review & Customize",
      description:
        "Review the AI-generated video and let us know any changes. We customize scenes to perfectly match your expectations.",
    },
    {
      number: "4",
      title: "Approve & Download",
      description:
        "Once satisfied, approve the final video and download it in high quality, ready to share across all platforms.",
    },
  ];

  return (
    <section className="how-it-works flex flex-col items-center w-full p-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">
        How It Works
      </h2>
      <div className="w-full max-w-3xl">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start relative mb-8">
            {/* Number Circle */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold text-lg rounded-full">
                {step.number}
              </div>
              {index !== steps.length - 1 && (
                <div className="w-1 h-16 bg-blue-500"></div>
              )}
            </div>
            {/* Text Content */}
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-blue-300">
                {step.title}
              </h3>
              <p className="text-gray-300 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#request-quote"
        className="mt-2 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Request a Quote
      </a>
    </section>
  );
}
