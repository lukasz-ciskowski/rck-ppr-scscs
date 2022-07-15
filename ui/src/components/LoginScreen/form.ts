import { z } from "zod";

export const Form = z.object({
  username: z
    .string()
    .min(5, { message: "Username too short" })
    .max(20, { message: "Username too long" })
    .regex(/^(?=[a-zA-Z0-9._]$)(?!.*[_.]{2})[^_.].*[^_.]$/, {
      message: "Invalid username",
    }),
});


export type TypedForm = z.infer<typeof Form>;