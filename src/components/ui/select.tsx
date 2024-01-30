"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./scroll-area";

const cities = [
  { value: "jakarta", label: "Jakarta" },
  { value: "bandung", label: "Bandung" },
  { value: "surabaya", label: "Surabaya" },
  { value: "denpasar", label: "Denpasar" },
  { value: "makassar", label: "Makassar" },
  { value: "samarinda", label: "Samarinda" },
  { value: "malang", label: "Malang" },
  { value: "bekasi", label: "Bekasi" },
  { value: "bogor", label: "Bogor" },
  { value: "yogyakarta", label: "Yogyakarta" },
  { value: "banda aceh", label: "Banda Aceh" },
  { value: "medan", label: "Medan" },
  { value: "palembang", label: "Palembang" },
  { value: "jambi", label: "Jambi" },
  { value: "pekanbaru", label: "Pekanbaru" },
  { value: "padang", label: "Padang" },
  { value: "bengkulu", label: "Bengkulu" },
  { value: "lampung", label: "Lampung" },
  { value: "serang", label: "Serang" },
  { value: "semarang", label: "Semarang" },
];

interface ISelect {
  showTriggerIcon?: boolean;
  placeholder?: string;
  className?: string;
}

export const Select: React.FC<ISelect> = ({
  showTriggerIcon = true,
  placeholder = "Select",
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[200px] justify-between font-normal text-sm",
            className,
            {
              "text-muted-foreground hover:text-muted-foreground":
                value.length <= 0,
            }
          )}
        >
          {value
            ? cities.find((city) => city.value === value)?.label
            : placeholder}
          <ChevronsUpDown
            className={cn("ml-2 h-4 w-4 shrink-0 opacity-50", {
              hidden: !showTriggerIcon,
            })}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandEmpty>No city found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-52">
              {cities.map((city) => (
                <CommandItem
                  key={city.value}
                  value={city.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === city.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {city.label}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
