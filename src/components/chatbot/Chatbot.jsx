"use client";
import React, { useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Chatbot toggle state

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: `You said: "${input}". I'm still learning!`,
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setInput(""); // Clear input field
  };

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {/* Chatbot Icon (Animated) */}
      {!isOpen ? (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
          animate={{
            scale: [1, 1.2, 1], // Slight bounce effect
            rotate: [0, 5, -5, 0], // Small shake effect
            boxShadow: [
              "0px 0px 5px rgba(0, 120, 255, 0.3)",
              "0px 0px 15px rgba(0, 120, 255, 0.6)",
              "0px 0px 5px rgba(0, 120, 255, 0.3)",
            ],
          }}
          transition={{
            duration: 1,
            repeat: Infinity, // Keep repeating
            repeatDelay: 2, // Pause for 4 seconds before repeating
          }}
          whileHover={{ scale: 1.3 }} // Slight enlarge on hover
          whileTap={{ scale: 0.9 }} // Shrink when clicked
        >
          <FaRobot className="text-4xl" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-96 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-blue-500 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <FaRobot className="text-white text-2xl mr-2" />
              <h3 className="text-lg font-semibold">LoopAI Chatbot</h3>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-white text-xl" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-80 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex  mt-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs text-sm ${
                    msg.sender === "user" ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center p-3 border-t border-gray-700">
            <input
              type="text"
              className="flex-1 bg-gray-800 text-white px-3 py-3 rounded-lg outline-none text-base"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Updated from onKeyPress
            />
            <button
              className="ml-3 p-3 bg-blue-500 rounded-full text-white"
              onClick={sendMessage}
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
