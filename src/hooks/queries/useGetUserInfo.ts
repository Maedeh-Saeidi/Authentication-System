"use client";

import { request_get_user_info } from "@/api/requests";
import { useQuery } from "@tanstack/react-query";

export const useGetUserInfo = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: request_get_user_info,
    enabled: false,
    retry: 1,
  });

return query;
};