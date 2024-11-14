import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { request } from "../../config/request";
import { saveState } from "../../config/store";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data) => request.post("/register", data).then((res) => res.data),
   
  });
};
