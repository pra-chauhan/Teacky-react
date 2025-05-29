import React, { useState } from "react";
import img2 from '../assets/faqs.jpg'

const faqs = [
  "Timeless Design",
  "Timeless Design",
  "Timeless Design",
  "Timeless Design",
  "Timeless Design",
  "Timeless Design",
  "Timeless Design",
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f4f0e8] min-h-screen text-[#1c1c1c]">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-gray-500 text-lg font-medium mb-2">FAQs</h3>
        <h1 className="text-4xl font-bold mb-8">Frequently Asked <br></br> Questions?</h1>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <img
            src={img2}
            alt="FAQ Table"
            className="rounded-lg w-full h-auto object-cover"
          />

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-lg shadow flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{item}</span>
                <span className="text-xl font-bold text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
