import React from 'react';
import bgPattern from "../../images/bg-pattern-desktop.svg";

const Pattern = () => {
	return (
		<div className='overflow-hidden'>
			<div className="absolute -top-[17rem] -left-[26rem] ring-red-400">
				<img src={bgPattern} alt="" className="h-[1010px] w-[935px]"/>
			</div>
		</div>
	);
};

export default Pattern;
