import { z } from "zod";
import { UserRole } from "@prisma/client";


export const LoginSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required.",
  }),
  password: z.string().min(2, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  password: z.string().min(6, {
    message: "Minimum 6 characters is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const UpdateRoleSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  role:z.enum([UserRole.ADMIN, UserRole.STUDENT, UserRole.USER]),

})