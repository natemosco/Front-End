import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
};

export default axiosWithAuth;

