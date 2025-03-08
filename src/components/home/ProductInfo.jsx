import React from "react";

const ProductInfo = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side - Video */}
        <div className="md:w-1/2 flex justify-center">
          <video
            src="/assets/video/product-demo.mp4"
            className="w-full max-w-lg rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6">
            Revolutionizing Video Production with AI
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Say goodbye to expensive and time-consuming traditional video
            production. Our AI-powered platform helps you create
            professional-grade visuals effortlessly—saving up to 90% in costs
            and time.
          </p>

          {/* Key Features */}
          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✅ AI-Driven Content Generation</li>
            <li>✅ High-Quality Video & Image Rendering</li>
            <li>✅ Customizable Styles & Themes</li>
            <li>✅ Quick & Cost-Effective</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
