import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios";

function AddUser({ setShowAddUser, showAddUser, addFriendAndRemoveFriend }) {
	const queryClient = useQueryClient();
	const user = JSON.parse(localStorage.getItem("user"));

	// Fetch non-friend users
	const getNonFriend = async () => {
		const { data } = await axios.get(`user/${user._id}`);
		return data;
	};

	// Using useQuery to fetch data
	const { data, isLoading, isError } = useQuery({
		queryKey: ["nonFriend"],
		queryFn: getNonFriend,
	});

	// Mutation for adding and removing friends
	const { mutate, isLoading: isAdding } = useMutation({
		mutationFn: ({ userId, friendId }) =>
			addFriendAndRemoveFriend(userId, friendId),
		onSuccess: () => {
			// Invalidate the query to refetch data
			queryClient.invalidateQueries({ queryKey: ["nonFriend"] });
			queryClient.invalidateQueries({ queryKey: ["friends"] });
		},
	});
	return (
		<div className="lg:col-span-1 sm:col-span-2  h-screen overflow-y-scroll">
			<div className="w-full sm:w-[48.9vw] lg:w-[24.60vw] border-b border-gray-700 border-solid flex items-center justify-around pt-7 pb-5 bg-slate-900 fixed ">
				<IoArrowBackOutline
					className="text-slate-100 text-4xl ml-4 cursor-pointer border-b-transparent border-b-4 rounded-sm border-solid hover:border-orange-400 transition-colors duration-300 ease-in-out"
					onClick={() => setShowAddUser(!showAddUser)}
				/>
				<input
					type="text"
					placeholder="Start typing"
					className="focus:border-none focus:outline-none px-2 py-1 rounded-lg w-full ml-6 mr-8 bg-orange-100"
				/>
			</div>

			<div className="pt-20 pl-4">
				{isLoading && (
					<div className="flex justify-center items-center pt-12">
						<div className="lds-ring">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				)}
				{!isLoading &&
					!isError &&
					data.map((users) => (
						<div
							key={users._id}
							className="flex items-center justify-start ml-2 pt-5">
							<img
								src={
									users.profilePicture ? users.profilePicture : "./avater.svg"
								}
								alt=""
								className="w-10 rounded-[100px]"
							/>
							<div className="ml-2 flex justify-between w-full mr-4">
								<div>
									<h2 className="text-gray-400 font-thin">{users.fullName}</h2>
								</div>
								<button
									className="bg-slate-300 py-1 px-2 rounded-md font-semibold hover:bg-slate-50 transition-colors ease-out duration-[7000] text-sm"
									onClick={() =>
										mutate({
											userId: user._id,
											friendId: users._id,
										})
									}>
									{isAdding ? "Adding..." : "Add"}
								</button>
							</div>
						</div>
					))}
				{!isLoading && !isError && data.length === 0 && (
					<div className="pt-12 text-slate-300">
						<p>No User To Add</p>
					</div>
				)}
				{isError && (
					<div className="pt-12 text-slate-300">
						<p>Oops! Something went wrong. Try again.</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default AddUser;
