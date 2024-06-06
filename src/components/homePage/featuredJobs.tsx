"use client";
import { MapPin, Clock7, Barcode } from "lucide-react";
import { featuredJobs } from "@/app/constData/featuredJobs";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts2} from "@/lib/jobicyApi";
import SkeletonOne from "@/components/SkeletonOne";

export default function FeaturedJobs() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts2(),
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
        <section className=" max-w-6xl mx-auto grid place-content-center text-center  text-black bg-red-400 z-50">
          <p>There was an issue getting them job lisitings</p>
          <pre>{error.message}</pre>
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
          <article className="p-10 bg-amber-100">
            <pre>
              {data?.products?.map((dt: any) => (
                <div key={dt.id}>{dt?.title}</div>
              ))}
            </pre>
            {/* <pre>{data}</pre> */}
          </article>
          {featuredJobs.map((job) => (
            <div
              key={job.jobTitle}
              className=" bg-jobsBg rounded-md px-2 py-4 space-y-7 hover:shadow-lg transition ease-linear"
            >
              <h3 className="text-2xl font-semibold">{job.jobTitle}</h3>
              <div className="flex gap-4">
                <p className="text-base uppercase">{job.companyName}</p>
                <p className="text-base uppercase text-gray-400 ">
                  {job.jobCategory}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <MapPin size={20} />
                  <p className="text-base text-gray-400">{job.location}</p>
                </div>
                <div className="flex gap-2">
                  <Clock7 size={20} />
                  <p className="text-base text-gray-400 ">{job.jobType}</p>
                </div>
                <div className="flex gap-2">
                  <Barcode size={20} />
                  <p className="text-base text-gray-400 ">{job.jobLevel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
