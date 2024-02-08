import React from "react";
import { Badge } from "./badge";
import { XCircle } from "lucide-react";
import { Button } from "./button";

const Chip = () => {
  return (
    <div>
      <Button className="p-0 h-fit bg-transparent hover:bg-transparent group">
        <Badge className="bg-[#EBEFFA] text-black font-normal text-sm px-2 hover:bg-[#EBEFFA] py-1 group-hover:text-destructive transition-colors">
          Design
          <XCircle
            size={16}
            className="text-black ml-1 group-hover:text-destructive transition-colors"
          />
        </Badge>
      </Button>
    </div>
  );
};

export default Chip;
