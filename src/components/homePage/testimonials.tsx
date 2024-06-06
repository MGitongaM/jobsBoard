import { testimonials } from "@/app/constData/testimonials";
import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-jobsBg px-2 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="py-5">
          <h2 className="text-4xl font-bold">What People Say</h2>
          <p className="text-base text-gray-700">
            Recent testimonials from our clients.
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row  gap-10">
          {testimonials.map((testi) => (
            <div key={testi.id} className="rounded-md flex ">
              <div className="c"></div>
              <div className="c">
                <p className="text-base text-gray-600">
                  {testi.testimonialMessage}
                </p>
                <p className="text-lg font-semibold ">
                  {testi.testimonialUser}
                </p>
                <p className="text-base text-gray-600">{testi.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
