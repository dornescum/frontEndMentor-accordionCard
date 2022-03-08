import React from 'react';
import Pattern from "./Pattern";
import Woman from "./Woman";
import {useResultContext} from "../../context/ActiveContextProvider";


const Animations = () => {
	const {showInfo}=useResultContext();
	console.log(showInfo);
	return (
		<div className="h-full w-full overflow-hidden flex items-center justify-center">
			<Pattern />
			<Woman />
			{/*<Box/>*/}
		</div>
	);
};

export default Animations;
