import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = async (data) => {
		try {
			const response = await axios.post("http://localhost:5000/login", {
				email: data.email,
				password: data.password,
			});

			localStorage.setItem("user", JSON.stringify(response.data.user));
			navigate("/dashboard");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className="bg-slate-900 dark:bg-gray-900 h-screen">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-slate-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border border-slate-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl leading-tight tracking-tight text-gray-300 font-normal md:text-2xl dark:text-white">
							Login to your account
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
									placeholder="name@company.com"
									{...register("email")}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									{...register("password")}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
								/>
							</div>

							<div className="flex items-start justify-between">
								<div className="flex items-center">
									<input
										id="rememberMe"
										aria-describedby="rememberMe"
										type="checkbox"
										className="w-4 h-4 text-orange-400 bg-gray-300  "
									/>
									<label
										htmlFor="rememberMe"
										className="ml-2 text-sm font-thin text-gray-300 dark:text-gray-300">
										Remember Me
									</label>
								</div>
								<div className="ml-3 text-sm">
									<a
										href="#home"
										className="text-primary-600 hover:underline dark:text-primary-500 text-orange-400">
										Forget Password?
									</a>
								</div>
							</div>

							<button
								type="submit"
								className="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
								Login
							</button>
							<p className="text-sm text-gray-300 font-thin dark:text-gray-400">
								Don't have an account?{" "}
								<Link
									to="/register"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-400">
									Signup here
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
