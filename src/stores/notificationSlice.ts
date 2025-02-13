import { StateCreator } from "zustand";
import { toast } from "react-toastify";


export type notificationSliceType = {
    notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
  notifyInfo: (message: string) => void;
}

export const createNotificationSlice : StateCreator<notificationSliceType> = () => ({
    notifySuccess: (message) => {
        toast.success(message, { 
            position: "top-right", 
        });
      },
      notifyError: (message) => {
        toast.error(message, { position: "top-right" });
      },
      notifyInfo: (message) => {
        toast.info(message, { position: "top-right" });
      },
})