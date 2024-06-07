import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className=" relative h-[80vh] bg-black/50  px-2 py-10 ">
      <div className="text-white space-y-5 grid content-center pl-48 max-w-4xl h-96 ">
        <h1 className="text-6xl font-semibold">The future of remote work is here.</h1>
        <p className="text-base pr-16">
          Get instant access to an expertly curated list of remote jobs in tech,
          marketing, customer support and more.
        </p>
      </div>
      <Image
        src="/images/jobsBoardHero2.jpg"
        alt="hero-image"
        priority
        width={900}
        height={500}
        className="w-full h-full object-cover object-right-top absolute  top-0 left-0 -z-10"
      />
    </section>
  );
}
