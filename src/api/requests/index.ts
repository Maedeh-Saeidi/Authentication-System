import { BASE_URL } from "../CONSTANTS";
import { http } from "../http";

export const request_get_user_info = async () =>{
  return await http.get(BASE_URL + "/?results=1&nat=us")
};