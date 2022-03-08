import React from 'react';
import bgPattern from "../../images/bg-pattern-desktop.svg";

const Pattern = () => {
	return (
		<div className='overflow-hidden'>
			<div className="absolute -top-36 -left-96 ring-red-400">
				<img src={bgPattern} alt="" className="h-[800px] w-[900px]"/>
			</div>
		</div>
	);
};

export default Pattern;
