import { toast } from "react-toastify";

export enum NotificationTypes {
	success = "success",
	error = "error",
}

export const notificationHandler = (type: NotificationTypes, text: string) => {
	if (type === NotificationTypes.success) {
		toast.success(text, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
};
