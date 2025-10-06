export type Review = "excellent" | "good" | "average" | "poor";
export  type Recommend = "yes" | "no";
 export type Subscription = "basic" | "premium";
  interface Social {
    facebook: string;
    instagram: string;
  }
 export type FormInput = {
    fullName: string;
    email: string;
    phone: string[];
    companyName: string;
    dateOfExperience: Date;
    rating: number;
    rateQuality: Review;
    rateSupport: Review;
    recommend: Recommend;
    like: string;
    improvement: string;
    contactFollowUp: boolean;
    shareFeedback: boolean;
    subscription: Subscription;
    period?: string;
    card?: number;
    social: Social;
  };