import { useContext } from "react";
import { AuthContext } from "../contexts/authcontext";

export const useAuth = () => {
    return useContext(AuthContext);
};