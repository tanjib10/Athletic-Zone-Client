import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Pages/Shared/Provider/AuthProvider";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
