"use client";
import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { UpdateRoleSchema } from "@/lib/FormValidation";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { User } from "@prisma/client";
import axios from 'axios';
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
interface Props {
  user: User;
}

export const EditUserForm = ({user}:Props) => {
  const[updating, setUpdating]=useState(false)
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
const router = useRouter();
  const form = useForm<z.infer<typeof UpdateRoleSchema>>({
    resolver: zodResolver(UpdateRoleSchema),
    defaultValues: {
      name:  user.name || undefined,
      role: user.role,
    },
  });

  async function onSubmit(values: z.infer<typeof UpdateRoleSchema>) {
    try {
      setUpdating(true)
      await axios.patch(`/api/admin/users/${user.id}`, values)
      setSuccess('User updated');
      router.push(`/admin/users`);
      router.refresh();
    } catch (error) {
      setUpdating(false)
      setError('Update failed')
    }
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
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserRole</FormLabel>
                <Select onValueChange={field.onChange}>
                <FormControl>
                <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="ADMIN">ADMIN</SelectItem>
              <SelectItem value="USER">USER</SelectItem>
              <SelectItem value="STUDENT">STUDENT</SelectItem>

            </SelectContent>
                
                </Select>
                
                <FormDescription>This is your role.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />

          <Button type="submit" disabled={updating}>Update User {updating && <Spinner />}</Button>
        </form>
      </Form>
    </>
  );
};

export default EditUserForm;