import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,

    onSuccess: () => {
      toast.success("Login successful!");
      navigate("/dashboard");
    },

    onError: () => {
      toast.error("Login failed. Please try again.");
    },
  });
};
