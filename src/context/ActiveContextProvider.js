import React, {createContext, useContext, useState, useEffect} from "react";

const ActiveContext = createContext();
export const ActiveContextProvider =({children})=>{
	const [showInfo, setShowInfo] = useState(false);

	function toggleBox() {
		setShowInfo(!showInfo);
	}

	return <ActiveContext.Provider value={{showInfo, setShowInfo, toggleBox}}>
		{children}
	</ActiveContext.Provider>
}
export const useResultContext = () => useContext(ActiveContext);
