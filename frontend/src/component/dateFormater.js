import { format, differenceInDays } from "date-fns";

export const FormateDate = (date) => {
	if (date) {
		const storedDate = new Date(date);
		const today = new Date();

		// Calculate the difference in days
		const dayDifference = differenceInDays(today, storedDate);

		// Format the date based on the difference
		if (dayDifference < 5) {
			return format(storedDate, "ccc");
		} else {
			return format(storedDate, "PP");
		}
	}
};
