import axios from "axios";
import { toast } from "react-toastify";

export const onSubmit = async (data, navigate) => {
	try {
		const formData = new FormData();
		formData.append("fullName", data.fullName);
		formData.append("email", data.email);
		formData.append("password", data.password);
		if (data.profilePicture) {
			formData.append("profilePicture", data.profilePicture);
		}
		const response = await axios.post(
			"http://127.0.0.1:5000/register",
			formData
		);
		toast.success(response.data.message, {
			position: "top-center",
			onClose: () => navigate("/"),
		});
	} catch (error) {
		if (error.response?.data) {
			toast.error(error.response.data.message, {
				position: "top-center",
				theme: "colored",
			});
		} else {
			toast.error(error.message + ".Please Try Again", {
				position: "top-center",
				theme: "colored",
			});
		}
	}
};
