import React from 'react';
import mobileWoman from "../../images/illustration-woman-online-mobile.svg";

const WomanMd = () => {
	return (
		<div className="mobile absolute hidden lg:block top-[20%] left-[1%] z-30  xl:block 2xl:hidden" data-testid='womanMd'>
			<img src={mobileWoman} alt="test" className=" w-[28rem] mt-12"/>
		</div>
	);
};

export default WomanMd;
