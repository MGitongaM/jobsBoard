"use client";
import SkeletonTwo from "@/components/SkeletonTwo";
import JobCardDetails from "@/components/jobs/jobCardDetails";
import { data, getJobDetailsById } from "@/lib/rapidapi";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page({ params }: { params: { jobId: string } }) {
  const {
    data: jobDetail,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getsJobInformationById", params.jobId],
    queryFn: () => getJobDetailsById(params.jobId),

  });

  if (isPending) {
    return (
      <>
        <div className="max-w-7xl mx-auto min-h-screen ">
          <SkeletonTwo />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <section className="grid place-content-center w-full min-h-screen text-base font-semibold text-center">
          We have an error pleace try again later
          <hr />
          <pre>{error.message}</pre>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-jobsBg px-3 py-10">
        <div className="max-w-7xl  mx-auto ">
          <JobCardDetails {...jobDetail.data[0]} />
        </div>
      </section>
    </>
  );
}
