/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext({ isAuthenticated: false });

export const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({});

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				loading,
				setLoading,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
