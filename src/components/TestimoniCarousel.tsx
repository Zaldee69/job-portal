import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function TestimoniCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col items-center mt-10">
              <div className="border w-fit rounded-full">
                <Image
                  src="/images/t4.jpg"
                  height={100}
                  width={100}
                  alt="user"
                  className="shadow border-8 border-white rounded-full"
                />
              </div>
              <h4 className="text-primary mt-4">Good Jobs!</h4>
              <h5 className="text-center text-muted-foreground max-w-2xl mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis, aspernatur obcaecati dolores placeat incidunt id
                maxime delectus ipsum ipsam laboriosam alias aliquid numquam,
                autem cumque voluptates quia itaque, in aut!
              </h5>
              <h4 className="mt-8">Muhammad Rizaldy</h4>
              <p className="text-muted-foreground text-sm" >Web Developer</p>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
