"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What types of yoga classes do you offer?",
      answer:
        "We offer various yoga classes including Hatha, Vinyasa, and Restorative yoga.",
    },
    {
      question: "Do I need any prior experience to join your fitness programs?",
      answer:
        "No prior experience is necessary. Our programs are suitable for all levels.",
    },
    {
      question: "How do I book a personalized coaching session?",
      answer:
        "You can book a session through our online portal or by contacting our front desk.",
    },
    {
      question: "What should I bring to a yoga class?",
      answer:
        "Please bring a yoga mat, comfortable clothing, and water bottle.",
    },
    {
      question: "Are your nutritional plans tailored to individual needs?",
      answer:
        "Yes, our nutritional plans are customized based on your goals and requirements.",
    },
    {
      question: "How often are wellness workshops held?",
      answer: "We host wellness workshops on a monthly basis.",
    },
  ];

  return (
    <div className=" bg-[#1B392A] p-8 md:p-16">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="mb-12 lg:mb-0">
          <h2 className="text-white text-5xl font-light mb-3">
            Frequently{" "}
            <span className="italic font-light text-[#C5B178]">asked</span>
            <span className="block">questions</span>
          </h2>
          <p className="text-white/80 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left text-white hover:opacity-80 transition-opacity"
              >
                <span className="text-lg font-light pr-8">{item.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="pb-6 text-white/70 font-light">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
