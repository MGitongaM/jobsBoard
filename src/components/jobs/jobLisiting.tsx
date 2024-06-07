"use client";
import { allJobs, getJobsBySearchTitle } from "@/lib/rapidapi";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import SkeletonOne from "@/components/SkeletonOne";
import JobCardSummary from "@/components/jobs/jobCardSummary";
import { useQuery } from "@tanstack/react-query";

export default function JobListing() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") as string;

  const {
    data: jobs,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobs", search],
    queryFn: () => getJobsBySearchTitle(search),
  });

  if (isPending) {
    return (
      <>
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4  space-y-8">
          {[1, 2, 3, 4, 5].map((n) => (
            <SkeletonOne key={n} />
          ))}
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div className="max-w-6xl min-h-screen mx-auto">
          <div className="grid place-content-center bg-jobsBg rounded-md">
            <p className="text-red-500">
              There was an error getting the jobs listings under{" "}
              <span className="text-white">{search}</span>, Please try again
              later
            </p>
            <Button variant="outline" asChild>
              <Link href="/">Go back home</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-jobsPrimary mx-auto px-3 py-10">
        <h1 className="text-center text-4xl text-black px-2 py-10">
          {search ?? `Featured`} Jobs Listing{" "}
        </h1>
        <hr />
        <hr />
        <div  className="max-w-7xl mx-auto grid grid-cols-2 gap-8 my-2">
        {jobs.data.map((jb: any) => (
            <JobCardSummary {...jb} key={jb.job_id}/>
          ))}
          </div>

        <hr />
        <hr />
      </div>
    </>
  );
}
