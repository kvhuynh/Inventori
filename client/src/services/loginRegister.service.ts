import axios from "axios";
import * as loginRegisterTypes from "../components/login-register/loginRegisterTypes"

const http = axios.create({
    baseURL: "https://localhost:8000/api/v1",
    withCredentials: true
})

// import 

// ----- Login Operations -----
export const createUser = async (potentialUserInfo: loginRegisterTypes.FormElements) => {
    const res = await http.post("/users/register", potentialUserInfo);
    return res.data;
}


