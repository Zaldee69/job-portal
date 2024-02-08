import FilterGroup from "@/components/FilterGroup";
import JobCard from "@/components/card/JobCard";
import Chip from "@/components/ui/Chip";
import { JOB_LISTS } from "@/constants";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Page = () => {
  return (
    <main>
      <section className="bg-[#F4F7FC] py-5 md:py-12">
        <div className="container">
          <div className="flex items-center flex-col">
            <h1>Job List</h1>
            <div className="flex gap-1 mt-2">
              <Link href="/">
                <p className="text-muted-foreground hover:text-foreground transition-colors">
                  Home{" "}
                </p>
              </Link>
              /<p> Job List</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-10 px-5 md:px-8">
        <div className="grid xl:grid-cols-6 gap-x-8">
          <div className="col-span-2 bg-[#F4F7FC] rounded p-5 hidden xl:block">
            <FilterGroup />
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              {" "}
              <div className="flex text-primary font-semibold items-center text-sm gap-1 mb-5">
                {" "}
                <Menu size={20} /> Show Filter
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="px-0 pt-5 border-none">
              <ScrollArea className="h-screen px-3">
                <FilterGroup />
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <div className="col-span-4">
            <h3>You selected</h3>
            <div className="gap-2 mt-2 bg-[#F4F7FC] rounded p-3 w-full hidden xl:flex ">
              <Chip />
              <Chip />
              <Chip />
              <Chip />
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 gap-5 mt-5 md:mt-10">
              {JOB_LISTS.map((list) => (
                <JobCard
                  key={list.companyImageProfile}
                  jobs={list.jobs}
                  companyProfileImage={list.companyImageProfile}
                />
              ))}
              {JOB_LISTS.map((list) => (
                <JobCard
                  key={list.companyImageProfile}
                  jobs={list.jobs}
                  companyProfileImage={list.companyImageProfile}
                />
              ))}
              {JOB_LISTS.map((list) => (
                <JobCard
                  key={list.companyImageProfile}
                  jobs={list.jobs}
                  companyProfileImage={list.companyImageProfile}
                />
              ))}
            </div>
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
