import JobListing from "@/components/jobs/jobLisiting";
import JobsHeadingSection from "@/components/jobs/jobsheadingSection";
// import UrlSearchParam from "@/components/jobsPage/urlSearchParam";
import React from "react";

export default function jobsPage() {
  return (
    <>
      <section className="min-h-[89vh]">

        {/* <JobsHeadingSection /> */}
        <JobListing />
        {/* <UrlSearchParam /> */}
      </section>
    </>
  );
}
