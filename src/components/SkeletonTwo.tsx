import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonTwo() {
  return (
    <section className=" min-h-[70vh] grid cols-span-9 lg:grid-cols-9 gap-10 rounded-md">
      <div className="bg-gray-200 rounded-md cols-span-9 lg:col-span-7 w-full px-8 py-6 space-y-4">
        <Skeleton className=" h-10 w-3/4 rounded-md" />
        <div className="flex gap-4">
          <Skeleton className=" h-5 w-36 rounded-md" />
          <Skeleton className=" h-5 w-36 rounded-md" />
          <Skeleton className=" h-5 w-36 rounded-md" />
        </div>
        <Skeleton className=" h-[60vh] w-full rounded-md" />
      </div>
      <div className="bg-gray-200 rounded-md cols-span-9 lg:col-span-2 w-full px-2 py-6 space-y-4">
        <Skeleton className=" h-24 w-full rounded-md" />
        <div className="flex gap-4">
          <Skeleton className=" h-5 w-36 rounded-md" />
          <Skeleton className=" h-5 w-36 rounded-md" />
          <Skeleton className=" h-5 w-36 rounded-md" />
        </div>
        <Skeleton className=" h-10 w-full rounded-md" />
      </div>
      
    </section>
  );
}
