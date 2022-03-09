import React from 'react';
import box from '../../images/illustration-box-desktop.svg';
import {useResultContext} from "../../context/ActiveContextProvider";


const Box = () => {
	const {toggleBox}=useResultContext();

	return (
		<div onClick={()=>toggleBox()}>
			<img src={box} alt='orange box' className='z-50 hidden lg:block'/>
		</div>
	);
};

export default Box;
