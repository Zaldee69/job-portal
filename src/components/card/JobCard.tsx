import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Bookmark, Briefcase, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface IJobCard {
  companyProfileImage: string;
  jobs: {
    title: string;
    details: string;
    category: string;
    location: string;
    type: string;
    urgency: boolean;
  };
}

const JobCard: React.FC<IJobCard> = (props) => {
  return (
    <Card className="hover:shadow transition-shadow" >
      <CardContent className="py-3">
        <Button
          className="!p-0 hover:bg-gray-200 transition-colors h-8 w-8 rounded-full float-end"
          type="button"
          variant="ghost"
        >
          <Bookmark className="text-muted-foreground" size={18} />
        </Button>
        <div className="flex gap-3 my-3">
          <Link href={props.jobs.details}>
            <Image
              src={props.companyProfileImage}
              height={50}
              width={50}
              alt=""
              className="rounded-full self-start"
            />
          </Link>
          <div className="text-muted-foreground">
            <Link href={props.jobs.details}>
              <h4 className="hover:text-primary text-black transition-colors">
                {props.jobs.title}
              </h4>
            </Link>
            <div className="flex gap-3" >
              <Link
                href={`/job-category/${props.jobs.category.toLowerCase()}`}
                className="flex items-center gap-1 text-sm mt-1"
              >
                {" "}
                <Briefcase size={16} /> {props.jobs.category}
              </Link>
              <Link
                href={`/job-location/${props.jobs.location.toLowerCase()}`}
                className="flex items-center gap-1 text-sm mt-1"
              >
                <MapPin size={16} /> {props.jobs.location}
              </Link>
            </div>
          </div>
        </div>
        <Badge variant="outline">
          <Link href={`/job-type/${props.jobs.type.toLowerCase()}`}>
            {props.jobs.type}
          </Link>
        </Badge>
        {props.jobs.urgency ? (
          <Badge className="ml-2" variant="outline">
            Urgent
          </Badge>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default JobCard;
