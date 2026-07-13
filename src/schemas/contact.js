import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be under 100 characters'),
  website: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  spend: z
    .string()
    .min(1, 'Please select a monthly ad spend range'),
  goal: z
    .string()
    .min(1, 'Please select a primary goal'),
  message: z
    .string()
    .max(2000, 'Message must be under 2000 characters')
    .optional()
    .or(z.literal('')),
});
