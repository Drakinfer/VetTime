import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');

    /**
   * Authentication handler
   * @param {object} param Email and password 
   * @returns {void}
   */
    const loginUser = async ({email, password}) => {
        try {
            const result = await axios.get('http://localhost:8000/user/auth', {
                params: {
                email: email,
                password: password
            }
            });
            setUser(result.data.user)
        } catch (error) {
            console.log(error.message);
        }
    }
    console.log("user", user);
    
    const value = {
        user,
        loginUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider; 