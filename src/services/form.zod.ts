import { z } from "zod";

const Social = z.object({
  facebook: z.string().url({ message: "Facebook URL is required" }),
  instagram: z.string().url({ message: "Invalid Instagram URL" }),
});

const Review = z.enum(["excellent", "good", "average", "poor"]);
const Recommend = z.enum(["yes", "no"]);
const Subscription = z.enum(["basic", "premium"]);

export const FormSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Please enter your name" })
    .max(20, { message: "Name cannot be longer than 20" }),

  email: z.string().email({ message: "Please enter a valid email" }),

  // Phone as string array; each string must be exactly 10 digits
  phone: z.array(
    z
      .preprocess((val: number) => {
        if (Number.isNaN(val)) {
          return 0;
        } else {
          return Number(val);
        }
      }, z.number().min(1, { message: "Phone number is required" }))
      .refine(
        (val: number) => {
          if (val.toString().length != 10) {
            return false;
          }
          else{
            return true
          }
        },
        { message: "Invalid phone number" }
      )
  ),
  companyName: z.string().min(1, { message: "Company name is required" }),
  dateOfExperience: z
    .date()
    .max(new Date(), { message: "Date cannot be in the future" }),
  rating: z.number().min(1, { message: "Please select a rating" }),

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

export type FormData = z.infer<typeof FormSchema>;
