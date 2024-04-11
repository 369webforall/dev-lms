"use client";
import { useState, startTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { RegisterSchema } from "@/lib/FormValidation";

import Link from "next/link";

import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import { register } from "@/actions/register";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const SignupForm = () => {
const[error, setError] = useState<string | undefined>("")
const[success, setSuccess]=useState<string | undefined>("")
const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success)
        router.push('/login')
        router.refresh();
      })
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jon Doe" {...field} />
                </FormControl>
                <FormDescription>User name</FormDescription>
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
                  <Input placeholder="dev@gmail.com" {...field} />
                </FormControl>
                <FormDescription>This is your email.</FormDescription>
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
                  <Input placeholder="******" type="password" {...field} />
                </FormControl>
                <FormDescription>This is your password field.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

<FormError message={error} />
<FormSuccess message={success} />

          <Button type="submit">
            Create New User
          </Button>

          <p>
            already have account ?{" "}
            <Link href="/auth/login" className="text-orange-600">
              Login
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
