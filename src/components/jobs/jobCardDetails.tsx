import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Barcode, Clock7, LampDesk, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { JobDetails } from "@/app/types/jobDetails";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ApplyCTA from "@/components/lotties/ApplyCTA";
export default function JobCardDetails(jobDetail: JobDetails) {
  return (
    <>
      <section className="grid cols-span-9 lg:grid-cols-9  p-4 rounded-md">
        {/* main div  */}
        <div className=" bg-jobsPrimary cols-span-9 lg:col-span-7 place-self-center rounded-lg px-8 py-6">
          <h3 className="text-2xl font-bold">{jobDetail?.job_title}</h3>
          <div className="flex gap-4 py-5">
            <div className="flex gap-1">
              <MapPin size={20} />
              <p className="text-sm">
                {jobDetail?.job_city}, {jobDetail?.job_country}
              </p>
            </div>
            <div className="flex gap-1">
              <Clock7 size={20} />
              <p className="text-sm">
                {new Date(
                  `${jobDetail?.job_posted_at_datetime_utc}`
                ).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-1">
              <LampDesk size={20} />
              <p className="text-sm">{jobDetail?.job_employment_type}</p>
            </div>
          </div>

          <div className="py-5">
            {/* <h4 className="text-xl font-medium">Job Description</h4> */}
            <p
              className="prose"
              dangerouslySetInnerHTML={{
                __html: jobDetail?.job_description?.replace(/\n/g, "<br/>"),
              }}
            ></p>
          </div>

          <div className="max-w-xl mx-auto space-y-5 bg-jobsBg/50 px-4">
            <h4 className="font-semibold text-xl pt-5 pb-2">Job Summary:</h4>
            <div className="bg-jobsBg rounded-md px-8 py-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item01">
                  <AccordionTrigger className="hover:no-underline">
                    Job Responsibilities
                  </AccordionTrigger>
                  <AccordionContent>
                
                    {
                      jobDetail?.job_highlights?.Responsibilities?.map(
                        (resp, index) => (
                          <li key={index} className="leading-7 py-2">
                            {resp}
                          </li>
                        )
                      )??(
                        <p className="text-black text-center">
                          Job responsibilities will be communicated to
                          successfull applicants
                        </p>
                      )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="bg-jobsBg rounded-md px-8 py-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item01">
                  <AccordionTrigger className="hover:no-underline">
                    Job Qualifications
                  </AccordionTrigger>
                  <AccordionContent>
                 
                    {
                      jobDetail?.job_highlights?.Qualifications?.map(
                      (resp, index) => (
                        <li key={index} className="leading-7 py-2">
                          {resp}
                        </li>
                      )
                    )??(
                      <p className="text-black text-center">
                          No Qualifications are need for this role
                        </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="bg-jobsBg rounded-md px-8 py-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item01">
                  <AccordionTrigger className="hover:no-underline">
                    Job Benefits
                  </AccordionTrigger>
                  <AccordionContent>
            
                    {jobDetail?.job_highlights?.Benefits?.map((resp, index) => (
                      <li key={index} className="leading-7 py-2">
                        {resp}
                      </li>
                    )) ?? (
                      <li className="leading-7 py-2">
                        Job benfits will be commuicated successfull applicants
                      </li>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* side div */}
        <div className=" cols-span-9 lg:col-span-2 place-self-start relative">
          <div className=" bg-jobsPrimary p-2 fixed w-72 space-y-4">
            <p className="font-semibold text-center text-lg">
              {jobDetail?.employer_name}
            </p>
            <ApplyCTA />
            <div className="flex flex-col md:flex-row gap-2">
              <p className="text-sm">Application Dead Line:</p>
              <Badge variant="default" className="bg-amber-600">
                {new Date(
                  jobDetail?.job_offer_expiration_datetime_utc
                ).toLocaleDateString()}
              </Badge>
            </div>

            <Link
              href={jobDetail?.job_apply_link}
              target="_blank"
              className="block hover:shadow-2xl"
            >
              <Button variant="default" className=" w-full">
                Apply
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
