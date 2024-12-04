import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type SignupFormData = z.infer<typeof signupSchema>;
