import axios from "axios";

const axiosInstance =  axios.create();

axiosInstance.interceptors.response.use((response)=>response,
(error)=> {
  return Promise.reject(error);
});

export const http = {
  post : axiosInstance.post,
  patch: axiosInstance.patch,
  delete: axiosInstance.delete,
  get:axiosInstance.get,
  put: axiosInstance.put,
};