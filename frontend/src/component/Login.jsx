function Login() {
	return (
		<section class="bg-slate-900 dark:bg-gray-900 h-screen">
			<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div class="w-full bg-slate-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border border-slate-700">
					<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 class="text-xl leading-tight tracking-tight text-gray-300 font-normal md:text-2xl dark:text-white">
							Create an account
						</h1>
						<form class="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									for="email"
									class="block mb-2 text-sm  text-gray-300 font-thin dark:text-white">
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
									placeholder="name@company.com"
									required=""
								/>
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-sm text-gray-300 font-thin dark:text-white">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-orange-200"
									required=""
								/>
							</div>

							<div class="flex items-start">
								<div class="ml-3 text-sm">
									<label
										for="terms"
										class="text-gray-300 font-thin dark:text-gray-300">
										<a
											class="text-primary-600 hover:underline dark:text-primary-500"
											href="#home">
											Forget Password?
										</a>
									</label>
								</div>
							</div>
							<button
								type="submit"
								class="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
								Create an account
							</button>
							<p class="text-sm text-gray-300 font-thin dark:text-gray-400">
								Dont't have an account?{" "}
								<a
									href="#home"
									class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-400">
									Signup here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
