import React from 'react';
import bgPattern from '../../images/bg-pattern-desktop.svg';
// import bgMobile from './images/bg-pattern-mobile.svg'
import box from '../../images/illustration-box-desktop.svg';
import womanDesktop from '../../images/illustration-woman-online-desktop.svg';
import Box from "./Box";
import Pattern from "./Pattern";
import Woman from "./Woman";

const pattern = {
	// width: "50%",
	// backgroundImage: `url(${bgPattern})`,
	// backgroundImage: `url(${require("../../images/bg-pattern-desktop.svg")})`,
	// backgroundRepeat: "no-repeat",
	// backgroundSize: "200% 200%",
	// backgroundPosition: "115% 50%",
	// overflow: "hidden"
	// backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
	// backgroundImage: `url(${require("../../images/bg-pattern-desktop.svg")})`,
	// backgroundPosition: 'center',
	// backgroundSize: 'cover',
	// backgroundRepeat: 'no-repeat',
	// zIndex:10,
	// background:"red"
};

const Animations = () => {
	return (
		<div className="h-full w-full overflow-hidden flex items-center justify-center">
			<Pattern />
			<Woman />
			{/*<Box/>*/}
		</div>
	);
};

export default Animations;
