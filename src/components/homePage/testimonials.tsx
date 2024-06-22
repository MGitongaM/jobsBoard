
import { testimonials } from "@/app/constData/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
        <div className=" flex flex-col lg:flex-row  gap-10"></div>
        <article className="px-10 mx-2 lg:px-0 lg:mx-0">
          <Carousel opts={{ loop: false }}>
            <CarouselContent>
              {testimonials.map((testi) => (
                <CarouselItem
                  key={testi.id}
                  className="bg-slate-200 p-10 rounded-lg basis-full md:basis-1/2 mx-0 md:mx-10 "
                >
                  <div className="c"></div>
                  <div className="space-y-5">
                    <p className="text-base text-gray-600">
                      &quot;{testi.testimonialMessage}&quot;
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        width={300}
                        height={300}
                        src={testi.image}
                        alt="testimonial image"
                        className="w-20 h-20 object-cover rounded-full"
                      />
                      <div>
                        <p className="text-lg font-semibold ">
                          {testi.testimonialUser}
                        </p>
                        <p className="text-base text-gray-600">
                          {testi.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </article>
      </div>
    </section>
  );
}
