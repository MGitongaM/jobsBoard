import React from "react";
import HeroSection from "./heroSection";
import JobTypeSection from "./jobTypeSection";
import FeaturedJobs from "./featuredJobs";
import Testimonials from "./testimonials";
import FeaturedComapnies from "./featuredComapnies";
import StartedSection from "./startedSection";

export default function HomePageSection() {
  return (
    <>
      <HeroSection />
      <JobTypeSection/>
      <FeaturedJobs/>
      <Testimonials/>
      <FeaturedComapnies/>
      
    </>
  );
}
