"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    username: z.string()
      .min(6, { message: "Username must be between 6 and 16 characters." })
      .max(16, { message: "Username must be between 6 and 16 characters." }),
    email: z.string()
      .email({ message: "Email must be a valid .com address." })
      .regex(/@.*\.com$/, { message: "Email must be a valid .com address." }),
    password: z.string()
      .refine((value) => {
        return (
          value.length >= 8 &&
          value.length <= 16 &&
          /[a-z]/.test(value) &&
          /[A-Z]/.test(value) &&
          /[0-9]/.test(value)
        );
      }, {
        message: "Password must be between 8 and 16 characters and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.",
      }),
  });

export function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                Your username must be between 6 and 16 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                Please enter a valid email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormDescription>
                Your password must be between 8 and 16 characters, and include at least one lowercase letter, one uppercase letter, and one number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row space-between">
        <Button type="submit" size="lg" className="text-xl">Sign Up</Button>
        <Link href="/signin">
            <Button variant="link" size="lg" className="text-xl text-theme4">Sign In</Button>
        </Link>
        </div>
      </form>
    </Form>
  );
}
