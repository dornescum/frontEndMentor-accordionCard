import React, {useState} from 'react';
import arrow from '../../images/icon-arrow-down.svg';

const SingleQuestion = ({question, answer, id}) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article id={id} className="px-0 py-2 border-b-[1px] border-b-stone-300 w-full lg:w-[470px]">
			<div className="flex items-center justify-between px-4 lg:px-0 lg:pr-2">
				<p className={`${showInfo ? "font-bold py-2" : "text-stone-500 py-6"} px-0 hover:text-softOrange 
				cursor-pointer duration-300 ease-out `}
				   onClick={() => setShowInfo(!showInfo)}>{question}</p>
				<div onClick={() => setShowInfo(!showInfo)} className="flex items-center justify-center">
					{showInfo ? (
						<div>
							<img src={arrow} alt="arrow down" className="rotate-180 cursor-pointer"/>
						</div>
					) : (
						<div>
							<img src={arrow} alt="arrow up" className="cursor-pointer"/>
						</div>
					)}
				</div>
			</div>
			{showInfo && <div className="px-4 lg:px-0 text-stone-400">{answer}</div>}
		</article>
	);
};

export default SingleQuestion;
