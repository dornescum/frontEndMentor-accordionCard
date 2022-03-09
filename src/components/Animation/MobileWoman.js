import React from 'react';
import mobileWoman from "../../images/illustration-woman-online-mobile.svg";

const MobileWoman = () => {
	return (
		<div className="mobile absolute -top-4 z-30 lg:hidden">
			<img src={mobileWoman} alt="test" className=" w-64 mt-12"/>
		</div>
	);
};

export default MobileWoman;
