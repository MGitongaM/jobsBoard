import { Barcode, Clock7, MapPin } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { JobSummary } from "@/app/types/jobDetails";

export default function JobCardSummary(jobSummaryDetails:JobSummary) {
  return (
    <>
      <div className="bg-jobsBg rounded-md px-4 py-4 space-y-7 hover:shadow-lg transition ease-linear">
      {/* <div className=" backdrop-blur-xl bg-amber-800/60 rounded-md px-4 py-4 space-y-7 hover:shadow-lg transition ease-linear"> */}
        <h3 className="text-2xl font-semibold">{jobSummaryDetails?.job_title}</h3>
        <div className="flex gap-4">
          <p className="text-base uppercase">{}</p>
          <Button variant="outline">
            <Link href={`/job/${jobSummaryDetails?.job_id}`} target="_blanket">
              View
            </Link>
          </Button>
          {/* <Button variant="ghost">
            <Link href={`${jobSummaryDetails?.job_apply_link}`} target="_blank">
              Apply
            </Link>
          </Button> */}

          <p className="text-base uppercase text-gray-400 ">
            {/* {jobSummaryDetails?.job_naics_name} */}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <MapPin size={20} />
            <p className="text-base text-gray-400">
              {jobSummaryDetails?.job_city},{jobSummaryDetails?.job_country}
            </p>
          </div>
          <div className="flex gap-2">
            <Clock7 size={20} />
            <p className="text-base text-gray-400">
              <span className="pr-2">Posted on:</span>
              {new Date(`${jobSummaryDetails?.job_posted_at_datetime_utc}`).toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-2">
            <Barcode size={20} />
            <p className="text-base text-gray-400 ">
              Industry: {jobSummaryDetails?.employer_company_type}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}