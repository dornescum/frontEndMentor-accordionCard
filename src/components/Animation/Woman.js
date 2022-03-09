import React from 'react';
import womanDesktop from "../../images/illustration-woman-online-desktop.svg";

const Woman = () => {
	return (
		<div className='relative z-10' data-testid='woman'>
			<div className="fixed hidden 2xl:block  2xl:top-[4rem] 2xl:-left-[7rem]">
				<img src={womanDesktop} alt="woman svg" className='md:-[30rem] 2xl:w-[40rem]'/>
			</div>
		</div>
	);
};

export default Woman;
