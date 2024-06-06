import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonOne() {
  return (
    <>
      <div className="bg-jobsBg rounded-md px-2 py-4 flex flex-col space-y-7">
        <Skeleton className=" h-24 w-full rounded-md" />
        <Skeleton className=" h-10 w-1/2 rounded-md" />
        <div className="flex gap-4">
          <Skeleton className=" h-5 w-36 rounded-md" />
          <Skeleton className=" h-5 w-36 rounded-md" />
          <Skeleton className=" h-5 w-36 rounded-md" />
        </div>
      </div>
    </>
  );
}
