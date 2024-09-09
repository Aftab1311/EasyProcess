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
import { accountingFaqs } from "@/constants/faqs";
import { accountingItems } from "@/constants/carousel";
import Compilance from "@/components/Accounting";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Accounting = () => {
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
      <Hero items={accountingItems} />
      <WhyUs
        heading="Just Why Opt for EaseMyProcess?"
        subheading="We offer unique solutions tailored to your needs."
        imageSrc="/AccountingwhyUs.png"

        firstTitle="Save Money:"
        firstDescription="With astute bookkeeping, you can reduce your accounting and compliance expenses by 60%."
        secondTitle="Accurate Records:"
        secondDescription="Maintain flawless records and receive monthly financial statements that are easy to understand."
        thirdTitle="Easy Tax Filing:"
        thirdDescription="Accurate tax files help you avoid penalties and interest."
        fourthTitle="Financial Health"
        fourthDescription="Monitor and enhance the financial health of your company."
      />


      <Compilance/>
      <ContactUs />
      <Process />
      <Portfolio />
      <FAQs FaqTableData={accountingFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default Accounting;
