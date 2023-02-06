import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default {
  get(url, params) {
    return instance.get(url, { params });
  },
  post(url, data, headers) {
    if (headers) return instance.post(url, data, {headers});
    return instance.post(url, data);
  },
  put(url, data) {
    return instance.put(url, data);
  },
  patch(url, data) {
    return instance.patch(url, data);
  },
  delete(url) {
    return instance.delete(url);
  },
};
