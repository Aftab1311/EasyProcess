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
import { dealAdvisoryFaqs } from "@/constants/faqs";
import { dealItems } from "@/constants/carousel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const DealAdvisory = () => {
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
      <Hero items={dealItems} />
      <WhyUs
        heading="Why Opt for Us?"
        subheading="We offer unique solutions tailored to your needs."

        imageSrc="/dealAdvisoryWhyUS.png"

        firstTitle="Skilled Guidance:"
        firstDescription="Provided by a former Big 4 consultant with extensive knowledge of large-scale transactions in India."
        secondTitle=" Full-Service Advisory:"
        secondDescription="We handle every aspect, from identifying prospects to completing transactions. Our in-depth knowledge of the market allows us to identify the most favorable investment opportunities in India."
        thirdTitle="Startup Specialization:"
        thirdDescription="We assist with exit planning and startup setup. Over 50,000 Indian companies received $14 billion in investment in 2023.."
        fourthTitle="Regulatory Knowledge:"
        fourthDescription="We are aware of the intricate tax and regulatory laws in India."
        fifthTitle="Client Focus:"
        fifthDescription="In an economy that is expanding quickly, we address problems promptly and communicate effectively."
      />
      <HomeService />
      <ContactUs />
      <Process />
      <Portfolio />
      <FAQs FaqTableData={dealAdvisoryFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default DealAdvisory;
