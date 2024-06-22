import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className=" relative h-[85vh] bg-black/60  px-5 py-10 ">
      <div className="text-white space-y-5 grid content-end md:content-end px-auto md:pl-48 max-w-3xl h-96 ">
        <h1 className="text-4xl md:text-6xl font-semibold">
          Your Next Career Move Starts Here
        </h1>
        <p className="text-base pr-16">
          Bridging the gap between job seekers and employers,
          offering a seamless experience to find your next job. Browse through
          diverse opportunities, get matched with jobs that fit your profile,
          and apply with confidence. Let us help you take the next step in your
          career.
        </p>
      </div>
      <Image
        src="/images/jobsBoardHero2.jpg"
        alt="hero-image"
        priority
        width={900}
        height={500}
        className="w-full h-full object-cover object-right-top absolute  top-0 left-0 -z-10"
        // className="w-full h-full object-cover object-left absolute  top-0 left-0 -z-10"
      />
    </section>
  );
}
