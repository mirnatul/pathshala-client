import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, "Minimum 8 character")
    .regex(/[A-Z]/, "must contain 1 uppercase")
    .regex(/[a-z]/, "must contain 1 lowercase")
    .regex(/[0-9]/, "must contain 1 number")
    .regex(/[^A-Za-z0-9]/, "must contain 1 special character"),
});
