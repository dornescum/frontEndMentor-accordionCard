import React from 'react';
import womanDesktop from "../../images/illustration-woman-online-desktop.svg";

const Woman = () => {
	return (
		<div className='relative z-10'>
			<div className="fixed top-[4rem] -left-[7rem]">
				<img src={womanDesktop} alt="" className='w-[40rem]'/>
			</div>
		</div>
	);
};

export default Woman;
