"use client";
import { MapPin, Clock7, Barcode } from "lucide-react";
// import { featuredJobs } from "@/app/constData/featuredJobs";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts2 } from "@/lib/jobicyApi";
import SkeletonOne from "@/components/SkeletonOne";
import { getJobsBySearchTitle } from "@/lib/rapidapi";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FeaturedJobs() {
  const {
    data: featuredJobs,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getFeaturedJobs"],
    queryFn: () => getJobsBySearchTitle("Project Managers"),
  });

  if (isPending) {
    return (
      <>
        <div className=" max-w-6xl mx-auto">
          <SkeletonOne />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <section className=" max-w-6xl mx-auto grid place-content-center text-center  text-black">
          <p className="text-base">
            There was an issue getting the featured job lisitings
          </p>
          <pre className="text-xs text-red-300">{error.message}</pre>
        </section>
      </>
    );
  }
  return (
    <section className="bg-jobsPrimary px-2 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold">Featured Jobs</h2>
        <p className="text-base text-gray-700">
          A few jobs handpicked by our staff.
        </p>
        <div className="my-10 space-y-8">
          {featuredJobs.data.slice(0, 5).map((job: any) => (
            <div
              key={job?.job_id}
              className=" bg-jobsBg rounded-md px-2 py-4 space-y-7 hover:shadow-lg transition ease-linear"
            >
              <div className="flex justify-between gap-4">
                <h3 className="text-2xl font-medium">{job?.job_title}</h3>
                <Button variant="outline">
                  <Link href={`/job/${job?.job_id}`} target="_blanket">
                    View
                  </Link>
                </Button>
              </div>
              <div className="flex gap-4">
                <p className="text-sm uppercase">
                  {job?.employer_company_type}
                </p>
                <p className="text-sm uppercase text-gray-400 ">
                  {job?.employer_name}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <MapPin size={20} />
                  <p className="text-base text-gray-400">
                    {job?.job_city},{job?.job_country}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Clock7 size={20} />
                  <p className="text-base text-gray-400 ">
                    {new Date(
                      `${job?.job_posted_at_datetime_utc}`
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Barcode size={20} />
                  <p className="text-base text-gray-400 ">
                    Duration: {job?.job_employment_type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
