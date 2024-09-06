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
import { homeFaqs, pitchDeckFaqs } from "@/constants/faqs";
import { pitchItems } from "@/constants/carousel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const PitchDeck = () => {
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
      <Hero items={pitchItems} />
      <WhyUs
        heading="Why Decide on Us?"
        subheading="We offer unique solutions tailored to your needs."
        imageSrc="/bulb-main.svg"
        firstTitle="Increase Your Chances by 75%:"
        firstDescription="We Draft Excellent Business Plans, Financial Models, Pitch Decks, and Teasers. Our team of experts consists of consultants, experts in PowerPoint, designers, and advisors on branding."
        secondTitle="Market Research: "
        secondDescription="Our team conducts comprehensive studies on market size, trends, and rivals."
        thirdTitle="Comprehensive Financial Models:"
        thirdDescription="Our forecasts and insights are explained in detail.
Years of Experience: We've been creating presentations that wow investors, draw in clients, and advance your business for more than ten years. 
"
      />

      <HomeService />
      <ContactUs />
      <Process />
      <Portfolio />
      <FAQs FaqTableData={homeFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default PitchDeck;
