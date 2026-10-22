"use client";

import { useState } from "react";
import TextReveal from "@/components/TextReveal";

interface FAQItem {
  id: string;
  category: string;
  q: string;
  a: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    category: "Curriculum",
    q: "What curriculum does Brookfield International School follow?",
    a: "We offer an internationally recognised curriculum designed to develop critical inquiry scientific reasoning creativity and global awareness from early childhood through senior grades.",
  },
  {
    id: "02",
    category: "Values",
    q: "Is Islamic education an integral part of the curriculum?",
    a: "Yes Islamic Theology is integrated into our curriculum focusing on moral grounding ethics character building and spiritual development alongside academic excellence.",
  },
  {
    id: "03",
    category: "Curriculum",
    q: "How does Project Based Learning work in practice?",
    a: "Project Based Learning is an experiential methodology where learners solve authentic real world challenges through structured inquiry collaborative teamwork scientific experiments and creative presentations.",
  },
  {
    id: "04",
    category: "Robotics",
    q: "At what grade do students begin coding and robotics?",
    a: "Our purpose built Coding and Robotics Lab introduces students to algorithmic thinking visual programming and practical robotics starting from primary school levels onward.",
  },
  {
    id: "05",
    category: "Admissions",
    q: "What grade levels are currently open for admissions?",
    a: "We accept applications from early years kindergarten through higher primary and senior school levels for the upcoming academic session. Seats are allocated on a rolling basis following assessment.",
  },
  {
    id: "06",
    category: "Admissions",
    q: "How can parents apply for admission?",
    a: "Parents can complete the online admission enquiry form on this website or visit our administrative office at Achabal Anantnag for on campus registration and guided tours.",
  },
  {
    id: "07",
    category: "Admissions",
    q: "Is there an entrance evaluation or interaction for students?",
    a: "Depending on the grade level applied for a baseline interaction and assessment are conducted to understand each child learning style strengths and academic foundation.",
  },
  {
    id: "08",
    category: "Campus",
    q: "Where is the campus located and what safety protocols are in place?",
    a: "Our campus is situated on Thajiwara Road Achabal Anantnag. It features round the clock security surveillance secure transport routes purpose built labs and strict child safety guidelines.",
  },
];

const categories = ["ALL TOPICS", "CURRICULUM", "ADMISSIONS", "ROBOTICS", "VALUES"];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("ALL TOPICS");
  const [expandedId, setExpandedId] = useState<string | null>("01");

  const filteredFaqs =
    activeTab === "ALL TOPICS"
      ? faqData
      : faqData.filter(
          (f) =>
            f.category.toUpperCase() === activeTab ||
            (activeTab === "CURRICULUM" && (f.category === "Curriculum" || f.category === "Campus"))
        );

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="border-b border-white/10 bg-[#0b1f12] py-20 sm:py-24 text-white">
      <div className="container-x">
        {/* Section Header: Only Title & Balanced Subtext (No Badges) */}
        <div className="mb-10 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
          <TextReveal
            as="div"
            className="section-title text-white"
            text="Frequently Asked Questions"
            staggerMs={60}
            baseDelayMs={90}
          />
          <p
            className="reveal mt-3 max-w-xl mx-auto font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-white/70 [text-wrap:balance]"
            style={{ transitionDelay: "220ms" }}
          >
            Clear transparent answers regarding curriculum structure robotics laboratories admissions
            criteria and school policies.
          </p>

          {/* Interactive Category Filter Pills */}
          <div
            className="reveal mt-6 flex flex-wrap justify-center gap-2"
            style={{ transitionDelay: "320ms" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`rounded-none border px-3.5 py-1.5 font-['Nunito',sans-serif] text-[12px] font-normal uppercase tracking-wider transition-all ${
                  activeTab === cat
                    ? "border-[#c9f158] bg-[#c9f158] text-[#0b1f12]"
                    : "border-white/15 bg-white/5 text-white/75 hover:border-white/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Centered Compact Accordion List with Cascading Entrance */}
        <div className="reveal-stagger mx-auto max-w-3xl space-y-2.5">
          {filteredFaqs.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-none border transition-all duration-200 ${
                  isOpen
                    ? "border-[#c9f158]/60 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-3.5 sm:px-6 sm:py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Instrument_Sans',sans-serif] text-[16px] sm:text-[18px] font-normal leading-snug text-white">
                    {item.q}
                  </span>

                  {/* Sharp Compact Toggle Box with Smooth Rotation */}
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-none border text-[15px] font-normal transition-colors duration-300 ${
                      isOpen
                        ? "border-[#c9f158] bg-[#c9f158] text-[#0b1f12]"
                        : "border-white/20 bg-white/5 text-white/80"
                    }`}
                  >
                    <span
                      className={`inline-block transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>

                {/* Smooth Animated Height & Opacity Collapse Container */}
                <div className={`faq-collapse ${isOpen ? "is-open" : ""}`}>
                  <div className="faq-collapse-inner">
                    <div
                      className={`border-t border-white/10 px-5 py-4 sm:px-6 sm:py-4 bg-black/25 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-white/85">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
