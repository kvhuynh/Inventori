import axios from "axios";
import { RegisterData } from "../components/login-register/Register";

const http = axios.create({
    baseURL: "https://localhost:8000/api/v1",
    withCredentials: true
})

// ----- Register Operations -----
export const createUser = async (potentialUserInfo: RegisterData) => {
    const res = await http.post("/users/register", potentialUserInfo);
    return res.data;
}


