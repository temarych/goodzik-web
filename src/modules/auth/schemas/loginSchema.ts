import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(3, 'Required').email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
