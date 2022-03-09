import React from 'react';
import womanDesktop from "../../images/illustration-woman-online-desktop.svg";

const Woman = () => {
	return (
		<div className='relative z-10'>
			<div className="fixed hidden lg:block lg:top-[4rem] lg:-left-[7rem]">
				<img src={womanDesktop} alt="" className='w-[40rem]'/>
			</div>
		</div>
	);
};

export default Woman;
