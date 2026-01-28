import { createContext, useState } from "react";
import { login as loginAPI } from "../../api/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    
    try {
    const response = await loginAPI(username, password);
    
    // POSTMAN SUCCESS CHECK:
    // If Postman shows "access", then we need response.access
    console.log("Postman-style response:", response);

    if (response && (response.access || response.token)) {
      const token = response.access || response.token;
      localStorage.setItem("access_token", token);
      localStorage.setItem("refresh_token", response.refresh);
      setUser(response.user || { username }); 
      
      console.log("TOKEN SAVED!");
    }
  } catch (error) {
    console.error("--- LOGIN ERROR DETECTED ---");
  console.log("Error Status:", error.response?.status); // Is it 400, 403, 404, or 500?
  console.log("Error Data:", error.response?.data);     // This is Django's specific reason
  console.log("Error Message:", error.message);         // This catches network/CORS issues
  console.error("-----------------------------");
  throw error;
  }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);
export default AuthContext;