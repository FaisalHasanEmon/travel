import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_server_domain,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
