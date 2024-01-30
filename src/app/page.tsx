import TestimoniCarousel from "@/components/TestimoniCarousel";
import CompanyCard from "@/components/card/CompanyCard";
import JobCard from "@/components/card/JobCard";
import JobCategoriesCard from "@/components/card/JobCategoriesCard";
import PricingCard from "@/components/card/PricingCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import {
  COMPANY_LIST,
  JOB_CATEGORIES,
  JOB_LISTS,
  POPULAR_SEARCHES,
} from "@/constants";

import { CheckIcon, ChevronRight, MapPin, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" verflow-x-hidden pb-10">
      <header className="flex gap-x-20 container px-5 md:px-8">
        <div className="md:mt-32 mt-5 md:w-10/12">
          <article>
            <h1 className="md:text-5xl font-medium">
              Join us & Explore Thousands of Jobs
            </h1>
            <p className="text-muted-foreground my-5 md:my-7">
              Find Jobs, Employment & Career Opportunities
            </p>
          </article>
          <div className="shadow-md border-[0.5px] py-3 px-8 rounded-md grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-x-3 items-center md:divide-x divide-y md:divide-y-0">
            <div>
              <Label htmlFor="jobTitle" className="text-lg">
                What
              </Label>
              <div className="flex items-center justify-between">
                <Input
                  id="jobTitle"
                  type="text"
                  className="border-none outline-none focus-visible:ring-0 rounded-none p-0"
                  placeholder="Job title, keywords..."
                />
                <SearchIcon className="text-muted-foreground" />
              </div>
            </div>
            <div className="md:pl-5 md:pt-0 pt-3">
              <Label id="location" className="text-lg">
                Where
              </Label>
              <div className="flex items-center justify-between">
                <Select
                  placeholder="City"
                  showTriggerIcon={false}
                  className="border-none p-0 "
                />
                <MapPin className="text-muted-foreground" />
              </div>
            </div>
            <Button size="lg">Search</Button>
          </div>
          <div className="mt-7">
            <p>
              Popular Searches:{" "}
              {POPULAR_SEARCHES.map((popular) => (
                <Link
                  key={popular.key}
                  href={popular.key}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {popular.title},{" "}
                </Link>
              ))}
            </p>
          </div>
        </div>
        <div className="w-8/12 h-[570px] relative hidden md:block">
          <div className="absolute -right-12 h-full w-full">
            <div className="bg-banner h-full bg-no-repeat bg-cover" />
          </div>
        </div>
      </header>
      <section className="container md:mt-32 mt-10 px-5 md:px-8 ">
        <h1 className="text-center">Popular Job Categories</h1>
        <p className="text-muted-foreground text-center mt-3">
          192 jobs live - 295 added today
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
          {JOB_CATEGORIES.map((category) => (
            <JobCategoriesCard
              key={category.title}
              title={category.title}
              subtitle={category.subtitle}
              href={category.href}
              icon={category.icon as any}
            />
          ))}
        </div>
      </section>
      <section className="container md:mt-32 mt-10 px-5 md:px-8">
        <h1 className="text-center">Featured Jobs</h1>
        <p className="text-muted-foreground text-center mt-3">
          Know your worth and fidn the job that qualify your life
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
          {JOB_LISTS.map((list) => (
            <JobCard
              key={list.companyImageProfile}
              jobs={list.jobs}
              companyProfileImage={list.companyImageProfile}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center ">
          <Link href="#" className={buttonVariants()}>
            Load More Listing
          </Link>
        </div>
      </section>
      <section className="container md:mt-32 mt-10 px-5 md:px-8">
        <article className="p-1 text-center ">
          <h1>Testimonials From Our Costumers</h1>
          <p className="text-muted-foreground mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
        <TestimoniCarousel />
      </section>
      <section className="container md:mt-32 mt-10 px-5 md:px-8">
        <article className="text-start flex md:flex-row flex-col md:items-center justify-between">
          <span>
            <h1>Top Company Registered</h1>
            <p className="text-muted-foreground mt-3">
              Some of the companies we’ve helped recruit excellent applicants
              over the years.
            </p>
          </span>
          <Link
            href=""
            className="flex items-center text-primary font-normal animated-border"
          >
            Browse All Companies <ChevronRight size={16} className="mt-1" />
          </Link>
        </article>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
          {COMPANY_LIST.map((company) => (
            <CompanyCard
              key={company.name}
              name={company.name}
              location={company.location}
              image={company.image}
            />
          ))}
        </div>
      </section>
      <section className="container md:mt-32 mt-10 px-5 md:px-8">
        <div className="flex gap-10">
          <Image
            className="flex-none hidden md:block"
            height={541}
            quality={100}
            width={666}
            alt="banner"
            src="/images/app2.png"
          />
          <span className="max-w-lg md:mt-16">
            <h1 className="md:text-[2.5rem]">
              Get applications from the world best talents.
            </h1>
            <p className="text-muted-foreground my-6">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <CheckIcon size={21} />{" "}
                <p>Bring to the table win-win survival</p>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon size={21} />{" "}
                <p>Capitalize on low hanging fruit to identify</p>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon size={21} />{" "}
                <p>But I must explain to you how all this</p>
              </li>
            </ul>
            <Button className="mt-5">Post a Job</Button>
          </span>
        </div>
      </section>
      <section className="container md:mt-32 mt-10 px-5 md:px-8">
        <h1 className="text-center">Pricing Packages</h1>
        <p className="text-muted-foreground text-center mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
          <PricingCard
            type="Basic"
            price={590000}
            benefitList={[
              "30 job posting",
              "3 featured job",
              "Job displayed for 15 days",
              "Office hour support (9 am - 6 pm)",
            ]}
          />
          <PricingCard
            type="Standard"
            active
            price={790000}
            benefitList={[
              "40 job posting",
              "5 featured job",
              "Job displayed for 30 days",
              "Premium Support 24/7",
            ]}
          />
          <PricingCard
            type="Basic"
            price={990000}
            benefitList={[
              "50 job posting",
              "10 featured job",
              "Job displayed for 60 days",
              "Dedicated Premium Support 24/7",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
