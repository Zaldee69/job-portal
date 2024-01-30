"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Schema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" }),
    tnc: z.boolean().optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ValidationSchema = z.infer<typeof Schema>;

interface IRegisterForm {
  toggle: () => void;
}

const RegisterForm = ({ toggle }: IRegisterForm) => {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      tnc: false,
    },
  });

  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  const [isShowConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">Name</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  className="h-14"
                  autoComplete="off"
                  placeholder="Name"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">Email</FormLabel>
              <FormControl>
                <Input
                  className="h-14"
                  autoComplete="off"
                  placeholder="Email"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">Password</FormLabel>
              <FormControl>
                <Input
                  icon={
                    isShowPassword ? (
                      <EyeIcon
                        className="hover:text-primary text-muted-foreground cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <EyeOffIcon
                        className="hover:text-primary text-muted-foreground cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    )
                  }
                  className="h-14"
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Password"
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
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  icon={
                    isShowConfirmPassword ? (
                      <EyeIcon
                        className="hover:text-primary text-muted-foreground cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    ) : (
                      <EyeOffIcon
                        className="hover:text-primary text-muted-foreground cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    )
                  }
                  className="h-14"
                  type={isShowConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
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
          name="tnc"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="tnc"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label
                    htmlFor="tnc"
                    className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I accept the{" "}
                    <Link className="hover:text-primary" href="#">
                      Term and condition, and Privacy Policy
                    </Link>
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" className="w-full my-5">
          Register now
        </Button>
        <p className="text-center text-muted-foreground">
          Already have an account?{" "}
          <Button
            onClick={toggle}
            type="button"
            variant="ghost"
            className="p-0 text-primary hover:text-primary"
          >
            Login
          </Button>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
