import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn, rupiahFormat } from "@/lib/utils";

interface IPricingCard {
  type: "Basic" | "Standard" | "Extended";
  price: number;
  benefitList: Array<string>;
  active?: boolean;
}

const PricingCard: React.FC<IPricingCard> = ({
  type,
  price,
  benefitList,
  active,
}) => {
  return (
    <Card
      className={cn(
        "hover:shadow hover:border-primary transition-shadow p-3 group",
        {
          "border-primary": active,
        }
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h4 className="text-primary">{type}</h4>
        {active && (
          <Badge className="text-green-600 bg-green-300/25 text-sm font-normal">
            Recommended
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <h2>{rupiahFormat(price)}</h2>
        <ul className="flex flex-col gap-5 mt-10 text-muted-foreground">
          {benefitList.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm">
              <CheckIcon size={21} /> <p>{item}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link
          href=""
          className={buttonVariants({
            variant: "third",
            className:
              "mt-10 w-full group-hover:bg-primary group-hover:text-white transition-colors",
          })}
        >
          Add to Cart
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
