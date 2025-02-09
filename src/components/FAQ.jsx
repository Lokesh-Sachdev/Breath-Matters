"use client";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
      answer:
        "No prior experience is needed. The CapnoTrainer® GO is designed to meet you where you are, whether you're new to breathing work or an experienced practitioner.",
    },
    {
      question:
        "Is it safe to use for health conditions like asthma or anxiety?",
      answer:
        "Yes, the CapnoTrainer® GO is safe for most health conditions. However, we recommend consulting with your healthcare provider before starting any new breathing practice.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Order your device, and you'll receive a FREE personalized breathing evaluation plan. Our team will guide you through setup and your first session.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-[40px] font-bold text-center text-black spectral mb-12">
          FAQs
        </h1>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg border-blue-300"
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button
                className="w-full px-6 py-3 h-[53px] text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-blue-500">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  width="23"
                  height="14"
                  viewBox="0 0 23 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.89919 13.0871L-0.000564546 3.18739L2.47393 0.712891L11.1364 9.37539L19.7989 0.712891L22.2734 3.18739L12.3737 13.0871C12.0455 13.4152 11.6005 13.5995 11.1364 13.5995C10.6724 13.5995 10.2274 13.4152 9.89919 13.0871Z"
                    fill="#008080"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-10 pt-5 text-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
