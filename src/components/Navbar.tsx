import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { NAVBAR_ITEMS } from "@/constants";
import {
  BellIcon,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  User,
} from "lucide-react";
import LoginOrRegisterDialog from "@/components/form/LoginOrRegisterDialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="container 2xl:px-14 shadow md:shadow-none">
      <div className="flex items-center py-5 md:py-7 justify-between">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl">Logo ni boss</h1>
          <div className="gap-1 items-center hidden md:flex">
            {NAVBAR_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "font-normal animated-border !p-0 mx-4",
                })}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            {" "}
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="px-0 pt-5 pb-0 border-none">
            <SheetHeader className="flex justify-between flex-row items-center px-5 pb-5">
              <h1 className="text-xl text-start">Logo ni boss</h1>
              <Link
                href="#"
                className={buttonVariants({
                  className: "!p-0 h-fit !mt-0 mr-8",
                  variant: "ghost",
                })}
              >
                <User />
              </Link>
            </SheetHeader>
            <div className="bg-[#202124] h-full">
              <div className="p-5">
                <div className="gap-1 flex flex-col items-start">
                  {NAVBAR_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={buttonVariants({
                        variant: "ghost",
                        className:
                          "font-normal !p-0 mx-4 text-[#979797] hover:text-white",
                      })}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Button className="w-full mt-5">Post Job</Button>
                  <h4 className="text-[#979797] mt-2">Call Us</h4>
                  <h4 className="text-white my-2">+62 8225 3654 722</h4>
                  <p className="text-[#979797]">
                    Jl. Palmerah Utara No.102, Palmerah 11480, Jakarta Barat,
                    DKI Jakarta, Indonesia
                  </p>
                  <p className="text-[#979797]">support@zaldev.com</p>
                </div>
                <div className="absolute bottom-5 flex gap-2 ">
                  <Instagram className="text-[#979797] h-4 w-4" />
                  <Facebook className="text-[#979797] h-4 w-4" />
                  <Linkedin className="text-[#979797] h-4 w-4" />
                  <Twitter className="text-[#979797] h-4 w-4" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center gap-3">
          <LoginOrRegisterDialog />
          <Button variant="link" size="icon">
            <BellIcon strokeWidth="1.6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
