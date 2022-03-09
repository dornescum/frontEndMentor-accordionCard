import React from 'react';
import mobilePattern from "../../images/bg-pattern-mobile.svg";

const MobilePattern = () => {
	return (
		<div className="mobile absolute top-40 z-20 lg:hidden">
			<img src={mobilePattern} alt="" className="block max-w-full"/>
		</div>
	);
};

export default MobilePattern;
