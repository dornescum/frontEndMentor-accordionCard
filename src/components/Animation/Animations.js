import React from 'react';
import Pattern from "./Pattern";
import Woman from "./Woman";
import WomanMd from "./WomanMd";


const Animations = () => {

	return (
		<div className="h-full w-full overflow-hidden flex items-center justify-center mb-0 mt-24 md:mb-0 md:mt-0">
			<Pattern />
			<Woman />
			<WomanMd />
		</div>
	);
};

export default Animations;
