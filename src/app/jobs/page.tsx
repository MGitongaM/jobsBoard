import JobListing from "@/components/jobs/jobLisiting";
import JobsHeadingSection from "@/components/jobs/jobsheadingSection";
// import UrlSearchParam from "@/components/jobsPage/urlSearchParam";
import React, { Suspense } from "react";

export default function jobsPage() {
  return (
    <>
      <section className="min-h-[89vh]">

        {/* <JobsHeadingSection /> */}
        <Suspense>
          <JobListing />
        </Suspense>
        {/* <UrlSearchParam /> */}
      </section>
    </>
  );
}
