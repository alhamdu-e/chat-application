import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormError from "./FormError";
import { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { onSubmit } from "./RegisterFormHandler";
function Register() {
	const { register, handleSubmit, formState, getValues, setValue } = useForm();
	const { errors } = formState;
	const inputRef = useRef(null);
	const [fileName, setFileName] = useState("Choose file");
	const navigate = useNavigate();
	const [showPAssword, setShowPassword] = useState(false);

	const openfile = () => {
		// Ensure inputRef.current is not null before triggering click
		if (inputRef.current) {
			inputRef.current.click();
		}
	};
	const handleChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			setFileName(file.name);
			setValue("profilePicture", file);
		}
	};
	const onSubmitHandler = async (data) => {
		await onSubmit(data, navigate);
	};

	return (
		<section className="bg-slate-900 ">
			<div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0 pb-72">
				<div className="w-full bg-slate-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  border border-slate-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl leading-tight tracking-tight text-gray-300 font-normal md:text-2xl dark:text-white">
							Create an account
						</h1>
						<form
							className="space-y-4 md:space-y-3 "
							onSubmit={handleSubmit(onSubmitHandler)}>
							{/* Full Name */}
							<div>
								<label
									htmlFor="fullName"
									className="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Full Name
								</label>
								<input
									type="text"
									id="fullName"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
									placeholder="your name"
									{...register("fullName", {
										required: "Name is required",
										pattern: {
											value: /^[A-Za-z\s]+$/i,
											message: "Name should only contain letters and spaces",
										},
									})}
								/>
								{errors?.fullName?.message && (
									<FormError>{errors?.fullName?.message}</FormError>
								)}
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Your email
								</label>
								<input
									type="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
									placeholder="name@company.com"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
											message: "Invalid email format",
										},
									})}
								/>
								{errors?.email?.message && (
									<FormError>{errors?.email?.message}</FormError>
								)}
							</div>

							{/* Password */}
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Password
								</label>
								<div className=" relative">
									<input
										type={showPAssword ? "text" : "password"}
										id="password"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
										placeholder="••••••••"
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 4,
												message: "Password must be greater than 4 characters",
											},
										})}
									/>
									<button
										className="absolute text-lg top-1 right-2 cursor-pointer py-[2px] px-[3px] rounded-full bg-orange-200 transition-colors  ease-in-out duration-300"
										type="button"
										onClick={() =>
											setShowPassword((showPAssword) => !showPAssword)
										}>
										{showPAssword ? <IoEyeOff /> : <IoEyeSharp />}
									</button>
								</div>

								{errors?.password?.message && (
									<FormError>{errors?.password?.message}</FormError>
								)}
							</div>

							{/* Confirm Password */}
							<div>
								<label
									htmlFor="confirmpassword"
									className="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Confirm Password
								</label>
								<input
									type="password"
									id="confirmpassword"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
									{...register("confirmpassword", {
										required: "Please confirm password",
										validate: (value) =>
											value === getValues().password ||
											"Passwords do not match",
									})}
								/>
								{errors?.confirmpassword?.message && (
									<FormError>{errors?.confirmpassword?.message}</FormError>
								)}
							</div>

							{/* Profile Picture */}
							<div>
								<label
									htmlFor="profilePicture"
									className="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Profile Picture
								</label>
								<input
									ref={inputRef}
									type="file"
									accept="image/*"
									className="hidden"
									onChange={handleChange}
								/>
								<button
									className="bg-[#3A1078] text-white py-1 px-2"
									type="button"
									onClick={openfile}>
									{fileName}
								</button>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full text-white bg-slate-600 hover:bg-slate-700 font-medium rounded-lg text-sm px-5 py-2 text-center">
								Create an account
							</button>

							<p className="text-sm text-gray-300 font-thin dark:text-gray-400">
								Have an account?{" "}
								<Link
									to="/login"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-400">
									Login here
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Register;
