import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Icon, { IconProps } from "@/public/icons/dynamic";

interface IJobCategoriesCard {
  title: string;
  subtitle: number;
  href: string;
  icon: IconProps;
}

const JobCategoriesCard: React.FC<IJobCategoriesCard> = ({
  href,
  icon,
  subtitle,
  title,
}) => {
  return (
    <Card className="hover:shadow cursor-pointer transition-shadow duration-300">
      <Link href={href}>
        <CardContent className="flex flex-col gap-2 items-center justify-center md:py-10 py-5 group">
          <span className="h-14 w-14 md:h-16 md:w-16 bg-gray-200 flex items-center justify-center rounded-full group-hover:bg-primary transition-colors duration-300">
            <Icon
              name={icon as any}
              className="text-primary group-hover:text-white transition-colors w-6 h-6 md:w-7 md:h-7"
            />
          </span>
          <h4 className="group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          <span className="text-sm text-muted-foreground">
            ({subtitle} open positions)
          </span>
        </CardContent>
      </Link>
    </Card>
  );
};

export default JobCategoriesCard;
