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
import { valuationFaqs } from "@/constants/faqs";
import { valuationItems } from "@/constants/carousel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Valuation = () => {
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
      {/* <Hero /> */}
      <Hero items={valuationItems} />
      <WhyUs
        heading="Why Opt for Us?"
        subheading="Our company using tried-and-true techniques."
        imageSrc="/valuationWhyUs.png"
        firstTitle="Data-Driven Insights:"
        firstDescription="Extensive investigation and analysis form the basis of our valuations.
Our team comprises experts with over ten years of experience working in leading consulting organizations.
"
        secondTitle="Reliable Reports Approved by Big Accounting Firms:"
        secondDescription="This indicates that investors trust our reports."
      />

      <HomeService />
      <ContactUs />
      <Process />
      <Portfolio />
      <FAQs FaqTableData={valuationFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default Valuation;
