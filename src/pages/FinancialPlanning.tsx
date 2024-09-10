import React from "react";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import Head from "next/head";
import WhyUs from "@/components/ui/WhyUs";
import HomeService from "@/components/HomeService";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/ui/navbar";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import FAQs from "@/components/ui/FAQs";
import Footer from "@/components/ui/footer";
import { financialPlanningFaqs } from "@/constants/faqs";
import { financialItems } from "@/constants/carousel";
import Planning from "@/components/Planning";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const FinancialPlanning = () => {
  return (
    <main
      className={`flex flex-col overflow-x-hidden bg-white min-h-screen w-full ${poppins.className}`}
    >
      <Head>
        <meta
          name="title"
          content="Ease My Process: Bookkeeping, Accounting, Taxation and Advisory Firm"
        />
        <meta
          name="description"
          content="Assisting small to mid-size businesses and CPA firms to streamline bookkeeping, accounting, payroll and tax calculation. We make sure to help Businesses and CPA firms run efficiently."
        />
        <meta
          name="keywords"
          content="Bookkeeping, Auditing, CPA, Business, Firms, tax, tax calculation, payroll, tax advisory, accounting"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Ease My Process" />
        <title>Ease My Process</title>
      </Head>
      <Navbar />
      <Hero items={financialItems} />
      <WhyUs
        heading="Just Why Opt for EaseMyProcess?"
        subheading="We offer unique solutions tailored to your needs."
        imageSrc="/FinancialPlanningWhyus.png"

        firstTitle="Save Time:"
        firstDescription="Replicated duties take up a lot of an employee's time. Each month, our tools save more than 20 hours."
        secondTitle="Boost Accuracy:"
        secondDescription="Obtain accurate financial data and personalized dashboards."
        thirdTitle="Boost Efficiency"
        thirdDescription="With our Excel training, team productivity can rise by as much as 60%."
        fourthTitle="Make Wise Choices:"
        fourthDescription="Examine expenses to develop more effective pricing plans."
        fifthTitle="Grow Quicker:"
        fifthDescription="To increase sales and profits, comprehend pricing, rivalry, and customer profitability."
      />
      <Planning/>
      <ContactUs />
      <Process />
      <Portfolio />
      <FAQs FaqTableData={financialPlanningFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default FinancialPlanning;
