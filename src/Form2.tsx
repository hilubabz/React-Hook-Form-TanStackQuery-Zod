import { IoIosStar } from "react-icons/io";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Form2() {
  const [next, setNext] = useState<boolean>(false);
  const [savedData, setSavedData] = useState<FormInput>();
  type Review = "excellent" | "good" | "average" | "poor";
  type Recommend = "yes" | "no";
  type Subscription = "basic" | "premium";
  interface Social {
    facebook: string;
    instagram: string;
  }
  type FormInput = {
    fullName: string;
    email: string;
    phone: number[];
    companyName: string;
    dateOfExperience: string;
    rating: number;
    rateQuality: Review;
    rateSupport: Review;
    recommend: Recommend;
    like: string;
    improvement: string;
    contactFollowUp: boolean;
    shareFeedback: boolean;
    subscription: Subscription;
    period: string;
    card: number;
    social: Social;
  };
  const Initial = {
    social: {
      facebook: "",
      instagram: "",
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormInput>({
    mode: "onChange",
    shouldUnregister: true,
    defaultValues: Initial,
  });
  const rating = watch("rating");
  const subscription = watch("subscription");

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    // try {
    //   const result = await axios.post("http://localhost:5000/addData", data);
    //   console.log(result);
    //   if (result.data.success) {
    //     alert(result.data.message);
    //   } else {
    //     alert(result.data.message);
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  };
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/fetchData");
  //         if (res.data.success) {
  //           reset(res.data.data);
  //         } else {
  //           alert(res.data.message);
  //         }
  //       } catch (e) {
  //         alert("Failed to fetch data");
  //         console.log(e);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <>
      <div className="flex items-center justify-center p-4 sm:p-12">
        {/* <!-- Author: FormBold Team -->
            <!-- Learn More: https://formbold.com --> */}
        <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg sm:p-10">
          <img
            src="https://ucarecdn.com/dd89656c-de92-494e-9e4d-2cc0fac0ecf6/surveyform.png"
            alt="Survey Form Illustration"
            className="mb-8 w-full rounded-lg sm:mb-12"
          />

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* <!-- Title and Description --> */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                Customer Feedback Survey
              </h2>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Please provide your feedback to help us improve. All required
                fields are marked with *.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-6">
              <div
                className={`h-10 w-10 rounded-full border-1 flex items-center justify-center ${
                  next ? "" : "bg-blue-500 text-white"
                }`}
              >
                1
              </div>
              <div className="w-10 border-1"></div>
              <div
                className={`h-10 w-10 rounded-full border-1 flex items-center justify-center ${
                  next ? "bg-blue-500 text-white" : ""
                }`}
              >
                2
              </div>
            </div>
            {/* <!-- Basic Information --> */}
            <>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Facebook
                </label>
                <input
                  type="text"
                  {...register("social.facebook", {
                    required: "Please input you facebook URL",
                  })}
                  id="phone"
                  className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                />
                {errors.social?.facebook && (
                  <div className="text-red-700 mt-[6px]">
                    {errors.social?.facebook.message}
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Instagram
                </label>
                <input
                  type="text"
                  {...register("social.instagram", {
                    required: "Please input your Instagram URL",
                  })}
                  id="phone"
                  className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                />
                {errors.social?.instagram && (
                  <div className="text-red-700 mt-[6px]">
                    {errors.social?.instagram.message}
                  </div>
                )}
              </div>
              <input
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition duration-300 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
              />
            </>
          </form>
        </div>
      </div>
    </>
  );
}
