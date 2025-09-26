import { IoIosStar } from "react-icons/io";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import type { FormInput } from "./services/form.types";
import useFormData from "./hooks/useFormData";
import useAddFormData from "./hooks/useAddFormData";
import { DevTool } from "@hookform/devtools";
export default function App() {
  const [next, setNext] = useState<boolean>(false);
  const Initial = {
    fullName:'',
    email:'',
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
    trigger,
    reset,
    control
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: Initial,
  });
  const rating = watch("rating");
  const subscription = watch("subscription");
  console.log(watch())

  const {isPending,data,error}=useFormData()
  // useEffect(()=>{
  //   reset(data?.data)
  // },[data])

  const addFormDatas=useAddFormData()
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    if(!next){
      setNext(true)
    }
    else if(subscription=='basic'){
        const {card,period,...rest}=data
        addFormDatas.mutate(rest)
        setNext(false)
    }
    else{
        console.log(data)
        addFormDatas.mutate(data)
        setNext(false)
    }
  };

  const validateNext=async ()=>{
    const isValid=await trigger()
    if(isValid){
      setNext(true)
    } 
  }

  if(isPending) return <div>Loading...</div>
  if(error) return <div>An error has occured {error.message}</div>
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
            <div className="w-full flex justify-center items-center mb-6 relative">
              {next&&(<div className="absolute left-0 text-gray-500 text-sm cursor-pointer" onClick={()=>setNext(false)}>{'< Back'}</div>)}
                <div className={`h-10 w-10 rounded-full border-1 flex items-center justify-center ${next?'':"bg-blue-500 text-white"}`}>1</div>
                <div className="w-10 border-1"></div>
                <div className={`h-10 w-10 rounded-full border-1 flex items-center justify-center ${next?'bg-blue-500 text-white':''}`}>2</div>
            </div>
            {/* <!-- Basic Information --> */}

            {next ? (
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
            ) : (
              <>
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Name is required",
                      maxLength: {
                        value: 20,
                        message:
                          "Full name cannot be of length greater than 20",
                      },
                    })}
                    id="fullname"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  />
                  {errors.fullName && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.fullName.message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid Email",
                      },
                    })}
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                    required
                  />
                  {errors.email && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number 1
                  </label>
                  <input
                    type="text"
                    {...register("phone.0", {
                      minLength: { value: 10, message: "Invalid Phone" },
                      maxLength: { value: 10, message: "Invalid Phone" },
                    })}
                    id="phone"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  />
                  {errors.phone?.[0] && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.phone?.[0].message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number 2
                  </label>
                  <input
                    type="text"
                    {...register("phone.1", {
                      minLength: { value: 10, message: "Invalid Phone" },
                      maxLength: { value: 10, message: "Invalid Phone" },
                    })}
                    id="phone"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  />
                  {errors.phone?.[1] && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.phone?.[1].message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Company Name (for B2B)
                  </label>
                  <input
                    type="text"
                    {...register("companyName", {
                      required: "Company name is required",
                    })}
                    id="company"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  />
                  {errors.companyName && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.companyName.message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Date of Experience*
                  </label>
                  <input
                    type="date"
                    {...register("dateOfExperience", {
                      required: "Date of Experience is required",
                      max: {
                        value: new Date().toISOString(),
                        message: "Date cannot be in future",
                      },
                    })}
                    id="experience-date"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                    required
                  />
                  {errors.dateOfExperience && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.dateOfExperience.message}
                    </div>
                  )}
                </div>

                {/* <!-- Rating Fields --> */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Overall Satisfaction*
                  </label>
                  <div className="star-rating-group flex flex-row justify-start">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <label
                        key={val}
                        className="cursor-pointer p-1 text-2xl text-gray-300"
                      >
                        <input
                          type="radio"
                          value={val}
                          {...register("rating", {
                            required: true,
                            valueAsNumber: true,
                          })}
                          checked={rating==val?true:false}
                          className="hidden"
                        />
                        <IoIosStar
                          className={`${rating >= val ? "text-amber-300" : ""}`}
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Rate the Quality of Service/Product
                  </label>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateQuality", {
                          required: "Please select a field",
                        })}
                        value="excellent"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Excellent
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateQuality")}
                        value="good"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Good</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateQuality")}
                        value="average"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Average
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateQuality")}
                        value="poor"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Poor</span>
                    </label>
                  </div>
                  {errors.rateQuality && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.rateQuality.message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Rate the Communication / Support
                  </label>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateSupport", {
                          required: "Please select a field",
                        })}
                        value="excellent"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Excellent
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateSupport")}
                        value="good"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Good</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateSupport")}
                        value="average"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Average
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("rateSupport")}
                        value="poor"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Poor</span>
                    </label>
                  </div>
                  {errors.rateSupport && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.rateSupport.message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Would You Recommend Us?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("recommend", {
                          required: "Please select a field",
                        })}
                        value="yes"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("recommend")}
                        value="no"
                        className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">No</span>
                    </label>
                  </div>
                  {errors.recommend && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.recommend.message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <div className="mb-2">Choose Your Subscription</div>
                  <div className="flex space-x-4">
                    <div className="flex space-x-2">
                      <input
                        type="radio"
                        {...register("subscription", {
                          required: "Please select a subscription plan",
                        })}
                        value="basic"
                      />
                      <label className="text-sm text-gray-600">Basic</label>
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="radio"
                        {...register("subscription")}
                        value="premium"
                      />
                      <label className="text-sm text-gray-600">Premium</label>
                    </div>
                  </div>
                  {errors.subscription && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.subscription.message}
                    </div>
                  )}
                </div>
                {subscription == "premium" && (
                  <>
                    <div className="mb-6">
                      <div className="mb-2">
                        Please select subscription period
                      </div>
                      <select
                        className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                        {...register("period", {
                          required: "Please select the period of subscription",
                        })}
                      >
                        <option value="1 month">1 month</option>
                        <option value="6 month">6 month</option>
                        <option value="1 year">1 year</option>
                      </select>
                      {errors.period && (
                        <div className="text-red-700 mt-[6px]">
                          {errors.period.message}
                        </div>
                      )}
                    </div>
                    <div className="mb-6">
                      <div className="mb-2">Card Information</div>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                        {...register("card", {
                          required: "Please enter your card number",
                        })}
                      />
                      {errors.card && (
                        <div className="text-red-700 mt-[6px]">
                          {errors.card.message}
                        </div>
                      )}
                    </div>
                  </>
                )}
                {/* <!-- Open-Ended Feedback --> */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    What did you like most?
                  </label>
                  <textarea
                    {...register("like", {
                      required: "Please write something you liked about us",
                    })}
                    id="liked-most"
                    rows={3}
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  ></textarea>
                  {errors.like && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.like.message}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    What could we improve?
                  </label>
                  <textarea
                    {...register("improvement", {
                      required: "Please insert something",
                    })}
                    id="improvement"
                    rows={3}
                    className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  ></textarea>
                  {errors.improvement && (
                    <div className="text-red-700 mt-[6px]">
                      {errors.improvement.message}
                    </div>
                  )}
                </div>

                {/* <!-- Consent & Follow-up --> */}
                <div className="mb-6 flex items-center">
                  <input
                    type="checkbox"
                    {...register("contactFollowUp")}
                    id="follow-up"
                    className="form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    I allow you to contact me for follow-up.
                  </label>
                </div>

                <div className="mb-6 flex items-center">
                  <input
                    type="checkbox"
                    {...register("shareFeedback")}
                    id="testimonial-consent"
                    className="form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    I agree to share this feedback publicly (for
                    testimonial/marketing use).
                  </label>
                </div>

                {/* <!-- Submit Button --> */}
                <button
                  onClick={validateNext}
                  className="w-full rounded-md bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition duration-300 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                >
                  Next
                </button>
              </>
            )}
          </form>
      <DevTool control={control} /> 

        </div>
      </div>
    </>
  );
}


// import { Routes, Route } from "react-router-dom";
// import Form1 from "./Form1";
// import Form2 from "./Form2";

// export default function App(){
//     return(
//         <Routes>
//             <Route path="/" element={<Form1/>}/>
//             <Route path="/form2" element={<Form2/>}/>
//         </Routes>
//     )
// }