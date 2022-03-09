import React from 'react';
import bgPattern from "../../images/bg-pattern-desktop.svg";

const Pattern = () => {
	return (
		<div className='overflow-hidden'>
			<div className="absolute left-[1rem] -top-[15rem] lg:-top-[17rem] lg:-left-[26rem]">
				<img src={bgPattern} alt="" className="max-w-full hidden lg:block   lg:h-[1010px]  lg:w-[935px]"/>
			</div>
		</div>
	);
};

export default Pattern;
