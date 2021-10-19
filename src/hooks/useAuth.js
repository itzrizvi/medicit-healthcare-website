import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

// Creating Useauth Function for Context
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;