// import { useForm, type SubmitHandler } from "react-hook-form";
// import axios from "axios";

// type Gender = "male" | "female";

// type FormInput = {
//   name: string;
//   age: number;
//   email: string;
//   phone: number;
//   address: string;
//   gender: Gender;
// };
// // function Input(props: UseControllerProps<FormInput>) {
// //   const { field, fieldState } = useController(props)

// //   return (
// //     <div>
// //       <label>{props.name}</label>
// //       <input {...field} placeholder={props.name}/>
// //       <p>{fieldState.isTouched && "Touched"}</p>
// //       <p>{fieldState.isDirty && "Dirty"}</p>
// //       <p>{fieldState.invalid ? "invalid" : "valid"}</p>
// //     </div>
// //   )
// // }
// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, dirtyFields, touchedFields },
//   } = useForm<FormInput>({ mode: "onChange" });

//   const onSubmit: SubmitHandler<FormInput> = async (data) => {
//     console.log(data);
//     try {
//       const res = await axios.post("http://localhost:5000/addData", data);
//       if (res.data.success) {
//         alert(res.data.message);
//       } else {
//         alert(res.data.message);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   // const onSubmit=(data:FormInput)=>{
//   //   console.log(data)
//   // }
//   const watchedName = watch("name");

//   return (
//     <>
//       <div className="font-semibold text-3xl text-center">React Hook Form</div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex item-center justify-center">
//           <label className="text-xl">Name</label>
//           <input
//             {...register("name", {
//               required: "Name field is required",
//               maxLength: {
//                 value: 20,
//                 message: "Name cannot exceed 20 characters",
//               },
//             })}
//             className="border-1"
//           />
//         </div>
//         {dirtyFields.name && <p>Field is changed</p>}
//         {errors.name && <p>{errors.name.message}</p>}
//         {touchedFields.name && <p>Field is touched</p>}
//         {/* <Input name="name" control={control} rules={{required:true, maxLength:20}}/> */}
//         <div className="flex item-center justify-center">
//         <label>Age:</label>
//         <input
//           type="number"
//           {...register("age", {
//             required: "Age field is required",
//             min: { value: 18, message: "Age must at least be 18" },
//             max: { value: 100, message: "Age cannot be greater than 100" },
//           })}
//           className="border-1"
//         />
//         </div>
//         {errors.age && <p>{errors.age.message}</p>}
//         <div className="flex item-center justify-center">
//         <label>Email:</label>
//         <input
//           type="text"
//           {...register("email", {
//             required: "Email field is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: "Invalid Email",
//             },
//           })}
//           className="border-1"
//         />
//         </div>
//         {errors.email && <p>{errors.email.message}</p>}
//         <label>Phone:</label>
//         <input type="number" {...register("phone")} className="border-1" />
//         <br />
//         <label>Address:</label>
//         <input {...register("address")} className="border-1" />
//         <br />
//         <label>Gender:</label>
//         <input
//           type="radio"
//           value="male"
//           {...register("gender", { required: true })}
//         />{" "}
//         Male
//         <input
//           type="radio"
//           value="female"
//           {...register("gender", { required: true })}
//         />{" "}
//         Female
//         <br />
//         <input type="submit" />
//         <div>{watchedName}</div>
//       </form>
//     </>
//   );
// }


import { IoIosStar } from "react-icons/io";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
// import { IoIosStar } from "react-icons/io";


export default function App(){
  type Review='excellent'|'good'|'average'|'poor'
  type Recommend='yes'|'no'
  type FormInput={
    fullName:string,
    email:string,
    phone:number,
    companyName:string,
    dateOfExperience:string,
    rating:string,
    rateQuality:Review,
    rateSupport:Review,
    recommend:Recommend,
    like:string,
    improvement:string,
    contactFollowUp:boolean,
    shareFeedback:boolean
  }

  const [star,setStar]=useState<number>(0)
  const {register, handleSubmit, formState:{errors}}=useForm<FormInput>({mode:'onChange'})

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  }


  return(
    <>
       <div className="flex items-center justify-center p-4 sm:p-12">
            {/* <!-- Author: FormBold Team -->
            <!-- Learn More: https://formbold.com --> */}
            <div
                className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg sm:p-10"
            >
                <img
                    src="https://ucarecdn.com/dd89656c-de92-494e-9e4d-2cc0fac0ecf6/surveyform.png"
                    alt="Survey Form Illustration"
                    className="mb-8 w-full rounded-lg sm:mb-12"
                />

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <!-- Title and Description --> */}
                    <div className="mb-8 text-center">
                        <h2
                            className="text-2xl font-semibold text-gray-800 sm:text-3xl"
                            >Customer Feedback Survey</h2>
                        <p className="mt-2 text-sm text-gray-600 sm:text-base"
                            >Please provide your feedback to help us improve.
                            All required fields are marked with *.</p>
                    </div>

                    {/* <!-- Basic Information --> */}
                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Full Name</label>
                        <input
                            type="text"
                            {...register('fullName',{required:'Name is required',maxLength:{value:20, message:'Full name cannot be of length greater than 20'}})}
                            id="fullname"
                            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"  
                        />
                        {errors.fullName&&<div className="text-red-700 mt-[6px]">{errors.fullName.message}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Email Address*</label>
                        <input
                            type="email"
                            {...register('email', {required:'Email is required',pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:'Invalid Email'}})}
                            id="email"
                            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                        {errors.email&&<div className="text-red-700 mt-[6px]">{errors.email.message}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Phone Number (Optional)</label>
                        <input
                            type="text"
                            {...register('phone',{minLength:{value:10, message:'Invalid Phone'},maxLength:{value:10, message:'Invalid Phone'}})}
                            id="phone"
                            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                        />
                        {errors.phone&&<div className="text-red-700 mt-[6px]">{errors.phone.message}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Company Name (for B2B)</label>
                        <input
                            type="text"
                            {...register('companyName',{required:'Company name is required'})}
                            id="company"
                            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                        />
                        {errors.companyName&&<div className="text-red-700 mt-[6px]">{errors.companyName.message}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Date of Experience*</label>
                        <input
                            type="date"
                            {...register('dateOfExperience',{required:'Date of Experience is required'})}
                            id="experience-date"
                            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"

                            required
                        />
                        {errors.dateOfExperience&&<div className="text-red-700 mt-[6px]">{errors.dateOfExperience.message}</div>}
                    </div>

                    {/* <!-- Rating Fields --> */}
                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Overall Satisfaction*</label>
                        <div
                            className="star-rating-group flex flex-row-reverse justify-end"
                            ><input
                                type="radio"
                                id="star5"
                                {...register('rating')}
                                value='5 star'
                                className="hidden"
                                checked={star==5?true:false}
                                required
                            /><label
                                title="5 stars"
                                className="cursor-pointer p-1 text-2xl text-gray-300" onClick={()=>setStar(5)}
                                ><IoIosStar className={`${star==5?'text-amber-300':''}`}/></label>
                            <input
                                type="radio"
                                id="star4"
                                {...register('rating')}
                                value='4 star'
                                className="hidden"
                                checked={star==4?true:false}
                            /><label
                                title="4 stars"
                                className="cursor-pointer p-1 text-2xl text-gray-300" onClick={()=>setStar(4)}
                                ><IoIosStar className={`${star>=4?'text-amber-300':''}`}/></label>
                            <input
                                type="radio"
                                id="star3"
                                {...register('rating')}
                                value='3 star'
                                className="hidden"
                                checked={star==3?true:false}
                            /><label
                                title="3 stars"
                                className="cursor-pointer p-1 text-2xl text-gray-300" onClick={()=>setStar(3)}
                                ><IoIosStar className={`${star>=3?'text-amber-300':''}`}/></label>
                            <input
                                type="radio"
                                id="star2"
                                {...register('rating')}
                                value='2 Star'
                                className="hidden"
                                checked={star==2?true:false}
                            /><label
                                title="2 stars"
                                className="cursor-pointer p-1 text-2xl text-gray-300" onClick={()=>setStar(2)}
                                ><IoIosStar className={`${star>=2?'text-amber-300':''}`}/></label>
                            <input
                                type="radio"
                                id="star1"
                                {...register('rating')}
                                value='1 star'
                                className="hidden"
                                checked={star==1?true:false}
                            /><label
                                title="1 star"
                                className="cursor-pointer p-1 text-2xl text-gray-300" onClick={()=>setStar(1)}
                                ><IoIosStar className={`${star>=1?'text-amber-300':''}`}/></label></div>
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Rate the Quality of Service/Product</label>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateQuality', {required:'Please select a field'})}
                                    value="excellent"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Excellent</span></label>
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateQuality')}
                                    value="good"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Good</span></label>
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateQuality')}
                                    value="average"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Average</span></label>
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateQuality')}
                                    value="poor"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Poor</span></label>
                        </div>
                        {errors.rateQuality&&<div className="text-red-700 mt-[6px]">{errors.rateQuality.message}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Rate the Communication / Support</label>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateSupport',{required:'Please select a field'})}
                                    value="excellent"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Excellent</span></label>
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateSupport')}
                                    value="good"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Good</span></label>
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateSupport')}
                                    value="average"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Average</span></label>
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('rateSupport')}
                                    value="poor"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Poor</span></label>
                        </div>
                        {errors.rateSupport&&<div className="text-red-700 mt-[6px]">{errors.rateSupport.message}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >Would You Recommend Us?</label>
                        <div className="flex gap-6">
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('recommend',{required:'Please select a field'})}
                                    value="yes"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >Yes</span></label>
                            <label className="flex items-center"
                                ><input
                                    type="radio"
                                    {...register('recommend')}
                                    value="no"
                                    className="form-radio h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600"
                                    >No</span></label>
                        </div>
                        {errors.recommend&&<div className="text-red-700 mt-[6px]">{errors.recommend.message}</div>}
                    </div>

                    {/* <!-- Open-Ended Feedback --> */}
                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >What did you like most?</label>
                        <textarea
                            {...register('like',{required:'Please write something you liked about us'})}
                            id="liked-most"
                            rows={3}
                            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                        ></textarea>
                        {errors.like&&<div className="text-red-700 mt-[6px]">{errors.like.message}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            >What could we improve?</label>
                        <textarea
                            {...register('improvement',{required:'Please insert something'})}
                            id="improvement"
                            rows={3}
                            className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                        ></textarea>
                        {errors.improvement&&<div className="text-red-700 mt-[6px]">{errors.improvement.message}</div>}
                    </div>

                    {/* <!-- Consent & Follow-up --> */}
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            {...register('contactFollowUp')}
                            id="follow-up"
                            className="form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            className="ml-2 text-sm text-gray-600"
                            >I allow you to contact me for follow-up.</label>
                    </div>

                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            {...register('shareFeedback')}
                            id="testimonial-consent"
                            className="form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            className="ml-2 text-sm text-gray-600"
                            >I agree to share this feedback publicly (for
                            testimonial/marketing use).</label>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <input
                        type="submit"
                        className="w-full rounded-md bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition duration-300 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                        />
                </form>
            </div>
        </div>
    </>
  )
}