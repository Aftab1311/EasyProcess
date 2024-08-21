import React from "react";
import Heading from "./Heading";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {};

const qaArray = [
  {
    question: "Besides TAM/SAM/SOM, what other market sizing metrics are important?",
    answer: `
Customer Acquisition Cost (CAC): The cost of acquiring a new customer. It helps you understand the efficiency of your marketing and sales efforts.
CAC = Total Customer Acquisition Costs / Number of Customers Acquired
Example: Imagine your company spends ₹100,000 on marketing and sales campaigns in a quarter, acquiring 100 new customers. Your CAC would be ₹1,000 (₹100,000 / 100).

Customer Lifetime Value (CLTV): CLTV represents the total revenue a customer generates throughout their relationship with your business. It helps you understand the long-term value of your customers. There are various CLTV calculation methods, but a common one is:
CLTV = Average Revenue per User (ARPU) x Average Customer Lifespan
Example: Let's say your ARPU is ₹500 per month, and the average customer stays with you for 2 years (24 months). Your CLTV would be ₹12,000 (₹500/month x 24 months).

Market Share: Market share reflects your company's portion of the total market compared to competitors. It indicates your position within the industry.
Market Share = Your Company's Revenue / Total Market Revenue
Example: Suppose your company generates ₹1 million in revenue in a month, and the total market revenue for your industry is ₹10 million that month. Your market share would be 10% (₹1 million / ₹10 million).

Customer Acquisition Rate (CAR): CAR indicates the rate at which you acquire new customers over a specific period. It helps you gauge the effectiveness of your customer acquisition strategies.
CAR = Number of New Customers Acquired / Time Period (e.g., Month, Quarter, Year)
Example: If you acquire 50 new customers in a month, your CAR for that month would be 50 customers.

Average Revenue Per User (ARPU): ARPU represents the average revenue generated from each customer over a specific period. It helps you understand the revenue potential of your customer base.
ARPU = Total Revenue / Number of Customers
Example: If your company generates ₹50,000 in revenue in a month from 100 customers, your ARPU would be ₹500 (₹50,000 / 100).
      `
  },
  {
    question: "What does 'investor readiness' mean, and why is it crucial before seeking funding?",
    answer: `
Being 'investor-ready' means your startup is prepared to attract investment. It involves having a solid business plan, clear financials with timely compliances, a well-defined market opportunity, and a strong team. This demonstrates professionalism and increases your chances of success.
      `
  },
  {
    question: "What's the best way to track my startup's burn rate?",
    answer: `
Burn rate is a crucial metric for startups and early-stage businesses. It measures the rate at which a company is depleting its cash reserves to fund its operations. Understanding your burn rate helps you determine how long your cash runway will last and make informed decisions about funding, spending, and growth strategies.

There are two main ways to calculate burn rate:
1. Gross Burn Rate: This reflects your total operating expenses over a specific period.
 Gross Burn Rate = Total Cash Outflows (Expenses) / Time Period (e.g., Month, Quarter)
 
2. Net Burn Rate: This considers both your cash outflows (expenses) and cash inflows (revenue) to show the net cash used to fund operations.
 Net Burn Rate = Total Cash Outflows (Expenses) - Total Cash Inflows (Revenue) / Time Period (e.g., Month, Quarter)
 
Example: Let's say a startup has ₹200,000 in monthly expenses and generates ₹50,000 in monthly revenue.
- Gross Burn Rate: Their gross burn rate would be ₹200,000 per month.
- Net Burn Rate: Their net burn rate would be ₹150,000 per month (₹200,000 expenses - ₹50,000 revenue).
      `
  },
  {
    question: "What essential documents should a business have prepared when seeking funding from investors or venture capital firms?",
    answer: `
- Executive Summary: A concise overview of your business, product, market, and funding request.
- Business Plan: A detailed roadmap outlining your strategy, financials, and growth goals.
- Pitch Deck: A compelling presentation summarizing your business for investors.
- Financial Statements: Audited financials (if available) or well-constructed projections.
- Projections and Valuations: Projections and valuations attempt to predict a company's future financial health and worth, crucial for attracting investors.
- Legal Documents: Incorporation documents, capitalization table, and any relevant agreements.
      `
  },
  {
    question: "What types of questions do investors typically ask during due diligence?",
    answer: `
- Market Opportunity: Investors will delve deep into your understanding of the target market, its size, and your competitive advantage.
- Product/Service: They'll assess your product or service's functionality, uniqueness, and development roadmap.
- Financial Projections: Investors will scrutinize your financial forecasts, revenue model, and burn rate.
- Team Expertise: Expect questions about your team's experience, capabilities, and ability to execute the plan.
- Go-to-Market Strategy: Investors will want to understand how you plan to reach your target customers and acquire market share.
      `
  },
  {
    question: "What matters the most in a pitch deck or essentials of a pitch deck?",
    answer: `
A Winning Cheat Sheet For Your Startup's Investor Deck. After 200+ pitches that raised $1.5M - here's our secret formula!

It's All About The Story - Stories inspire, captivate, resonate and influence!— isn't that what you want for fundraising or sales?

Typical structure:
- Your logo, vision, mission
- The Problem - The “Villain”
- Transition from Problem - With some Statistics
- The Solution - The "Hero”
- Demo of the Solution or how solution works
- USPs
- Current Status / Traction
- Market Analysis
- Competitive Landscape
- Business Model
- Go To Market
- Team
- Business plan - The Hero's Plan of Action
- Funding Requirement
- Key Investment merits - that prove you are an attractive and timely investment
      `
  }
];


export default function FAQs({ }: Props) {
  return (
    <div className="py-12">
      <Heading>
        FAQs
      </Heading>
      <h2 className="text-xl text-center font-semibold text-gray-900">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-screen-xl mx-auto">
        {qaArray.map((qa, index) => (
          <details
            className="group border-b-2 border-black  p-6 [&_summary::-webkit-details-marker]:hidden"
            key={index}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-xl underline font-medium text-gray-900">
                {qa.question}
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <MdKeyboardArrowDown size={30} className="shrink-0 transition duration-300 group-open:-rotate-180" />
              </span>
            </summary>

            <div className="mt-4 leading-relaxed text-gray-700">
              {qa.answer.split('\n').map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
