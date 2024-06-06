import { featuredCompanies } from "@/app/constData/featuredCompanies";
import { Building, CalendarDays, Users } from "lucide-react";
import React from "react";

export default function FeaturedComapnies() {
  return (
    // <section className="bg-jobsPrimary px-2 py-10 my-28">
    <section className="bg-jobsPrimary px-2 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="py-5">
          <h2 className="text-4xl font-bold">Featured Companies</h2>
          <p className="text-base text-gray-700">
            The most trusted employers out there.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCompanies.map((comapny)=>(<div key={comapny.companyName} className="grid place-content-center space-y-10 p-2 rounded-md bg-jobsBg  shadow-md">
                <p className="text-xl font-semibold">{comapny.companyName}</p>
                <div className="flex gap-10">
                    <div className="flex gap-1">
                        <Building size={20}/>
                    <p className="text-base text-gray-400">{comapny.comapnyIndustry}</p>
                    </div>
                    <div className="flex gap-1">
                        <CalendarDays size={20}/>
                    <p className="text-base text-gray-400">{comapny.comapnyFouding}</p>
                    </div>
                </div>
                <hr />
                <div className="flex gap-1">
                        <Users size={20}/>
                    <p className="text-base text-gray-400">{comapny.companyCount} employees</p>
                    </div>
            </div>))}
        </div>
      </div>
    </section>
  );
}
