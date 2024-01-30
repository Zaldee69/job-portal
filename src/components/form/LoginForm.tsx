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

const Schema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email("This is not a valid email"),
  password: z.string().min(1, { message: "Please enter your password." }),
  keepSign: z.boolean().default(false).optional(),
});

interface ILoginForm {
  toggle: () => void;
}

const LoginForm = ({ toggle }: ILoginForm) => {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      email: "",
      password: "",
      keepSign: false,
    },
  });

  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  className="h-14"
                  autoComplete="off"
                  type="email"
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
              <FormLabel>Password</FormLabel>
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
          name="keepSign"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="keepSign"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <label
                      htmlFor="keepSign"
                      className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Keep me signed in
                    </label>
                  </div>
                  <Link className="text-sm" href="/reset-password">
                    Forgotten password?
                  </Link>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" className="w-full my-5">
          Login
        </Button>
        <p className="text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Button
            onClick={toggle}
            type="button"
            variant="ghost"
            className="p-0 text-primary hover:text-primary"
          >
            Register
          </Button>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
