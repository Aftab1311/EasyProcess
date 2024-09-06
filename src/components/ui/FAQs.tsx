import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

type FAQProps = {
  FaqTableData: { question: string; answer: string }[];
  heading?: string;
};

export default function FAQs({ FaqTableData = [], heading }: FAQProps) {
  const [viewAll, setViewAll] = useState(false);
  const [showAtRender, setShowAtRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAtRender(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href') || "";
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const initialFAQsCount = 5;
  const displayedFAQs = viewAll ? FaqTableData : FaqTableData.slice(0, initialFAQsCount);

  return (
    <div className="py-12">
      <Heading>{heading || "FAQs"}</Heading>
      {/* <h2 className="text-xl text-center font-semibold text-gray-900">Frequently Asked Questions</h2> */}
      <div className="space-y-4 max-w-screen-xl mx-auto">
        {displayedFAQs.map((qa, index) => (
          <details
            className="group border-b-2 border-black p-6 [&_summary::-webkit-details-marker]:hidden"
            key={index}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-sm md:text-xl font-medium text-gray-900">
                {qa.question}
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <MdKeyboardArrowDown
                  size={30}
                  className="shrink-0 transition duration-300 group-open:-rotate-180"
                />
              </span>
            </summary>

            <div className="mt-4 leading-relaxed text-[12px] md:text-base text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: qa.answer }} />
            </div>
          </details>
        ))}
      </div>
      <Link
        href="#faq-section"
        onClick={(e) => handleScroll(e)}
        style={{ textDecoration: "none" }}
      >
        <p
          style={{
            color: "#d2042d",
            cursor: "pointer",
            marginTop: "3rem",
            font: "normal normal 500 1.6rem/2rem Inter",
            display:"flex",
            justifyContent:"center"
          }}
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? "View Less" : "View More"}
        </p>
      </Link>
    </div>
  );
}
