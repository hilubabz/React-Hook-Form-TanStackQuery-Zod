import { z, } from 'zod';

const Social = z.object({
  facebook: z.string().min(1, { message: 'Facebook is required' }),
  instagram: z.string().url({ message: 'Invalid Instagram URL' }),
});

const Review = z.enum(["excellent", "good", "average", "poor"]);
const Recommend = z.enum(["yes", "no"]);
const Subscription = z.enum(["basic", "premium"]);

export const FormSchema= z.object({
  fullName: z.string()
    .min(1, { message: 'Please enter your name' })
    .max(20, { message: 'Name cannot be longer than 20' }),

  email: z.string().email({ message: 'Please enter a valid email' }),

  // Phone as number array; each number must be exactly 10 digits
phone: z.array(
  z.number()
    .refine(val => /^\d{10}$/.test(val), { 
      message: "Phone number must be exactly 10 digits" 
    })
    .transform(val => Number(val))
).length(2, { message: "Two phone numbers are required" })
,

  companyName: z.string().min(1, { message: 'Company name is required' }),
  
  dateOfExperience: z.string().min(1, { message: 'Please enter a date of experience' }),

  rating: z.number().min(1, { message: 'Please select a rating' }),

  rateQuality: Review,
  rateSupport: Review,
  recommend: Recommend,
  subscription: Subscription,

  period: z.string().optional(),
  card: z.number().optional(),
  like: z.string(),
  improvement: z.string(),
  contactFollowUp: z.boolean(),
  shareFeedback: z.boolean(),

  social: Social,
});

export type FormData=z.infer<typeof FormSchema>