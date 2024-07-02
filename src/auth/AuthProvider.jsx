import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  function logout() {
    setToken(null);
  }

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const authContextValue = {
    token,
    setToken,
    logout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;