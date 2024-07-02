"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    index: "01",
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition and packaging.",
  },
  {
    index: "02",
    question: "How can I track my order?",
    answer:
      "Once your order has shipped, we will send you an email with the tracking number and a link to the courier's website where you can track your package.",
  },
  {
    index: "03",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination.",
  },
  {
    index: "04",
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@example.com or call us at 1-800-123-4567. Our support team is available Monday to Friday, 9 AM to 5 PM.",
  },
  {
    index: "05",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also accept payments via PayPal.",
  },
  {
    index: "06",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination.",
  },
  {
    index: "07",
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@example.com or call us at 1-800-123-4567. Our support team is available Monday to Friday, 9 AM to 5 PM.",
  },
  {
    index: "08",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also accept payments via PayPal.",
  },
];

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <main className="h-full bg-secondaryBg rounded-xl py-14 px-8">
      <h1 className="text-4xl leading-[33.6px] tracking-[2.64px] uppercase mb-8">
        <strong>
          Frequently Asked <span className="text-blue">Questions</span>
        </strong>
      </h1>
      <section className="w-full">
        {faqs.map((faq) => (
          <div
            key={faq.index}
            className="mb-4 border-2 border-[rgba(21,35,41,1)] rounded-lg pl-10"
          >
            <div className="font-bold cursor-pointer list-none flex justify-between items-center">
              <span className="flex gap-3">
                <span>{faq.index}.</span> {faq.question}
              </span>
              <button
                type="button"
                onClick={() => toggleFAQ(faq.index)}
                className={`${
                  faq.index === expandedIndex
                    ? "bg-blue"
                    : "bg-[rgba(21,35,41,1)]"
                } px-6 py-5 text-xl rounded-tr-lg rounded-br-lg`}
              >
                {faq.index === expandedIndex ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            <div
              className={`${
                faq.index === expandedIndex ? "faq-answer-open" : "faq-answer"
              }`}
            >
              <p className="p-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
