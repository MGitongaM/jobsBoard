import { Barcode, Clock7, MapPin } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { JobSummary } from "@/app/types/jobDetails";

export default function JobCardSummary(jobSummaryDetails: JobSummary) {
  return (
    <>
      {/* <div className="bg-jobsBg rounded-md px-4 py-4 space-y-7 hover:shadow-lg transition ease-linear"> */}
      <div className="bg-jobsBg rounded-md px-4 py-4 space-y-7 hover:bg-amber-100 hover:shadow-amber-400 hover:shadow-md transition ease-linear">
        {/* <div className=" backdrop-blur-xl bg-amber-800/60 rounded-md px-4 py-4 space-y-7 hover:shadow-lg transition ease-linear"> */}
        <div className="flex justify-between gap-4">
          <h3 className="text-lg md:text-xl font-medium">
            {jobSummaryDetails?.job_title}
          </h3>
          <Button variant="outline" asChild>
            <Link href={`/job/${jobSummaryDetails?.job_id}`} target="_blanket" className="">
              View
            </Link>
          </Button>
        </div>
        <div className="flex gap-4">
          <p className="text-base uppercase">{}</p>

          <p className="text-base uppercase text-gray-400 ">
            {/* {jobSummaryDetails?.job_naics_name} */}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <MapPin size={20} />
            <p className="text-xs lg:text-sm text-gray-400">
              {jobSummaryDetails?.job_city},{jobSummaryDetails?.job_country}
            </p>
          </div>
          <div className="flex gap-2">
            <Clock7 size={20} />
            <p className="text-xs lg:text-sm text-gray-400">
              <span className="pr-2">Posted on:</span>
              {new Date(
                `${jobSummaryDetails?.job_posted_at_datetime_utc}`
              ).toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-2">
            <Barcode size={20} />
            <p className="text-xs lg:text-sm text-gray-400 ">
              Duration: {jobSummaryDetails?.job_employment_type}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
