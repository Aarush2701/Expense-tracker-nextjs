import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};

export const APIUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
