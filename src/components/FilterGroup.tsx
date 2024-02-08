"use client";
import React from "react";
import { Input } from "./ui/input";
import { MapPin, Search } from "lucide-react";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Slider } from "./ui/slider";
import { Select } from "./ui/select";
import { JOB_CATEGORIES } from "@/constants";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

const FilterGroup = () => {
  const form = useForm({
    defaultValues: {
      keyword: "",
      location: "",
      radius: [50],
      category: "",
    },
  });

  const watchRadius = form.watch("radius");

  const onSubmit = () => {};

  return (
    console.log(
      JOB_CATEGORIES.map((item) => {
        return { value: item.title.toLowerCase(), label: item.title };
      })
    ),
    (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="keyword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h4>Search by Keywords</h4>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="h-12 mt-3 placeholder:text-base text-base"
                    placeholder="Job title, keywords..."
                    icon={<Search className="text-muted-foreground" />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h4>Location</h4>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="h-12 mt-3 placeholder:text-base text-base"
                    placeholder="City or postcode"
                    icon={<MapPin className="text-muted-foreground" />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormField
            control={form.control}
            name="radius"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h5 className="text-primary">Radius: {watchRadius[0]}</h5>
                </FormLabel>
                <FormControl>
                  <Slider
                    onValueChange={(e) =>
                      console.log(form.setValue("radius", e))
                    }
                    max={100}
                    step={1}
                    value={watchRadius}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabel>
                    <h4>Category</h4>
                  </FormLabel>
                </FormLabel>
                <FormControl>
                  <Select
                    placeholder="Choose a category..."
                    className="w-full px-3 bg-white border-border text-base"
                    popoverClassName="w-[380px]"
                    data={JOB_CATEGORIES.map((item) => {
                      return {
                        value: item.title.toLowerCase(),
                        label: item.title,
                      };
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabel>
                    <h4>Job Type</h4>
                  </FormLabel>
                </FormLabel>
                <FormControl>
                  <Select
                    className="w-full px-3 bg-white border-border text-base"
                    popoverClassName="w-[380px]"
                    scrollAreaClassname="h-fit"
                    placeholder="Job type"
                    data={[
                      {
                        value: "freelance",
                        label: "Freelance",
                      },
                      {
                        value: "fulltime",
                        label: "Fulltime",
                      },
                      {
                        value: "internship",
                        label: "Internship",
                      },
                      {
                        value: "part time",
                        label: "Part Time",
                      },
                      {
                        value: "temporary",
                        label: "Temporary",
                      },
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabel>
                    <h4>Date Posted</h4>
                  </FormLabel>
                </FormLabel>
                <FormControl>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label
                        htmlFor="option-one"
                        className="font-normal text-base text-muted-foreground"
                      >
                        Last hour
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label
                        htmlFor="option-two"
                        className="font-normal text-base text-muted-foreground"
                      >
                        Last 24 hour
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="option-three" id="option-three" />
                      <Label
                        htmlFor="option-three"
                        className="font-normal text-base text-muted-foreground"
                      >
                        Last 7 days
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="option-four" id="option-four" />
                      <Label
                        htmlFor="option-four"
                        className="font-normal text-base text-muted-foreground"
                      >
                        Last 14 days
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="option-five" id="option-five" />
                      <Label
                        htmlFor="option-five"
                        className="font-normal text-base text-muted-foreground"
                      >
                        Last 30 days
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="option-six" id="option-six" />
                      <Label
                        htmlFor="option-six"
                        className="font-normal text-base text-muted-foreground"
                      >
                        All
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormLabel>
            <h4>Experience Level</h4>
          </FormLabel>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label
                      htmlFor="airplane-mode"
                      className="font-normal text-muted-foreground text-base"
                    >
                      Manager
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label
                      htmlFor="airplane-mode"
                      className="font-normal text-muted-foreground text-base"
                    >
                      Officer
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label
                      htmlFor="airplane-mode"
                      className="font-normal text-muted-foreground text-base"
                    >
                      Student
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label
                      htmlFor="airplane-mode"
                      className="font-normal text-muted-foreground text-base"
                    >
                      Executive
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label
                      htmlFor="airplane-mode"
                      className="font-normal text-muted-foreground text-base"
                    >
                      Others
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <FormField
            control={form.control}
            name="radius"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <FormLabel>
                    <h4>Salary</h4>
                  </FormLabel>
                </FormLabel>
                <FormControl>
                  <Slider
                    onValueChange={(e) =>
                      console.log(form.setValue("radius", e))
                    }
                    max={100}
                    step={1}
                    value={watchRadius}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full my-10" size="lg">
            Find Jobs
          </Button>
        </form>
      </Form>
    )
  );
};

export default FilterGroup;
