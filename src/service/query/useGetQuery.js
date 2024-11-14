import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";


export const useGetQuery = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => request.get("/books").then((res) => res.data),
    })


};
