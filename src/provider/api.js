import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    // "x-api-key": "1234",
  },
});

api.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // const navigate = useNavigate();
    // const location = useLocation();
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/sign-in"
    }
    return Promise.reject(error);
  }
);
