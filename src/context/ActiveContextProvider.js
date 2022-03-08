import React, {createContext, useContext, useState, useEffect} from "react";

const ActiveContext = createContext();
export const ActiveContextProvider =({children})=>{
	const [showInfo, setShowInfo] = useState(false);


	return <ActiveContext.Provider value={{showInfo}}>
		{children}
	</ActiveContext.Provider>
}
export const useResultContext = () => useContext(ActiveContext);
