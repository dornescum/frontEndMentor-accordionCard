import React from 'react';
import womanDesktop from "../../images/illustration-woman-online-desktop.svg";

const WomanMd = () => {
	return (
		<div className='relative z-10' data-testid='womanMd'>
			<div className="fixed hidden lg:block lg:top-[8rem] lg:-left-[2rem] xl:hidden">
				<img src={womanDesktop} alt="woman svg" className='md:-[30rem] 2xl:w-[40rem]'/>
			</div>
		</div>
	);
};

export default WomanMd;
