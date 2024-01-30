import React from "react";

const SITEMAP = [
  {
    title: "For Candidates",
    links: [
      "Browse Jobs",
      "Browse Candidates",
      "Candidate Dashboard",
      "Job Alerts",
      "My Bookmark",
    ],
  },
  {
    title: "For Employers",
    links: [
      "All Employers",
      "Employer Dashboard",
      "Submit Job",
      "Job Packages",
    ],
  },
  {
    title: "About Us",
    links: ["Contact Us", "About Us", "Terms", "Packages", "FAQ"],
  },
  {
    title: "Helpful Resources",
    links: [
      "Site Map",
      "Terms of Use",
      "Privacy Center",
      "Security Center",
      "Accessibility Center",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#F4F7FC] mt-16">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-16 container py-16">
        <aside className="">
          <h1 className="text-xl">Logo</h1>
          <p className="text-[#666] mt-2 mb-5">
            Lorem ipsum dolor sit amet, consectetur adpiscing elit. sed do
            euismod tempor incididunt ut labore et dolore magna
          </p>
          <p className="text-sm hidden md:block">@ 2024. ALL RIGHTS RESERVED</p>
        </aside>
        <aside className="col-span-2">
          <div className="mx-auto w-full md:px-8">
            <div className="mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {SITEMAP.map(({ title, links }, key) => (
                <div key={key} className="w-full">
                  <h4 color="blue-gray" className="mb-4 font-semibold">
                    {title}
                  </h4>
                  <ul className="space-y-1">
                    {links.map((link, key) => (
                      <p
                        key={key}
                        className="font-normal text-sm text-muted-foreground hover:text-primary"
                      >
                        <a href="#" className="inline-block py-1 pr-2 ">
                          {link}
                        </a>
                      </p>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <div className="border-b" >

      </div>
    </footer>
  );
};

export default Footer;
