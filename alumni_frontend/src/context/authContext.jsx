import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
	chat: false,
	userProfile: false,
	notification: false,
  };

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentMode, setCurrentMode] = useState('Light');
	const [currentColor, setCurrentColor] = useState('#3DC2EC');
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("alumni")) || null);

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
	  };
	
	  const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
	  };

	
	const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

	return <AuthContext.Provider value={{ setColor, setMode, activeMenu, setActiveMenu, currentColor, setCurrentColor, isClicked, setIsClicked, currentMode, setCurrentMode, screenSize, setScreenSize, handleClick, authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
