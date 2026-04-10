import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      toast.success("Signup successful!");
      navigate("/login");
    },

    onError: () => {
      toast.error("Signup failed. Please try again.");
    },
  });
};
