import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

interface ICompanyProps {
  image: string;
  name: string;
  location: string;
}

const CompanyCard: React.FC<ICompanyProps> = ({ image, name, location }) => {
  return (
    <Card className="hover:shadow transition-shadow duration-300">
      <CardContent className="flex flex-col gap-2 items-center justify-center py-10 group">
        <Image
          src={image}
          height={80}
          width={80}
          alt=""
          className="rounded-full self-start block mx-auto h-16 w-16 md:h-20 md:w-20"
        />
        <h4>{name}</h4>
        <Link href="" className="text-sm text-muted-foreground flex gap-1">
          <MapPin size={16} /> {location}
        </Link>
      </CardContent>
      <CardFooter>
        <Button variant="third" className="w-full">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
